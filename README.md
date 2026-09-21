# OAD coûts techniques — vignoble champenois

Outil d'aide à la décision qui chiffre le **coût opérationnel par hectare** d'une exploitation champenoise, profil par profil : main-d'œuvre, matériel, intrants, prestations et temps de travaux. Il est adapté aux conditions de la Champagne : vignes étroites, petites parcelles, vendange manuelle.

**Périmètre.** Coûts techniques des opérations culturales et de la récolte.
**Hors périmètre.** Charges de structure, fermage, amortissement des plantations, rémunération de l'exploitant, pressurage, stockage de la réserve.

Le résultat se lit comme une **marge sur coûts opérationnels**, pas comme un coût de revient.

---

## Sommaire

1. [Démarrer](#1-démarrer)
2. [Structure du dossier](#2-structure-du-dossier)
3. [Utiliser l'outil](#3-utiliser-loutil)
4. [Méthodes de calcul](#4-méthodes-de-calcul)
5. [Variantes de méthode](#5-variantes-de-méthode)
6. [Données et sources](#6-données-et-sources)
7. [État du référentiel et limites](#7-état-du-référentiel-et-limites)
8. [Tests](#8-tests)
9. [Travailler avec Claude Code](#9-travailler-avec-claude-code)
10. [Tâches courantes](#10-tâches-courantes)
11. [Arbitrages ouverts](#11-arbitrages-ouverts)
12. [Journal des décisions](#12-journal-des-décisions)
13. [Recette humaine avant diffusion](#13-recette-humaine-avant-diffusion)

---

## 1. Démarrer

**Utiliser l'outil.** Double-cliquer sur `index.html`. Il n'y a ni installation, ni serveur, ni connexion requise. Le fichier `data/referentiel.js` doit rester à côté, dans le dossier `data/`.

**Où vont les saisies.** Elles sont enregistrées dans le navigateur uniquement (stockage local). Le bouton « Revenir aux valeurs d'origine » les efface.

**Diffuser en un seul fichier** (envoi par mail, publication claude.ai) :
```
node .claude/outils/fichier-unique.js      → index-autonome.html
```
Ce fichier est régénéré à la demande et n'est pas versionné.

**Lancer les tests** (Node ≥ 20, aucune dépendance) :
```
node --test
```

## 2. Structure du dossier

```
index.html                 l'application complète, en 4 sections :
                             STYLE      jetons de couleur clair/sombre, mise en page
                             PAGE       en-tête, onglets, zone principale
                             MOTEUR     calcul pur (Core) + cas de validation — aucun accès à la page
                             INTERFACE  rendu, édition, export — aucune formule métier
data/
  referentiel.js           barèmes, opérations, profils, scénarios, sources datées
  archive/                 classeur Excel d'origine (v2) — archive, ne fait pas foi
tests/
  parite.test.js           9 cas figés sur le classeur v2 et les barèmes sourcés
  moteur.test.js           invariants de calcul
  referentiel.test.js      cohérence des données
  page.test.js             règles de construction de index.html
  charger.js               charge le bloc MOTEUR de index.html et le référentiel
  valider-referentiel.js   règles de validation des données
.claude/
  CLAUDE.md                consignes de travail pour Claude Code
  settings.json            permissions et hook
  hooks/apres-edition.js   relance les tests après chaque modification
  commands/                /verifier, /maj-valeur, /arbitrage, /publier
  outils/ref.js            lecture et modification ciblées du référentiel
  outils/fichier-unique.js produit index-autonome.html
```

**Règle d'architecture.** Toute formule vit dans le bloc MOTEUR, et les tests exécutent ce bloc tel quel. Il n'y a donc aucune étape de construction et aucun écart possible entre ce qui est testé et ce qui tourne dans le navigateur.

## 3. Utiliser l'outil

**En-tête.** Il contient :
- le choix du profil d'exploitation : 36 profils, croisant classe de surface, département et certification ;
- la synthèse : coût par ha, coût par kg commercialisable, heures de main-d'œuvre et de traction par ha, marge sur coûts opérationnels ;
- un rappel de la méthode active.

| Onglet | Contenu |
|---|---|
| **Scénario** | Composition du coût par poste et par famille d'opérations, alertes, matériel mobilisé (heures du scénario comparées à celles du barème). Liste des opérations du profil : on peut changer une opération, modifier le nombre de passages, ajouter ou retirer une ligne, exporter en CSV. Un profil vide peut partir de SC_2. |
| **Opérations** | Référentiel des 58 opérations, modifiable : code, famille, libellé, conduite, organisation, main-d'œuvre, h/ha, machine, intrant, quantité, prestation, source. Les valeurs s'entendent par hectare et par passage. |
| **Barèmes** | Main-d'œuvre (brut et charges), matériel (valeur, durée, heures, entretien, consommation, assurance), intrants (prix et unité, avec filtre). |
| **Paramètres et méthodes** | Rendement, mise en réserve, prix du raisin, taux d'intérêt, GNR. Choix des méthodes (section 5). Export et import du référentiel en JSON, retour aux valeurs d'origine. |
| **Débit de chantier** | Temps manuel et mécanisé par hectare selon la géométrie de la parcelle, et sensibilité à la vitesse. |
| **Contrôles et tests** | Cohérence du référentiel en cours d'édition, et exécution des 9 cas de validation sur les valeurs d'origine. |

## 4. Méthodes de calcul

Toutes les grandeurs sont par hectare. Une ligne de scénario correspond à une opération multipliée par son nombre de passages.

**Coût d'une opération, pour un passage**

| Poste | Formule |
|---|---|
| Main-d'œuvre | h/ha × taux horaire ; taux = brut × (1 + charges). Une charge « NA » vaut 0. |
| Heures de traction | h/ha de l'opération si une machine est renseignée, sinon 0. Le tractoriste est compté dans la main-d'œuvre : **les deux temps ne s'additionnent jamais**. |
| Matériel | heures de traction × coût horaire. Coût horaire = [annuité(taux, durée, valeur) + entretien + autres frais + assurance] ÷ heures annuelles + consommation (L/h) × prix du GNR. |
| Intrants | quantité × prix de l'intrant référencé (identifiant interne `I###`, unique). |
| Prestation | montant saisi en €/ha. |

**Synthèse d'un scénario**
- Coût par ha, avec sa décomposition par poste et par famille.
- Heures de main-d'œuvre par ha et heures de traction par ha.
- Produit = rendement commercialisable × prix du raisin.
- Marge sur coûts opérationnels.
- Coût par kg commercialisable.
- Coût à l'échelle de l'exploitation = coût par ha × surface moyenne du profil (surface estimée ÷ nombre d'exploitations).

**Débit de chantier**
- Rangs = arrondi(largeur ÷ écartement entre rangs).
- Passages = arrondi supérieur(rangs ÷ rangs par passage).
- Temps de travail = longueur × passages ÷ vitesse + passages × durée d'un demi-tour.
- Temps total = travail × (1 + part d'arrêt + part de route), ramené à l'hectare.

Sur des rangs courts, les demi-tours dominent. Sur la parcelle d'exemple (rangs de 24 m, à 4 km/h), ils représentent 68 % du temps de travail.

## 5. Variantes de méthode

La variante **par défaut reproduit le classeur Excel v2**. Les autres sont proposées pour les arbitrages de la section 11 ; elles ne sont pas tranchées.

| Option | Valeurs | Effet | SC_2 |
|---|---|---|---|
| Coût horaire du matériel | **heures du barème** / heures du scénario | Heures annuelles du barème, ou heures réellement mobilisées : Σ(h traction × passages) × surface moyenne du profil. | 20 610 → 30 919 €/ha (enjambeur 72,56 → 248,79 €/h, à 151 h/an) |
| Cueillette (VEN_1) | **temps fixe** / productivité / tâche | Temps fixe : h/ha saisi, indépendant du rendement. Productivité : kg récoltés ÷ kg/h × coefficient d'organisation. Tâche : kg × (prix du kilo + prime de tri) × (1 + fin de contrat) × (1 + congés payés) × (1 + charges résiduelles) + frais annexes au kilo. | Tâche au barème SGV 2025 : cueillette 4 990 → 2 279 €/ha |
| Prix du raisin | scénario 1 / scénario 2 | Prix retenu pour le produit. | — |

Les kg récoltés sont le rendement commercialisable plus la mise en réserve saisie.

## 6. Données et sources

Toutes les données sont dans `data/referentiel.js`, et chaque source porte une date et un statut (`meta.sources`). Pour afficher la liste : `node .claude/outils/ref.js ls sources`.

| Id | Objet | Date | Statut |
|---|---|---|---|
| CIVC-REND-2026 | Rendement commercialisable 8 800 kg/ha ; rendement butoir 15 500 kg/ha ; plafond de réserve 10 000 kg/ha | 22/07/2026 | primaire |
| SGV-TACHE-2025 | Tâche vendanges : 0,214 €/kg brut (rendement de 7 à 10 t/ha, vignes non effeuillées, avec débardage), plus 10 % de fin de contrat et 10 % de congés payés | 22/07/2025 | primaire (copie hébergée par un tiers) |
| SMIC-2026-06 | SMIC horaire brut 12,31 € | 01/06/2026 | primaire |
| MSA-TODE-2026 | Exonération TO-DE maintenue en 2026 ; réduction générale dégressive unique (RGDU) | 16/01/2026 | primaire, provisoire |
| ANSES-GLY-2020 | Glyphosate en vigne : 450 g de substance active/ha/an, sous le rang uniquement | 09/10/2020 | primaire |
| GNR-DETAIL-2026-09 | Environ 1,97 €/L en Champagne-Ardenne (HT ou TTC non précisé) | 17/09/2026 | secondaire, simple repère |
| EXCEL-V2 | Valeurs de travail du classeur (temps de travaux, barèmes matériel, prix des intrants) | 19/09/2026 | à sourcer |

**Données manquantes connues, et où les chercher**
- Programme de protection du vignoble (spécialités, doses, coût des produits) : Direction technique et environnement du Comité Champagne.
- Coûts horaires du matériel : barème d'entraide Grand Est 2025-2026 (Chambres d'agriculture et FRCUMA).
- Barème de la tâche vendanges 2026, logement et restauration des vendangeurs : SGV Champagne.
- Taux effectif des charges patronales (salarié permanent et saisonnier) : MSA Marne.
- Confusion sexuelle en vigne étroite (nombre de diffuseurs/ha, temps de pose).

## 7. État du référentiel et limites

- **Profils.** Un seul est renseigné, SC_2 (Marne, 1 à 5 ha, certifié, surface moyenne 2,58 ha). Les 35 autres sont vides.
- **Intrants.** 123 sur 146 n'ont pas de prix. Des codes intrants sont en doublon avec des prix divergents : glyphosate à 2,40 €/L contre 190 € le bidon de 20 L.
- **Protection du vignoble.** Elle est comptée en prestation (12 passages × 150 €), **sans les produits**.
- **Glyphosate.** La dose saisie (2,5 L/ha) dépasse 450 g de substance active par ha si le produit est à 360 g/L ; sa teneur n'est pas renseignée.
- **Confusion sexuelle (RAK).** Le modèle retient 3 200 diffuseurs à 0,10 €. Le repère trouvé (Chambre d'agriculture du Tarn, vigne large, date non identifiée) est de 500 à 650 diffuseurs, pour 110 à 169 €/ha.
- **Matériel.** Les heures annuelles du barème (600 h pour l'enjambeur) ne dépendent pas de la taille de l'exploitation. Voir A1.
- **Vendange.** En méthode par défaut, le temps est fixe (330 h/ha) et ne suit pas le rendement. Voir A2.
- **Main-d'œuvre.** Les charges agrègent cotisations, congés et indemnités sans les distinguer. Voir A4.
- **Débit de chantier.** Il n'est pas relié aux temps par hectare des opérations. Voir A6.

## 8. Tests

```
node --test                          # tous les tests (rapport TAP)
node --test --test-reporter=dot      # rapport compact
node --test --test-reporter=spec     # rapport détaillé
```

| Fichier | Ce qui est garanti |
|---|---|
| `parite.test.js` | T1–T9. Coût SC_2 20 609,59 €/ha ; 701,5 h de main-d'œuvre ; 58,5 h de traction ; enjambeur 72,564 €/h (barème) et 248,79 €/h à 151,19 h/an (scénario) ; cueillette à la tâche 2 278,67 €/ha ; 2,342 €/kg ; débit 3,964 h/ha à 4 km/h. |
| `moteur.test.js` | Le coût est la somme exacte des postes, pour toutes les variantes. Pas d'heures de traction sans machine. Un code inconnu vaut 0 € et déclenche une alerte, sans erreur. Pas de division par zéro. Le coût horaire du matériel baisse quand la surface augmente. La vendange « productivité » suit le volume ; la « temps fixe » ne le suit pas. La table de sensibilité est cohérente avec le calcul principal. Les contrôles du référentiel d'origine sont figés. |
| `referentiel.test.js` | Pas de référence cassée. Un prix textuel est refusé. Le rendement 2026 est sourcé. |
| `page.test.js` | Le moteur est pur. Aucun appel réseau, aucune ressource externe. Pas de couleur littérale ni de `toFixed` dans l'interface. Les repères de section sont présents. |

Les cas T1–T9 sont aussi exécutés dans la page (onglet « Contrôles et tests »), à partir de la même définition.

## 9. Travailler avec Claude Code

**Ouverture.** Ouvrir le dossier dans Claude Code. Les consignes de `.claude/CLAUDE.md` sont chargées automatiquement.

**Automatisation.** Après chaque modification de `index.html`, `data/` ou `tests/`, le hook relance les tests :
- il reste muet si tout passe ;
- en cas d'échec, il renvoie un résumé de 25 lignes au plus, que Claude doit traiter avant de continuer ;
- il bloque aussi toute écriture dans `index-autonome.html`, qui est généré.

**Commandes**

| Commande | Usage |
|---|---|
| `/verifier` | Tests ; ne rapporte que les échecs. |
| `/maj-valeur <table> <code> <champ> <valeur> <source>` | Mise à jour sourcée ; s'arrête si un résultat figé change. |
| `/arbitrage <A1…A6>` | Instruit un arbitrage (options chiffrées, question à poser), sans rien coder. |
| `/publier` | Tests, puis `index-autonome.html`, puis note de changements. |

**Accès ciblé aux données** (évite de lire 60 Ko) :
```
node .claude/outils/ref.js stats
node .claude/outils/ref.js ls operations vendange
node .claude/outils/ref.js get machines ENG_ENJ
node .claude/outils/ref.js set machines ENG_ENJ heures 150
node .claude/outils/ref.js param gnr 1.45 GNR-FACTURE-2026-10
node .claude/outils/ref.js scen SC_2 '{"machine":"scenario","vendange":"tache"}'
```

**Économiser les tokens**
- `index.html` se lit par section : `grep -n "SECTION\|function renderScenario" index.html`, puis la plage de lignes utile.
- Le README se lit par section : `grep -n "^## " README.md`.
- Les tests ne se relancent pas à la main entre deux modifications, puisque le hook le fait.
- Les permissions interdisent la lecture de `index-autonome.html` et de l'archive Excel.

## 10. Tâches courantes

**Mettre à jour un barème**
1. `/maj-valeur`, ou `ref.js set` suivi de l'ajout d'une ligne au tableau « Mises à jour de valeurs » (section 12).
2. Si la source est nouvelle, l'ajouter à `meta.sources` avec son id, son libellé, sa date et son statut.

**Ajouter une opération**
1. Voir les voisines avec `ref.js ls operations <famille>`.
2. Ajouter l'objet à la fin du tableau `operations` de `data/referentiel.js`. Le code suit le format `FAM_n_MODE_ORG` ; il est figé et ne se renumérote jamais.
3. Toute valeur sans source reste `null`.

**Renseigner un nouveau profil**
- Dans l'outil : onglet Scénario, « Partir du scénario SC_2 », ajuster, puis exporter le référentiel en JSON.
- Ou directement dans `scenarios` du fichier de données : `"SC_x": [{ "code": "…", "nb": 1 }, …]`.

**Modifier une formule**
1. Modifier le bloc MOTEUR de `index.html` et ajouter un test dans `moteur.test.js`.
2. Si un cas T1–T9 change, écrire d'abord la décision (section 12).

## 11. Arbitrages ouverts

Ces choix de méthode ne sont pas tranchés, et ne doivent pas l'être dans le code.

| Id | Question | Ce qui est en jeu |
|---|---|---|
| A1 | Comment compter le coût du matériel selon la taille de l'exploitation ? Heures du barème, heures du scénario, parc type par classe de surface, ou prestation. | +10 300 €/ha sur SC_2 en passant aux heures du scénario. Sur un micro-profil (0,15 ha), un enjambeur détenu donne un résultat absurde (≈ 247 000 €/ha) : l'hypothèse de propriété du matériel est en cause. |
| A2 | Quelle méthode pour la vendange (temps fixe, productivité ou tâche), et comment intégrer logement, repas et transport ? | Cueillette : 4 990 €/ha (modèle) contre 2 279 €/ha (tâche SGV) ; les frais annexes ne sont comptés nulle part. |
| A3 | Main-d'œuvre familiale : coût payé ou coût d'opportunité ? | 13 249 €/ha de main-d'œuvre sur SC_2, valorisés au taux salarié. |
| A4 | Comment décomposer le coût horaire salarié (RGDU, TO-DE, congés, heures productives) ? | Le coefficient de 50 % (ouvrier) et de 20 % (saisonnier) n'est pas décomposé. |
| A5 | Quelle source de vérité : `data/referentiel.js` ou le classeur Excel ? | Hypothèse actuelle : le fichier de données fait foi, l'Excel est archivé (D3). |
| A6 | Faut-il relier le débit de chantier aux h/ha des opérations (géométrie des parcelles) ? | Les h/ha sont aujourd'hui les mêmes pour 0,15 ha et pour 7 ha. |

## 12. Journal des décisions

Modèle d'entrée :
```
### Dxx — titre (JJ/MM/AAAA)
Contexte · Options · Choix · Conséquence chiffrée · Ce que ça écarte · Tests touchés
```

### D1 — Corrections d'exécution du classeur v2 (19/09/2026)
Corrections apportées :
- les heures de traction sont nulles sans machine (1 403 → 701,5 h/ha de main-d'œuvre) ;
- synthèse pilotée par un sélecteur de profil, agrégation par SUMIFS ;
- codes d'opération figés ;
- prestations dans une colonne dédiée ;
- prix du GNR relié au paramètre ;
- listes déroulantes complétées ;
- sensibilité du débit de chantier corrigée ;
- rendement 2026 à 8 800 kg/ha.

Le coût SC_2 est inchangé (20 609,59 €/ha). Tests : T1–T4, T8, T9.

### D2 — Portage HTML, le défaut reproduit le classeur (19/09/2026)
Les méthodes alternatives (matériel, vendange) sont des options visibles, non tranchées. Ce que ça écarte : corriger les méthodes au moment du portage. Tests : T5–T7 figent les variantes.

### D3 — Le fichier de données fait foi (19/09/2026, provisoire)
Hypothèse retenue dans l'attente de l'arbitrage A5 : `data/referentiel.js` fait foi et le classeur est archivé dans `data/archive/`. Ce que ça écarte : deux sources modifiables qui divergent.

### D4 — Structure simplifiée (19/09/2026)
Application dans `index.html`, données dans `data/`, tests qui exécutent directement le bloc moteur de la page, outillage dans `.claude/`. Ce que ça écarte : l'étape de construction et le découpage en plusieurs fichiers sources.

### Mises à jour de valeurs
| Date | Élément | Avant → après | Source |
|---|---|---|---|
| 19/09/2026 | params.volume | 9 000 → 8 800 | CIVC-REND-2026 |

## 13. Recette humaine avant diffusion

Ce que les tests ne voient pas. À vérifier sur `index.html` et sur `index-autonome.html` :

1. L'onglet « Contrôles et tests » affiche 9/9 sans qu'aucune valeur n'ait été modifiée.
2. Sur un profil vide : message d'invitation et bouton « Partir du scénario SC_2 », sans chiffre trompeur.
3. En changeant chaque méthode, le bandeau rappelle la méthode active et les montants bougent.
4. À 390 px de large, rien ne déborde horizontalement en dehors des tableaux.
5. En thème sombre, les contrastes restent lisibles et les barres se distinguent.
6. Le CSV exporté s'ouvre dans Excel avec les accents, le séparateur `;` et la virgule décimale.
7. L'import d'un JSON incomplet donne un message explicite et conserve les données en place.
8. `index.html` ouvert seul, sans `data/`, affiche un message qui dit quoi faire, pas une page blanche.
