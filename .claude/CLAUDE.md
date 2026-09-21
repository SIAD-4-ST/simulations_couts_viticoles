# Consignes Claude — OAD coûts techniques, vignoble champenois

Lire le README seulement pour la section utile à la tâche (`grep -n "^## " README.md`, puis lecture ciblée).

## Structure
- `index.html` : toute l'application, en 4 sections repérées par `SECTION STYLE | PAGE | MOTEUR | INTERFACE`. Avant de modifier, `grep -n "SECTION\|function <nom>" index.html` puis lire la plage de lignes utile ; ne jamais relire le fichier entier (≈ 48 Ko).
- `data/referentiel.js` : barèmes, opérations, profils, scénarios, sources datées. Le lire et le modifier via `node .claude/outils/ref.js` (stats, ls, get, set, param, scen), jamais en entier.
- `tests/` : `node --test` depuis la racine. Les tests exécutent le bloc moteur de `index.html` tel quel.
- `data/archive/` : classeur Excel d'origine, archive, ne fait pas foi.

## Règles
- Le bloc `<script id="moteur">` est pur : aucun accès à `document`, `window` ou au stockage. Toute formule métier y vit, et nulle part ailleurs.
- Aucune dépendance, aucun appel réseau, aucune ressource externe autre que `data/referentiel.js`.
- Aucune valeur inventée : inconnue = `null` ; toute valeur saisie a une source datée dans `meta.sources`.
- Les cas T1–T9 (`CasValidation`) figent des résultats. En changer un exige une entrée au journal du README qui dit pourquoi.
- La méthode par défaut reproduit le classeur v2 ; toute nouvelle méthode est une option, jamais un remplacement sans arbitrage.
- Affichage fr-FR via `fr()` ; couleurs uniquement par jetons CSS.

## Économie de tokens
- Le hook relance les tests après chaque modification de `index.html`, `data/` ou `tests/` et reste muet si tout passe : ne pas relancer à la main entre deux modifications.
- Modifications ciblées (Edit) plutôt que réécriture.
- Commandes : `/verifier`, `/maj-valeur`, `/arbitrage`, `/publier`.

## Arbitrages ouverts — ne pas trancher dans le code
A1 coût du matériel selon la taille d'exploitation · A2 méthode de la vendange et frais annexes · A3 main-d'œuvre familiale · A4 décomposition du coût horaire salarié · A5 source de vérité (JSON ou Excel ; hypothèse actuelle : `data/referentiel.js`) · A6 raccord du débit de chantier aux h/ha.
