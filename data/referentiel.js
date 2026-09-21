/* Référentiel de l'OAD coûts techniques — données + sources.
 * Chargé par index.html (<script src>) et par les tests (require).
 * Modifier de préférence via : node .claude/outils/ref.js set … (garde le format). */
const REFERENTIEL = {
 "meta": {
  "version": "2026.09.1",
  "date": "2026-09-19",
  "origine": "Classeur Simulateur_economique.xlsm v2 (corrections d'exécution du 19/09/2026)",
  "faitFoi": "data/referentiel.json — hypothèse provisoire, arbitrage A5 ouvert",
  "sources": [
   {
    "id": "CIVC-REND-2026",
    "libelle": "Comité Champagne, communiqué vendange 2026 (rendement commercialisable 8 800 kg/ha, butoir 15 500, plafond réserve 10 000)",
    "date": "2026-07-22",
    "url": "https://www.champagne.fr/fr/approfondir/mediaroom/communique-presse-champagne/vendange-2026-la-champagne-ajuste-son-rendement",
    "statut": "primaire"
   },
   {
    "id": "SGV-TACHE-2025",
    "libelle": "SGV Champagne, barème du salaire à la tâche vendanges 2025 (commission du 22/07/2025)",
    "date": "2025-07-22",
    "statut": "primaire (copie hébergée par un tiers)"
   },
   {
    "id": "SMIC-2026-06",
    "libelle": "SMIC horaire brut 12,31 € au 01/06/2026 (info.gouv.fr)",
    "date": "2026-06-01",
    "url": "https://www.info.gouv.fr/actualite/le-smic-revalorise-le-1er-juin-2026",
    "statut": "primaire"
   },
   {
    "id": "MSA-TODE-2026",
    "libelle": "MSA, barème employeur 2026 (version provisoire 16/01/2026) : TO-DE maintenu, RGDU",
    "date": "2026-01-16",
    "statut": "primaire, provisoire"
   },
   {
    "id": "ANSES-GLY-2020",
    "libelle": "Anses, conditions d'emploi du glyphosate en viticulture : 450 g/ha/an, sous le rang (restriction 20 % levée en 2021)",
    "date": "2020-10-09",
    "statut": "primaire"
   },
   {
    "id": "GNR-DETAIL-2026-09",
    "libelle": "Prix de détail GNR Champagne-Ardenne ~1,97 €/L (FioulReduc, statut HT/TTC non précisé)",
    "date": "2026-09-17",
    "statut": "secondaire, repère"
   },
   {
    "id": "EXCEL-V2",
    "libelle": "Valeurs de travail du classeur, non sourcées individuellement",
    "date": "2026-09-19",
    "statut": "à sourcer"
   }
  ],
  "params": {
   "volume": "CIVC-REND-2026",
   "butoir": "CIVC-REND-2026",
   "plafondReserve": "CIVC-REND-2026",
   "prix1": "EXCEL-V2",
   "prix2": "EXCEL-V2",
   "taux": "EXCEL-V2",
   "gnr": "EXCEL-V2",
   "jour": "EXCEL-V2"
  }
 },
 "params": {
  "volume": 8800,
  "prix1": 7.5,
  "prix2": 8.5,
  "taux": 0.03,
  "gnr": 1.2,
  "jour": 8,
  "butoir": 15500,
  "plafondReserve": 10000
 },
 "mo": [
  {
   "code": "MO_OUV",
   "libelle": "Ouvrier viticole",
   "brut": 13.5,
   "eurKg": null,
   "charges": 0.5,
   "remarque": "Taille, travaux en vert"
  },
  {
   "code": "MO_TRAC",
   "libelle": "Tractoriste",
   "brut": 20,
   "eurKg": null,
   "charges": 0.5,
   "remarque": "Conduite tracteur / enjambeur"
  },
  {
   "code": "MO_SAIS",
   "libelle": "Saisonnier vendange",
   "brut": 12.6,
   "eurKg": null,
   "charges": 0.2,
   "remarque": "Vendangeur"
  },
  {
   "code": "MO_CHEF",
   "libelle": "Chef d’équipe",
   "brut": 16,
   "eurKg": null,
   "charges": 0.5,
   "remarque": "Organisation vendange"
  },
  {
   "code": "MO_PRES_TAILLE",
   "libelle": "Prestation taille",
   "brut": 35,
   "eurKg": null,
   "charges": null,
   "remarque": "Tarif prestataire"
  },
  {
   "code": "MO_PRES_PPP",
   "libelle": "Prestation Phyto",
   "brut": 150,
   "eurKg": null,
   "charges": null,
   "remarque": "Tarif prestataire"
  },
  {
   "code": "MO_PRES_TDS",
   "libelle": "Prestation TDS",
   "brut": 45,
   "eurKg": null,
   "charges": null,
   "remarque": "Estimation marché ~45 €/h — à confirmer (devis)"
  },
  {
   "code": "MO_PRES_ARR",
   "libelle": "Prestation Arrachage",
   "brut": 40,
   "eurKg": null,
   "charges": null,
   "remarque": "Estimation marché ~40 €/h — à confirmer (devis)"
  },
  {
   "code": "MO_PRES_VEN",
   "libelle": "Prestation Vendange",
   "brut": null,
   "eurKg": 0.53,
   "charges": null,
   "remarque": "Tarif à la tâche 0,53 €/kg — à confirmer (devis)"
  },
  {
   "code": "MO_PRES_CUEIL",
   "libelle": "Prestation cueillette",
   "brut": 34.6,
   "eurKg": null,
   "charges": null,
   "remarque": "Tarif à la tâche cueillette — à confirmer"
  }
 ],
 "machines": [
  {
   "code": "ENG_ENJ",
   "libelle": "Enjambeur 2 rangs",
   "valeur": 210000,
   "duree": 10,
   "heures": 600,
   "entretien": 6000,
   "conso": 11,
   "autres": 2000,
   "cv": 110,
   "assurance": 3000,
   "source": "Enjambeur 2 rangs. Prix neuf 120 000–300 000 € (barème Chambres d'agriculture / marché 2025)"
  },
  {
   "code": "ENG_CHEN",
   "libelle": "Chenillard",
   "valeur": 60000,
   "duree": 10,
   "heures": 400,
   "entretien": 3000,
   "conso": 5,
   "autres": 1000,
   "cv": 80,
   "assurance": 1200,
   "source": "Chenillard viticole. Estimation cohérente barème viti-arbo"
  },
  {
   "code": "ROB_DESH",
   "libelle": "Robot désherbeur électrique",
   "valeur": 220000,
   "duree": 7,
   "heures": 1000,
   "entretien": 8000,
   "conso": 0,
   "autres": 5000,
   "cv": 0,
   "assurance": 2500,
   "source": "Robot désherbeur électrique (autonome, sans GNR). Assurance/maintenance élevée"
  },
  {
   "code": "TRA_INTER",
   "libelle": "Tracteur interligne (vigne étroite)",
   "valeur": 55000,
   "duree": 10,
   "heures": 500,
   "entretien": 2500,
   "conso": 5.5,
   "autres": 800,
   "cv": 90,
   "assurance": 1500,
   "source": "Prix neuf 30 000–75 000 € (barème 2025). ~5–6 l/h GNR"
  },
  {
   "code": "PUL_VITI",
   "libelle": "Pulvérisateur viticole porté",
   "valeur": 8000,
   "duree": 8,
   "heures": 300,
   "entretien": 600,
   "conso": 0,
   "autres": 200,
   "cv": 0,
   "assurance": 300,
   "source": "Outil porté (pas de moteur propre). Prix neuf ~7 500–8 000 €"
  },
  {
   "code": "ROG_ECIM",
   "libelle": "Rogneuse / écimeuse portée",
   "valeur": 7500,
   "duree": 8,
   "heures": 250,
   "entretien": 500,
   "conso": 0,
   "autres": 150,
   "cv": 0,
   "assurance": 250,
   "source": "Outil porté. Traction assurée par le tracteur"
  },
  {
   "code": "BRO_SARM",
   "libelle": "Broyeur de sarments porté",
   "valeur": 6500,
   "duree": 8,
   "heures": 200,
   "entretien": 450,
   "conso": 0,
   "autres": 150,
   "cv": 0,
   "assurance": 200,
   "source": "Outil porté. Broyage des bois de taille"
  }
 ],
 "intrants": [
  {
   "id": "I001",
   "code": "HERB_GLYP",
   "type": "Herbicides de post-levée",
   "composition": "Glyphosate",
   "noms": null,
   "prix": 2.4,
   "unite": "L"
  },
  {
   "id": "I002",
   "code": "ENGR_ENGR",
   "type": "Engrais organiques",
   "composition": "Engrais organique (6%)",
   "noms": null,
   "prix": 450,
   "unite": "t"
  },
  {
   "id": "I003",
   "code": "PLAN_PLAN",
   "type": "Plant de vigne",
   "composition": "Plant de vigne",
   "noms": null,
   "prix": 2,
   "unite": "unité"
  },
  {
   "id": "I004",
   "code": "CHÉL_CHÉL",
   "type": "Chélates de fer",
   "composition": "Chélate de fer EDDHA 6 %",
   "noms": null,
   "prix": 15,
   "unite": "kg"
  },
  {
   "id": "I005",
   "code": "INSE_RAK",
   "type": "Insecticides",
   "composition": "Rak",
   "noms": null,
   "prix": 0.1,
   "unite": "unité"
  },
  {
   "id": "I006",
   "code": "HERB_PENO",
   "type": "Herbicides de pré-levée",
   "composition": "penoxsulame",
   "noms": "Boa",
   "prix": null,
   "unite": null
  },
  {
   "id": "I007",
   "code": "HERB_FLUM",
   "type": "Herbicides de pré-levée",
   "composition": "flumioxazine",
   "noms": "Pledge ; Rami",
   "prix": 195.82,
   "unite": "kg"
  },
  {
   "id": "I008",
   "code": "HERB_NAPR",
   "type": "Herbicides de pré-levée",
   "composition": "napropamide",
   "noms": "Dévrinol F",
   "prix": null,
   "unite": null
  },
  {
   "id": "I009",
   "code": "HERB_PROP",
   "type": "Herbicides de pré-levée",
   "composition": "propyzamide",
   "noms": "Kerb Flo",
   "prix": 32.98,
   "unite": "kg"
  },
  {
   "id": "I010",
   "code": "HERB_FLAZ",
   "type": "Herbicides de pré-levée",
   "composition": "flazasulfuron",
   "noms": "Katana 25 WG ; Minsk ; Matsuda ; Pamela ; Jogg",
   "prix": 133.24,
   "unite": "200g"
  },
  {
   "id": "I011",
   "code": "HERB_PEND",
   "type": "Herbicides de pré-levée",
   "composition": "pendiméthaline",
   "noms": "Pentium Flo",
   "prix": null,
   "unite": null
  },
  {
   "id": "I012",
   "code": "HERB_ACID",
   "type": "Herbicides de post-levée",
   "composition": "acide pélargonique",
   "noms": "Beloukha",
   "prix": null,
   "unite": null
  },
  {
   "id": "I013",
   "code": "HERB_CYCL",
   "type": "Herbicides de post-levée",
   "composition": "cycloxydime",
   "noms": "Stratos Ultra ; Devin",
   "prix": null,
   "unite": null
  },
  {
   "id": "I014",
   "code": "HERB_FLUA",
   "type": "Herbicides de post-levée",
   "composition": "fluazifop-P-butyl",
   "noms": "Fusilade Max",
   "prix": null,
   "unite": null
  },
  {
   "id": "I015",
   "code": "HERB_PROP",
   "type": "Herbicides de post-levée",
   "composition": "propaquizafop",
   "noms": "Agil ; Claxon ; Ambition ; Kalamos",
   "prix": null,
   "unite": null
  },
  {
   "id": "I016",
   "code": "HERB_PYRA",
   "type": "Herbicides de post-levée",
   "composition": "pyraflufen-éthyl",
   "noms": "Gozaï ; Sorcier ; Guerrier",
   "prix": null,
   "unite": null
  },
  {
   "id": "I017",
   "code": "HERB_GLYP",
   "type": "Herbicides de post-levée",
   "composition": "Glyphosate",
   "noms": "Buggy 360 Power ; Hockey Pro 360 ; Gallup ST ; Glister Ultra 360 ; Barbarian ST ; Solar 360 ; Roundup Flash Plus ; Roundup Evolution ; Freeway 480 ; Cayenne Class’One 480 ; Crossover Highland Island 480 ; Roundup Dynamic ; Roundup Ultimate",
   "prix": 190,
   "unite": "20 l"
  },
  {
   "id": "I018",
   "code": "HERB_CARF",
   "type": "Herbicides de post-levée",
   "composition": "carfentrazone-éthyl",
   "noms": "Spotlight Plus ; Shark",
   "prix": 60.41,
   "unite": "L"
  },
  {
   "id": "I019",
   "code": "FONG_MAND",
   "type": "Fongicides mildiou",
   "composition": "mandipropamide",
   "noms": "Carial C pépite ; Pergado C pépite ; Ampexio ; Revoluxio ; Pexium",
   "prix": null,
   "unite": null
  },
  {
   "id": "I020",
   "code": "FONG_VALI",
   "type": "Fongicides mildiou",
   "composition": "valifénalate",
   "noms": "Valis F",
   "prix": null,
   "unite": null
  },
  {
   "id": "I021",
   "code": "FONG_ZOXA",
   "type": "Fongicides mildiou",
   "composition": "zoxamide",
   "noms": "Ampexio ; Revoluxio ; Pexium ; Electis bleu ; Amaline Flow ; Ventaro ; Idaho ; Pajo ; Electis CX ; Zorvec Zelavin Trel ; Zorvec Zelavin + Triangle",
   "prix": 16.2,
   "unite": "L"
  },
  {
   "id": "I022",
   "code": "FONG_CYMO",
   "type": "Fongicides mildiou",
   "composition": "cymoxanil",
   "noms": "Idaho ; Pajo ; Electis CX ; Sarman F ; Enomix F ; Escadril ; Amarok ; Vitipec WG Advance ; Valiant Flash ; Lexic Flash ; Momentum Trio ; Igloo ; Agenda",
   "prix": null,
   "unite": null
  },
  {
   "id": "I023",
   "code": "FONG_CYAZ",
   "type": "Fongicides mildiou",
   "composition": "cyazofamide",
   "noms": "Mildicut ; Kenkio ; Ysayo ; Videryo F",
   "prix": null,
   "unite": null
  },
  {
   "id": "I024",
   "code": "FONG_AMÉT",
   "type": "Fongicides mildiou",
   "composition": "amétoctradine",
   "noms": "Enervin Activ + Facinan ; Enervin Activ + Epatan ; Enervin Activ + Alucinan ; Enervin Activ + LBG",
   "prix": 119,
   "unite": "pack 2ha (3l enervin +4 l facinan)"
  },
  {
   "id": "I025",
   "code": "FONG_FLUO",
   "type": "Fongicides mildiou",
   "composition": "fluopicolide",
   "noms": "Profiler ; Tébaïde ; Prevasion",
   "prix": null,
   "unite": null
  },
  {
   "id": "I026",
   "code": "FONG_OXAT",
   "type": "Fongicides mildiou",
   "composition": "oxathiapiproline",
   "noms": "Zorvec Zelavin Bria ; Zorvec Zelavin Trel ; Zorvec Zelavin + Triangle ; Pass Orondis ; Zongruum ; Pack Zorvec Dyonisos ; Pack Zorvec Zelavin Zeus",
   "prix": null,
   "unite": null
  },
  {
   "id": "I027",
   "code": "FONG_AMIS",
   "type": "Fongicides mildiou",
   "composition": "amisulbrom",
   "noms": "Pass Orondis ; Zongruum",
   "prix": null,
   "unite": null
  },
  {
   "id": "I028",
   "code": "FONG_FOSÉ",
   "type": "Fongicides mildiou",
   "composition": "fosétyl-Al",
   "noms": "Optix disperss ; Hidalgo Star ; Vino Star ; Mikal Flash ; Kilim Flash ; Medeiro WG ; Option Flash ; Valiant Flash ; Lexic Flash ; Momentum Trio ; Igloo ; Agenda ; Pangolin DG ; Falarik DG ; Profiler ; Tébaïde ; Prevasion",
   "prix": null,
   "unite": null
  },
  {
   "id": "I029",
   "code": "FONG_PHOS",
   "type": "Fongicides mildiou",
   "composition": "phosphonate de disodium",
   "noms": "Mildicut ; Kenkio ; Ysayo ; Redeli ; BCP 358 FC ; Fosfodium",
   "prix": null,
   "unite": null
  },
  {
   "id": "I030",
   "code": "FONG_PHOS",
   "type": "Fongicides mildiou",
   "composition": "phosphonate de potassium",
   "noms": "Pack Zorvec Zelavin Zeus ; Enervin Activ + LBG ; LBG 01F34 ; Pertinan ; Etonan ; Alucinan ; Facinan ; Kamparano ; Tenrok ; Boing ; Phytosarcan ; Plantsar ; Limit ; Syncity ; Futura ; Zenact",
   "prix": null,
   "unite": null
  },
  {
   "id": "I031",
   "code": "FONG_DITH",
   "type": "Fongicides mildiou",
   "composition": "dithianon",
   "noms": "Futura ; Zenact",
   "prix": 16.6,
   "unite": "L"
  },
  {
   "id": "I032",
   "code": "FONG_FOLP",
   "type": "Fongicides mildiou",
   "composition": "folpel",
   "noms": "Valis F ; Hidalgo Star ; Vino Star ; Mikal Flash ; Kilim Flash ; Medeiro WG ; Option Flash ; Valiant Flash ; Lexic Flash ; Momentum Trio ; Igloo ; Agenda ; Syncity ; Videryo F ; Zorvec Zelavin Bria ; Fantic F WG ; Pack EFFI Palmir + Stikine ; Pandero Gold ; Sarman F ; Enomix F ; Escadril ; Amarok ; Vitipec WG Advance ; Foltane FL ; Folpan SC ; Tamouz ; Folpec Advance 80 WG ; Folpan 80 WDG",
   "prix": 23.41,
   "unite": "kg"
  },
  {
   "id": "I033",
   "code": "FONG_BENA",
   "type": "Fongicides mildiou",
   "composition": "benalaxyl-M",
   "noms": "Bandido ; Archimede ; Fantic F WG ; Pack EFFI Palmir + Stikine",
   "prix": null,
   "unite": null
  },
  {
   "id": "I034",
   "code": "FONG_MÉTA",
   "type": "Fongicides mildiou",
   "composition": "métalaxyl-M",
   "noms": "Pandero Gold",
   "prix": null,
   "unite": null
  },
  {
   "id": "I035",
   "code": "FONG_CUIV",
   "type": "Fongicides mildiou",
   "composition": "cuivre (hydroxyde + oxychlorure)",
   "noms": "Airone SC ; Grifon SC ; Bandido ; Archimede ; Cuprocol Duo ; Evoram",
   "prix": null,
   "unite": null
  },
  {
   "id": "I036",
   "code": "FONG_CUIV",
   "type": "Fongicides mildiou",
   "composition": "cuivre (sulfate de cuivre)",
   "noms": "Bouillie bordelaise RSR disperss NC ; Eqal DG ; Bouillie bordelaise Caffaro WG ; Bouillie bordelaise Manica ; Maniflow ; Super Bouillie Macclesfield 80 ; Cuprussul 20 WG ; Cupro Top 20 WG",
   "prix": null,
   "unite": null
  },
  {
   "id": "I037",
   "code": "FONG_CUIV",
   "type": "Fongicides mildiou",
   "composition": "cuivre (sulfate tribasique)",
   "noms": "Cuproxat SC ; Fregate SC ; Pangolin DG ; Falarik DG ; Electis bleu ; Amaline Flow ; Ventaro",
   "prix": 9.53,
   "unite": "L"
  },
  {
   "id": "I038",
   "code": "FONG_CUIV",
   "type": "Fongicides mildiou",
   "composition": "cuivre (hydroxyde de cuivre)",
   "noms": "Champ Flo Ampli ; Heliocuivre ; Helioterpen Cuivre ; Kocide 35 DF ; Kocide 2000 ; Kocide Flow ; Funguran-OH ; Mexiram Hi Bio ; Hydro Super 25 WG ; Pack Zorvec Dyonisos ; Cuprocol Duo ; Evoram",
   "prix": null,
   "unite": null
  },
  {
   "id": "I039",
   "code": "FONG_CUIV",
   "type": "Fongicides mildiou",
   "composition": "cuivre (oxyde cuivreux)",
   "noms": "Nordox 75 WG ; Mojox 75 WG",
   "prix": 22.56,
   "unite": "kg"
  },
  {
   "id": "I040",
   "code": "FONG_CUIV",
   "type": "Fongicides mildiou",
   "composition": "cuivre (oxychlorure de cuivre)",
   "noms": "Yucca ; Carial C pépite ; Pergado C pépite ; Bandido ; Archimede ; Cuprocol Duo ; Evoram",
   "prix": 16.8,
   "unite": "L"
  },
  {
   "id": "I041",
   "code": "FONG_COS-",
   "type": "Fongicides mildiou",
   "composition": "COS-OGA",
   "noms": "Messager ; Fytosave ; Esdeaine",
   "prix": null,
   "unite": null
  },
  {
   "id": "I042",
   "code": "FONG_HUIL",
   "type": "Fongicides mildiou",
   "composition": "huile essentielle d’orange douce",
   "noms": "Essen'Ciel ; Limocide",
   "prix": null,
   "unite": null
  },
  {
   "id": "I043",
   "code": "FONG_CERE",
   "type": "Fongicides mildiou",
   "composition": "cerevisane",
   "noms": "Romeo",
   "prix": null,
   "unite": null
  },
  {
   "id": "I044",
   "code": "FONG_ABE-",
   "type": "Fongicides mildiou",
   "composition": "ABE-IT 56",
   "noms": "Belvine ABE-IT 56",
   "prix": null,
   "unite": null
  },
  {
   "id": "I045",
   "code": "FONG_SPIR",
   "type": "Fongicides oïdium",
   "composition": "spiroxamine",
   "noms": "Prosper ; Hoggar ; Spirox ; Florali",
   "prix": null,
   "unite": null
  },
  {
   "id": "I046",
   "code": "FONG_PYRI",
   "type": "Fongicides oïdium",
   "composition": "pyriofénone",
   "noms": "Kusabi ; Pyrioviti",
   "prix": null,
   "unite": null
  },
  {
   "id": "I047",
   "code": "FONG_MÉTR",
   "type": "Fongicides oïdium",
   "composition": "métrafénone",
   "noms": "Vivando ; Algebre ; Ancolie ; Eluvia ; Cultigo",
   "prix": 89.15,
   "unite": "L"
  },
  {
   "id": "I048",
   "code": "FONG_BOSC",
   "type": "Fongicides oïdium",
   "composition": "boscalid",
   "noms": "Collis ; Hexagon ; Cantus",
   "prix": null,
   "unite": null
  },
  {
   "id": "I049",
   "code": "FONG_FLUO",
   "type": "Fongicides oïdium",
   "composition": "fluopyram",
   "noms": "Luna Xtend ; Luna Sensation",
   "prix": null,
   "unite": null
  },
  {
   "id": "I050",
   "code": "FONG_FLUX",
   "type": "Fongicides oïdium",
   "composition": "fluxapyroxad",
   "noms": "Yaris",
   "prix": 140,
   "unite": "L"
  },
  {
   "id": "I051",
   "code": "FONG_CYFL",
   "type": "Fongicides oïdium",
   "composition": "cyflufénamid",
   "noms": "Cyflodium ; Cidely ; Dynali ; Rocca ; Lydiane ; Conydia",
   "prix": null,
   "unite": null
  },
  {
   "id": "I052",
   "code": "FONG_PROQ",
   "type": "Fongicides oïdium",
   "composition": "proquinazid",
   "noms": "Talendo ; Kesys ; Talius",
   "prix": null,
   "unite": null
  },
  {
   "id": "I053",
   "code": "FONG_TÉBU",
   "type": "Fongicides oïdium",
   "composition": "tébuconazole",
   "noms": "Tebutec ; Mayandra ; Physalis",
   "prix": null,
   "unite": null
  },
  {
   "id": "I054",
   "code": "FONG_DIFÉ",
   "type": "Fongicides oïdium",
   "composition": "difénoconazole",
   "noms": "Score ; Bogard ; Cerimonia ; Disco ; Invictus ; Difcor ; Dynali ; Rocca ; Lydiane ; Conydia",
   "prix": null,
   "unite": null
  },
  {
   "id": "I055",
   "code": "FONG_PENC",
   "type": "Fongicides oïdium",
   "composition": "penconazole",
   "noms": "Topaze",
   "prix": null,
   "unite": null
  },
  {
   "id": "I056",
   "code": "FONG_MÉFE",
   "type": "Fongicides oïdium",
   "composition": "méfentrifluconazole",
   "noms": "Revyvit ; Skyra",
   "prix": 22.07,
   "unite": "L"
  },
  {
   "id": "I057",
   "code": "FONG_KRÉS",
   "type": "Fongicides oïdium",
   "composition": "krésoxym-méthyl",
   "noms": "Collis ; Hexagon",
   "prix": null,
   "unite": null
  },
  {
   "id": "I058",
   "code": "FONG_TRIF",
   "type": "Fongicides oïdium",
   "composition": "trifloxystrobine",
   "noms": "Luna Xtend ; Luna Sensation ; Physalis ; Natchez",
   "prix": null,
   "unite": null
  },
  {
   "id": "I059",
   "code": "FONG_SOUF",
   "type": "Fongicides oïdium",
   "composition": "soufre",
   "noms": "Héliosoufre S ; Hélioterpen Soufre ; Biosoufre ; Whisper ; Kashmir ; Auditorium ; Kumulus DF ; Trilog ; Azupec ; Microthiol Special disperss ; Pennthiol DG ; Citrothiol DG ; Soufrebe DG ; Colpenn DG ; Pennthiol Rainfree ; Thiopron Rainfree ; Citrothiol Rainfree ; Sulforix Rainfree ; Lucifere S ; Faeton SC ; Dartagnan ; Azzurri ; Flosul SC ; Creta ; Cosavet DF ; Sulbari DF ; Visul GD 80 ; Thiovit Jet Microbille ; Fluidosoufre ; Soufre Sublime Afepasa ; Florfluid ; Grain d’or ; Orofluid",
   "prix": 1.4,
   "unite": "kg"
  },
  {
   "id": "I060",
   "code": "FONG_HYDR",
   "type": "Fongicides oïdium",
   "composition": "hydrogénocarbonate / bicarbonate de potassium",
   "noms": "Armicarb ; Vitisan; Carbobasic",
   "prix": 15.47,
   "unite": "kg"
  },
  {
   "id": "I061",
   "code": "FONG_HUIL",
   "type": "Fongicides oïdium",
   "composition": "huile d’orange douce",
   "noms": "Essen'Ciel ; Limocide ; PREV-AM ULTRA ; PREV-GOLD",
   "prix": null,
   "unite": null
  },
  {
   "id": "I062",
   "code": "FONG_BACI",
   "type": "Fongicides oïdium",
   "composition": "Bacillus pumilus",
   "noms": "Sonata",
   "prix": null,
   "unite": null
  },
  {
   "id": "I063",
   "code": "FONG_BACI",
   "type": "Fongicides oïdium",
   "composition": "Bacillus amyloliquefaciens",
   "noms": "Taegro",
   "prix": null,
   "unite": null
  },
  {
   "id": "I064",
   "code": "FONG_COS-",
   "type": "Fongicides oïdium",
   "composition": "COS-OGA",
   "noms": "Blason ; Bastid ; Messager ; Fytosave ; Esdéaine",
   "prix": null,
   "unite": null
  },
  {
   "id": "I065",
   "code": "FONG_LAMI",
   "type": "Fongicides oïdium",
   "composition": "laminarine",
   "noms": "Vinivax",
   "prix": null,
   "unite": null
  },
  {
   "id": "I066",
   "code": "FONG_FLUD",
   "type": "Fongicides botrytis",
   "composition": "fludioxonil",
   "noms": "Géoxe WG ; Safir WG ; Serenva ; Switch",
   "prix": null,
   "unite": null
  },
  {
   "id": "I067",
   "code": "FONG_CYPR",
   "type": "Fongicides botrytis",
   "composition": "cyprodinil",
   "noms": "Serenva ; Switch",
   "prix": null,
   "unite": null
  },
  {
   "id": "I068",
   "code": "FONG_PYRI",
   "type": "Fongicides botrytis",
   "composition": "pyriméthanil",
   "noms": "Scala ; Toucan ; Erune ; Laitone",
   "prix": null,
   "unite": null
  },
  {
   "id": "I069",
   "code": "FONG_FENP",
   "type": "Fongicides botrytis",
   "composition": "fenpyrazamine",
   "noms": "Prolectus ; Kamuy",
   "prix": null,
   "unite": null
  },
  {
   "id": "I070",
   "code": "FONG_FENH",
   "type": "Fongicides botrytis",
   "composition": "fenhexamid",
   "noms": "Teldor ; Lazulie",
   "prix": null,
   "unite": null
  },
  {
   "id": "I071",
   "code": "FONG_ISOF",
   "type": "Fongicides botrytis",
   "composition": "isofétamid",
   "noms": "Kryor ; Kenja",
   "prix": null,
   "unite": null
  },
  {
   "id": "I072",
   "code": "FONG_BOSC",
   "type": "Fongicides botrytis",
   "composition": "boscalid",
   "noms": "Cantus",
   "prix": null,
   "unite": null
  },
  {
   "id": "I073",
   "code": "FONG_BACI",
   "type": "Fongicides botrytis",
   "composition": "Bacillus subtilis",
   "noms": "Rhapsody",
   "prix": null,
   "unite": null
  },
  {
   "id": "I074",
   "code": "FONG_HYDR",
   "type": "Fongicides botrytis",
   "composition": "hydrogénocarbonate de potassium",
   "noms": "Armicarb ; Vitisan",
   "prix": null,
   "unite": null
  },
  {
   "id": "I075",
   "code": "FONG_THYM",
   "type": "Fongicides botrytis",
   "composition": "thymol + eugénol + géraniol",
   "noms": "Mevalone ; Yatto ; Esseva ; Nirka",
   "prix": null,
   "unite": null
  },
  {
   "id": "I076",
   "code": "FONG_BACI",
   "type": "Fongicides botrytis",
   "composition": "Bacillus amyloliquefaciens",
   "noms": "Amylo-X WG ; Taegro",
   "prix": null,
   "unite": null
  },
  {
   "id": "I077",
   "code": "INSE_DELT",
   "type": "Insecticides",
   "composition": "deltaméthrine",
   "noms": "Decis Protech ; Deltastar ; Vivatrine EW",
   "prix": null,
   "unite": null
  },
  {
   "id": "I078",
   "code": "INSE_LAMB",
   "type": "Insecticides",
   "composition": "lambda-cyhalothrine",
   "noms": "Karaté Xflow ; Karis 10 CS ; Estamina ; Spark ; Karaté ZEON",
   "prix": null,
   "unite": null
  },
  {
   "id": "I079",
   "code": "INSE_ETOF",
   "type": "Insecticides",
   "composition": "etofenprox",
   "noms": "Uppercut",
   "prix": null,
   "unite": null
  },
  {
   "id": "I080",
   "code": "INSE_SPIN",
   "type": "Insecticides",
   "composition": "spinosad",
   "noms": "Success 4 ; Musdo 4 ; Fycilia",
   "prix": null,
   "unite": null
  },
  {
   "id": "I081",
   "code": "INSE_BACI",
   "type": "Insecticides",
   "composition": "Bacillus thuringiensis subsp. aizawai",
   "noms": "XenTari",
   "prix": null,
   "unite": null
  },
  {
   "id": "I082",
   "code": "INSE_BACI",
   "type": "Insecticides",
   "composition": "Bacillus thuringiensis subsp. kurstaki",
   "noms": "Rapax AS ; Delfin",
   "prix": null,
   "unite": null
  },
  {
   "id": "I083",
   "code": "INSE_ÉMAM",
   "type": "Insecticides",
   "composition": "émamectine benzoate",
   "noms": "Affirm ; Proclaim ; Verde Emamectin ; Eleskirt",
   "prix": null,
   "unite": null
  },
  {
   "id": "I084",
   "code": "PLAN_CHAR",
   "type": "Plant de vigne",
   "composition": "Chardonnay",
   "noms": null,
   "prix": null,
   "unite": null
  },
  {
   "id": "I085",
   "code": "PLAN_PINO",
   "type": "Plant de vigne",
   "composition": "Pinot noir",
   "noms": null,
   "prix": null,
   "unite": null
  },
  {
   "id": "I086",
   "code": "PLAN_MEUN",
   "type": "Plant de vigne",
   "composition": "Meunier",
   "noms": null,
   "prix": null,
   "unite": null
  },
  {
   "id": "I087",
   "code": "PLAN_ARBA",
   "type": "Plant de vigne",
   "composition": "Arbanne",
   "noms": null,
   "prix": null,
   "unite": null
  },
  {
   "id": "I088",
   "code": "PLAN_PETI",
   "type": "Plant de vigne",
   "composition": "Petit Meslier",
   "noms": null,
   "prix": null,
   "unite": null
  },
  {
   "id": "I089",
   "code": "PLAN_PINO",
   "type": "Plant de vigne",
   "composition": "Pinot Blanc",
   "noms": null,
   "prix": null,
   "unite": null
  },
  {
   "id": "I090",
   "code": "PLAN_PINO",
   "type": "Plant de vigne",
   "composition": "Pinot Gris",
   "noms": null,
   "prix": null,
   "unite": null
  },
  {
   "id": "I091",
   "code": "PLAN_CHAR",
   "type": "Plant de vigne",
   "composition": "Chardonnay Rose",
   "noms": null,
   "prix": null,
   "unite": null
  },
  {
   "id": "I092",
   "code": "PLAN_VOLT",
   "type": "Plant de vigne",
   "composition": "Voltis",
   "noms": null,
   "prix": null,
   "unite": null
  },
  {
   "id": "I093",
   "code": "PLAN_CACH",
   "type": "Plant de vigne",
   "composition": "Cache plant",
   "noms": null,
   "prix": null,
   "unite": null
  },
  {
   "id": "I094",
   "code": "AMEN_MO 6",
   "type": "Amendements organiques",
   "composition": "MO 62 % ; N 1,4 % ; P2O5 0,3 % ; K2O 1,6 % ; C/N 22,1",
   "noms": "VITIFEED HUMUS",
   "prix": null,
   "unite": null
  },
  {
   "id": "I095",
   "code": "AMEN_MO 6",
   "type": "Amendements organiques",
   "composition": "MO 63 % ; N 2 % ; P2O5 1,9 % ; K2O 1,6 % ; MgO 0,8 % ; C/N 15,7",
   "noms": "VITIFEED AMENDANT",
   "prix": null,
   "unite": null
  },
  {
   "id": "I096",
   "code": "AMEN_MO 4",
   "type": "Amendements organiques",
   "composition": "MO 49,7 % ; N 1,8 % ; P2O5 2,1 % ; K2O 1,2 % ; MgO 0,9 % ; C/N 13,8",
   "noms": "VITIFEED ACTIVATEUR",
   "prix": null,
   "unite": null
  },
  {
   "id": "I097",
   "code": "ENGR_4-3-",
   "type": "Engrais organiques",
   "composition": "4-3-2 SK + 1 MgO",
   "noms": "VITIFEED 4-3-2 SK + 1MgO",
   "prix": null,
   "unite": null
  },
  {
   "id": "I098",
   "code": "ENGR_9;5;",
   "type": "Engrais organiques",
   "composition": "9;5;0",
   "noms": "VITIFEED 9-5-0",
   "prix": null,
   "unite": null
  },
  {
   "id": "I099",
   "code": "ENGR_3;10",
   "type": "Engrais organiques",
   "composition": "3;10;0",
   "noms": "VITIFEED 3-10-0",
   "prix": null,
   "unite": null
  },
  {
   "id": "I100",
   "code": "ENGR_3-2-",
   "type": "Engrais organiques",
   "composition": "3-2-3-3",
   "noms": "Orga 3",
   "prix": null,
   "unite": null
  },
  {
   "id": "I101",
   "code": "ENGR_4-2-",
   "type": "Engrais organiques",
   "composition": "4-2-7-4",
   "noms": "Ovinor",
   "prix": null,
   "unite": null
  },
  {
   "id": "I102",
   "code": "ENGR_3-2-",
   "type": "Engrais organiques",
   "composition": "3-2-3-4",
   "noms": "Ovitonic",
   "prix": null,
   "unite": null
  },
  {
   "id": "I103",
   "code": "ENGR_4-4-",
   "type": "Engrais organiques",
   "composition": "4-4-4-2",
   "noms": "Quattro",
   "prix": null,
   "unite": null
  },
  {
   "id": "I104",
   "code": "ENGR_2,8-",
   "type": "Engrais organiques",
   "composition": "2,8-2,5-3-1",
   "noms": "Rigel",
   "prix": null,
   "unite": null
  },
  {
   "id": "I105",
   "code": "ENGR_5-2-",
   "type": "Engrais organiques",
   "composition": "5-2-8-4",
   "noms": "Skor",
   "prix": null,
   "unite": null
  },
  {
   "id": "I106",
   "code": "ENGR_0-4-",
   "type": "Engrais organiques",
   "composition": "0-4-26",
   "noms": "Sweet K+",
   "prix": null,
   "unite": null
  },
  {
   "id": "I107",
   "code": "ENGR_",
   "type": "Engrais organiques",
   "composition": null,
   "noms": "Ultralg",
   "prix": null,
   "unite": null
  },
  {
   "id": "I108",
   "code": "ENGR_3-3-",
   "type": "Engrais organiques",
   "composition": "3-3-3-3",
   "noms": "YXO 12",
   "prix": null,
   "unite": null
  },
  {
   "id": "I109",
   "code": "ENGR_4-3-",
   "type": "Engrais organiques",
   "composition": "4-3-3-3",
   "noms": "YXO 13",
   "prix": null,
   "unite": null
  },
  {
   "id": "I110",
   "code": "ENGR_5-4-",
   "type": "Engrais organo-minéraux",
   "composition": "5-4-2 SK + 1 MgO",
   "noms": "VITIFEED 5-4-2 SK + 1MgO",
   "prix": null,
   "unite": null
  },
  {
   "id": "I111",
   "code": "ENGR_5-3-",
   "type": "Engrais organo-minéraux",
   "composition": "5-3-7 SK + 4 MgO",
   "noms": "VITIFEED 5-3-7 SK + 4MgO",
   "prix": null,
   "unite": null
  },
  {
   "id": "I112",
   "code": "ENGR_6-3-",
   "type": "Engrais organo-minéraux",
   "composition": "6-3-10 SK + 2 MgO",
   "noms": "VITIFEED 6-3-10 SK + 2MgO",
   "prix": null,
   "unite": null
  },
  {
   "id": "I113",
   "code": "ENGR_5-3-",
   "type": "Engrais organo-minéraux",
   "composition": "5-3-5 SK + 2 MgO",
   "noms": "VITIFEED OM 5-3-5 SK + 2MgO",
   "prix": null,
   "unite": null
  },
  {
   "id": "I114",
   "code": "ENGR_MGO ",
   "type": "Engrais minéraux",
   "composition": "MgO 25 % ; SO3 50 %",
   "noms": "Kiesérite granulée",
   "prix": null,
   "unite": null
  },
  {
   "id": "I115",
   "code": "ENGR_CAO ",
   "type": "Engrais minéraux",
   "composition": "CaO 95 % ; MgO 1,5 %",
   "noms": "Chaux vive",
   "prix": null,
   "unite": null
  },
  {
   "id": "I116",
   "code": "ENGR_N 12",
   "type": "Engrais minéraux",
   "composition": "N 12 % ; P2O5 5 % ; K2O 15 % ; SO3 33 %",
   "noms": "FRUCTIFORT",
   "prix": null,
   "unite": null
  },
  {
   "id": "I117",
   "code": "ENGR_N 20",
   "type": "Engrais minéraux",
   "composition": "N 20 % ; K2O 2 % ; SO3 50 %",
   "noms": "N SYNERGIE",
   "prix": null,
   "unite": null
  },
  {
   "id": "I118",
   "code": "ENGR_K2O ",
   "type": "Engrais minéraux",
   "composition": "K2O 30 % ; CaO 5 % ; MgO 4 % ; SO3 30 %",
   "noms": "SK SYNERGIE 30",
   "prix": null,
   "unite": null
  },
  {
   "id": "I119",
   "code": "ENGR_0-10",
   "type": "Engrais minéraux",
   "composition": "0-10-17 + 3",
   "noms": "0 10 17 + 3",
   "prix": null,
   "unite": null
  },
  {
   "id": "I120",
   "code": "ENGR_6-4-",
   "type": "Engrais minéraux",
   "composition": "6-4-12 + 4",
   "noms": "6 4 12 + 4",
   "prix": null,
   "unite": null
  },
  {
   "id": "I121",
   "code": "ENGR_7-14",
   "type": "Engrais minéraux",
   "composition": "7-14 + 3",
   "noms": "7 14 + 3",
   "prix": null,
   "unite": null
  },
  {
   "id": "I122",
   "code": "ENGR_0,27",
   "type": "Engrais minéraux",
   "composition": "0.27",
   "noms": "Ammonitrate 27 %",
   "prix": null,
   "unite": null
  },
  {
   "id": "I123",
   "code": "ENGR_",
   "type": "Engrais minéraux",
   "composition": null,
   "noms": "Bio nutrium",
   "prix": null,
   "unite": null
  },
  {
   "id": "I124",
   "code": "ENGR_",
   "type": "Engrais minéraux",
   "composition": null,
   "noms": "Calko pk",
   "prix": null,
   "unite": null
  },
  {
   "id": "I125",
   "code": "ENGR_",
   "type": "Engrais minéraux",
   "composition": null,
   "noms": "Cyanamide calcique Perlka",
   "prix": null,
   "unite": null
  },
  {
   "id": "I126",
   "code": "ENGR_",
   "type": "Engrais minéraux",
   "composition": null,
   "noms": "Esta Kieserit",
   "prix": null,
   "unite": null
  },
  {
   "id": "I127",
   "code": "ENGR_30",
   "type": "Engrais minéraux",
   "composition": "30",
   "noms": "Fertigonia 30",
   "prix": null,
   "unite": null
  },
  {
   "id": "I128",
   "code": "ENGR_10;1",
   "type": "Engrais minéraux",
   "composition": "10;10;10",
   "noms": "Fertigonia L 10-10-10",
   "prix": null,
   "unite": null
  },
  {
   "id": "I129",
   "code": "ENGR_12-0",
   "type": "Engrais minéraux",
   "composition": "12-0-24",
   "noms": "Fertigonia L 12-0-24",
   "prix": null,
   "unite": null
  },
  {
   "id": "I130",
   "code": "ENGR_20+5",
   "type": "Engrais minéraux",
   "composition": "20+5",
   "noms": "Fertigonia L 20+5",
   "prix": null,
   "unite": null
  },
  {
   "id": "I131",
   "code": "ENGR_6;4;",
   "type": "Engrais minéraux",
   "composition": "6;4;20",
   "noms": "Fertigonia L 6-4-20",
   "prix": null,
   "unite": null
  },
  {
   "id": "I132",
   "code": "ENGR_",
   "type": "Engrais minéraux",
   "composition": null,
   "noms": "Granulek",
   "prix": null,
   "unite": null
  },
  {
   "id": "I133",
   "code": "ENGR_",
   "type": "Engrais minéraux",
   "composition": null,
   "noms": "GranuPotasse",
   "prix": null,
   "unite": null
  },
  {
   "id": "I134",
   "code": "ENGR_",
   "type": "Engrais minéraux",
   "composition": null,
   "noms": "Kalisop+",
   "prix": null,
   "unite": null
  },
  {
   "id": "I135",
   "code": "ENGR_",
   "type": "Engrais minéraux",
   "composition": null,
   "noms": "Nitro sulphur",
   "prix": null,
   "unite": null
  },
  {
   "id": "I136",
   "code": "ENGR_17,4",
   "type": "Engrais minéraux",
   "composition": "17,4-0-0",
   "noms": "Novatec Fluid Fe Max 17,4 - 0 - 0",
   "prix": null,
   "unite": null
  },
  {
   "id": "I137",
   "code": "ENGR_30-0",
   "type": "Engrais minéraux",
   "composition": "30-0-0 + 3,5",
   "noms": "Omega 30 0 0 + 3,5",
   "prix": null,
   "unite": null
  },
  {
   "id": "I138",
   "code": "ENGR_",
   "type": "Engrais minéraux",
   "composition": null,
   "noms": "Patentkali",
   "prix": null,
   "unite": null
  },
  {
   "id": "I139",
   "code": "ENGR_",
   "type": "Engrais minéraux",
   "composition": null,
   "noms": "Potamag",
   "prix": null,
   "unite": null
  },
  {
   "id": "I140",
   "code": "ENGR_10-0",
   "type": "Engrais minéraux",
   "composition": "10-0-1 - 15SK + 6SMgO",
   "noms": "Ultimate N 10 - 0 - 1 - 15SK + 6SMgO",
   "prix": null,
   "unite": null
  },
  {
   "id": "I141",
   "code": "CHÉL_FE E",
   "type": "Chélates de fer",
   "composition": "Fe EDDHA 6 %",
   "noms": "VITIFER 6 %",
   "prix": null,
   "unite": null
  },
  {
   "id": "I142",
   "code": "CHÉL_FE E",
   "type": "Chélates de fer",
   "composition": "Fe EDDHA 6 %",
   "noms": "SOLFER 6 %",
   "prix": null,
   "unite": null
  },
  {
   "id": "I143",
   "code": "CHÉL_FE 1",
   "type": "Chélates de fer",
   "composition": "Fe 1,30 %",
   "noms": "VITIFER 1,30 %",
   "prix": null,
   "unite": null
  },
  {
   "id": "I144",
   "code": "CARB_HVO1",
   "type": "Carburant",
   "composition": "HVO100",
   "noms": "HVO100",
   "prix": null,
   "unite": null
  },
  {
   "id": "I145",
   "code": "CARB_GNR",
   "type": "Carburant",
   "composition": "GNR",
   "noms": "GNR",
   "prix": null,
   "unite": null
  },
  {
   "id": "I146",
   "code": "GEL_PELE",
   "type": "Gel",
   "composition": "Pelets",
   "noms": "na",
   "prix": 380,
   "unite": "tonnes"
  }
 ],
 "operations": [
  {
   "code": "ARR_1_VE_EXP",
   "famille": "Arrachage pied mort",
   "libelle": "Arrachage pied mort",
   "ordre": 1,
   "mode": "VE",
   "org": "Exploitation",
   "source": "9 pieds/h",
   "codeMO": "MO_TRAC",
   "hMO": 10,
   "codeMach": "ENG_ENJ",
   "intrant": null,
   "qIntrant": null,
   "presta": null,
   "role": null
  },
  {
   "code": "BAI_1_VE_EXP",
   "famille": "Baissage fils",
   "libelle": "Baissage fils",
   "ordre": 1,
   "mode": "VE",
   "org": "Exploitation",
   "source": null,
   "codeMO": "MO_OUV",
   "hMO": 4,
   "codeMach": null,
   "intrant": null,
   "qIntrant": null,
   "presta": null,
   "role": null
  },
  {
   "code": "ENT_1_NA_EXP",
   "famille": "Entreplantation",
   "libelle": "Entreplantation exploit",
   "ordre": 2,
   "mode": "NA",
   "org": "Exploitation",
   "source": "20 pieds/h; 90 pieds/ha",
   "codeMO": "MO_OUV",
   "hMO": 5,
   "codeMach": null,
   "intrant": "I003",
   "qIntrant": 90,
   "presta": null,
   "role": null
  },
  {
   "code": "ENT_2_NA_PRE",
   "famille": "Entreplantation",
   "libelle": "Entreplantation presta",
   "ordre": 2,
   "mode": "NA",
   "org": "Prestataire",
   "source": null,
   "codeMO": null,
   "hMO": null,
   "codeMach": null,
   "intrant": null,
   "qIntrant": null,
   "presta": null,
   "role": null
  },
  {
   "code": "PRÉ_1_VE_EXP",
   "famille": "Prétaille",
   "libelle": "prétaillage mécanique",
   "ordre": 3,
   "mode": "VE",
   "org": "Exploitation",
   "source": "2 rangs, 4km/h",
   "codeMO": "MO_TRAC",
   "hMO": 2,
   "codeMach": "ENG_ENJ",
   "intrant": null,
   "qIntrant": null,
   "presta": null,
   "role": null
  },
  {
   "code": "PRÉ_2_VE_EXP",
   "famille": "Prétaille",
   "libelle": "prétaillage manuel",
   "ordre": 3,
   "mode": "VE",
   "org": "Exploitation",
   "source": "1200 pieds/h",
   "codeMO": "MO_OUV",
   "hMO": 7,
   "codeMach": null,
   "intrant": null,
   "qIntrant": null,
   "presta": null,
   "role": null
  },
  {
   "code": "PRÉ_3_VSL_EXP",
   "famille": "Prétaille",
   "libelle": "prétaillage mécanique",
   "ordre": 3,
   "mode": "VSL",
   "org": "Exploitation",
   "source": null,
   "codeMO": "MO_TRAC",
   "hMO": null,
   "codeMach": "ENG_ENJ",
   "intrant": null,
   "qIntrant": null,
   "presta": null,
   "role": null
  },
  {
   "code": "PRÉ_4_VSL_EXP",
   "famille": "Prétaille",
   "libelle": "prétaillage manuel",
   "ordre": 3,
   "mode": "VSL",
   "org": "Exploitation",
   "source": "1 rang à vitesse d emarche ",
   "codeMO": "MO_OUV",
   "hMO": 3,
   "codeMach": null,
   "intrant": null,
   "qIntrant": null,
   "presta": null,
   "role": null
  },
  {
   "code": "TAI_1_VE_EXP",
   "famille": "Taille",
   "libelle": "Taille Chablis",
   "ordre": 3,
   "mode": "VE",
   "org": "Exploitation",
   "source": "50 pieds/h",
   "codeMO": "MO_OUV",
   "hMO": 170,
   "codeMach": null,
   "intrant": null,
   "qIntrant": null,
   "presta": null,
   "role": null
  },
  {
   "code": "TAI_2_VE_EXP",
   "famille": "Taille",
   "libelle": "Taille Cordon",
   "ordre": 3,
   "mode": "VE",
   "org": "Exploitation",
   "source": "70 pieds/h",
   "codeMO": "MO_OUV",
   "hMO": 120,
   "codeMach": null,
   "intrant": null,
   "qIntrant": null,
   "presta": null,
   "role": null
  },
  {
   "code": "TAI_3_VE_EXP",
   "famille": "Taille",
   "libelle": "Taille VDM",
   "ordre": 3,
   "mode": "VE",
   "org": "Exploitation",
   "source": "70 pieds/h",
   "codeMO": "MO_OUV",
   "hMO": 120,
   "codeMach": null,
   "intrant": null,
   "qIntrant": null,
   "presta": null,
   "role": null
  },
  {
   "code": "TAI_4_VSL_EXP",
   "famille": "Taille",
   "libelle": "Taille Guyot VSL",
   "ordre": 3,
   "mode": "VSL",
   "org": "Exploitation",
   "source": null,
   "codeMO": "MO_OUV",
   "hMO": 85,
   "codeMach": null,
   "intrant": null,
   "qIntrant": null,
   "presta": null,
   "role": null
  },
  {
   "code": "TAI_5_VE_EXP",
   "famille": "Taille",
   "libelle": "Taille Guyot",
   "ordre": 3,
   "mode": "VE",
   "org": "Exploitation",
   "source": null,
   "codeMO": "MO_OUV",
   "hMO": 110,
   "codeMach": null,
   "intrant": null,
   "qIntrant": null,
   "presta": null,
   "role": null
  },
  {
   "code": "TAI_6_VE_EXP",
   "famille": "Taille",
   "libelle": "Taille exploitation (valeur moyenne VE)",
   "ordre": 3,
   "mode": "VE",
   "org": "Exploitation",
   "source": "4,7 ares/jour ou 55 pieds/h",
   "codeMO": "MO_OUV",
   "hMO": 150,
   "codeMach": null,
   "intrant": null,
   "qIntrant": null,
   "presta": null,
   "role": null
  },
  {
   "code": "TAI_7_VE_PRE",
   "famille": "Taille",
   "libelle": "Taille prestation (valeur moyenne VE)",
   "ordre": 3,
   "mode": "VE",
   "org": "Prestataire",
   "source": "35€/h",
   "codeMO": "MO_PRES_TAILLE",
   "hMO": 150,
   "codeMach": null,
   "intrant": null,
   "qIntrant": null,
   "presta": null,
   "role": null
  },
  {
   "code": "TAI_8_VSL_EXP",
   "famille": "Taille",
   "libelle": "Taille exploitation (valeur moyenne VSL)",
   "ordre": 3,
   "mode": "VSL",
   "org": "Exploitation",
   "source": null,
   "codeMO": "MO_OUV",
   "hMO": 80,
   "codeMach": null,
   "intrant": null,
   "qIntrant": null,
   "presta": null,
   "role": null
  },
  {
   "code": "TAI_9_VSL_PRE",
   "famille": "Taille",
   "libelle": "Taille prestation (valeur moyenne VSL)",
   "ordre": 3,
   "mode": "VSL",
   "org": "Prestataire",
   "source": null,
   "codeMO": "MO_PRES_TAILLE",
   "hMO": null,
   "codeMach": null,
   "intrant": null,
   "qIntrant": null,
   "presta": null,
   "role": null
  },
  {
   "code": "LIA_1_VE_EXP",
   "famille": "Liage",
   "libelle": "Liage exploit VE",
   "ordre": 4,
   "mode": "VE",
   "org": "Exploitation",
   "source": "400 pieds/h",
   "codeMO": "MO_OUV",
   "hMO": 21,
   "codeMach": null,
   "intrant": null,
   "qIntrant": null,
   "presta": null,
   "role": null
  },
  {
   "code": "LIA_2_VSL_EXP",
   "famille": "Liage",
   "libelle": "Liage exploit VSL",
   "ordre": 4,
   "mode": "VSL",
   "org": "Exploitation",
   "source": null,
   "codeMO": "MO_OUV",
   "hMO": 18,
   "codeMach": null,
   "intrant": null,
   "qIntrant": null,
   "presta": null,
   "role": null
  },
  {
   "code": "LIA_3_VE_PRE",
   "famille": "Liage",
   "libelle": "Liage presta VE",
   "ordre": 4,
   "mode": "VE",
   "org": "Prestataire",
   "source": null,
   "codeMO": null,
   "hMO": null,
   "codeMach": null,
   "intrant": null,
   "qIntrant": null,
   "presta": 2100,
   "role": null
  },
  {
   "code": "LIA_4_VSL_PRE",
   "famille": "Liage",
   "libelle": "Liage presta VSL",
   "ordre": 4,
   "mode": "VSL",
   "org": "Prestataire",
   "source": null,
   "codeMO": null,
   "hMO": null,
   "codeMach": null,
   "intrant": null,
   "qIntrant": null,
   "presta": null,
   "role": null
  },
  {
   "code": "RÉP_1_NA_EXP",
   "famille": "Réparation",
   "libelle": "Réparation (valeur moyenne)",
   "ordre": 5,
   "mode": "NA",
   "org": "Exploitation",
   "source": null,
   "codeMO": "MO_TRAC",
   "hMO": 15,
   "codeMach": null,
   "intrant": null,
   "qIntrant": null,
   "presta": null,
   "role": null
  },
  {
   "code": "BRO_1_VE_EXP",
   "famille": "Broyage",
   "libelle": "Broyage exploitation (valeur moyenne)",
   "ordre": 5,
   "mode": "VE",
   "org": "Exploitation",
   "source": null,
   "codeMO": "MO_TRAC",
   "hMO": 4,
   "codeMach": "ENG_ENJ",
   "intrant": null,
   "qIntrant": null,
   "presta": null,
   "role": null
  },
  {
   "code": "BRO_2_VE_PRE",
   "famille": "Broyage",
   "libelle": "Broyage prestation (valeur moyenne)",
   "ordre": 5,
   "mode": "VE",
   "org": "Prestataire",
   "source": null,
   "codeMO": null,
   "hMO": 4,
   "codeMach": null,
   "intrant": null,
   "qIntrant": null,
   "presta": 150,
   "role": null
  },
  {
   "code": "BRO_3_VSL_EXP",
   "famille": "Broyage",
   "libelle": "Broyage exploitation (valeur moyenne)",
   "ordre": 5,
   "mode": "VSL",
   "org": "Exploitation",
   "source": null,
   "codeMO": "MO_TRAC",
   "hMO": 4,
   "codeMach": null,
   "intrant": null,
   "qIntrant": null,
   "presta": null,
   "role": null
  },
  {
   "code": "BRO_4_VSL_PRE",
   "famille": "Broyage",
   "libelle": "Broyage prestation (valeur moyenne)",
   "ordre": 5,
   "mode": "VSL",
   "org": "Prestataire",
   "source": null,
   "codeMO": null,
   "hMO": 4,
   "codeMach": null,
   "intrant": null,
   "qIntrant": null,
   "presta": 350,
   "role": null
  },
  {
   "code": "FER_1_VE_EXP",
   "famille": "Fertilisation",
   "libelle": "Fertilisation",
   "ordre": 5,
   "mode": "VE",
   "org": "Exploitation",
   "source": null,
   "codeMO": null,
   "hMO": null,
   "codeMach": null,
   "intrant": null,
   "qIntrant": null,
   "presta": null,
   "role": null
  },
  {
   "code": "FER_2_VE_EXP",
   "famille": "Fertilisation",
   "libelle": "Fertilisation",
   "ordre": 5,
   "mode": "VE",
   "org": "Exploitation",
   "source": null,
   "codeMO": null,
   "hMO": null,
   "codeMach": null,
   "intrant": null,
   "qIntrant": null,
   "presta": null,
   "role": null
  },
  {
   "code": "FER_3_VE_EXP",
   "famille": "Fertilisation",
   "libelle": "Fertilisation",
   "ordre": 5,
   "mode": "VE",
   "org": "Exploitation",
   "source": null,
   "codeMO": null,
   "hMO": null,
   "codeMach": null,
   "intrant": null,
   "qIntrant": null,
   "presta": null,
   "role": null
  },
  {
   "code": "FER_4_VE_EXP",
   "famille": "Fertilisation",
   "libelle": "Fertilisation",
   "ordre": 5,
   "mode": "VE",
   "org": "Exploitation",
   "source": null,
   "codeMO": null,
   "hMO": null,
   "codeMach": null,
   "intrant": null,
   "qIntrant": null,
   "presta": null,
   "role": null
  },
  {
   "code": "FER_5_VE_EXP",
   "famille": "Fertilisation",
   "libelle": "Fertilisation orga",
   "ordre": 5,
   "mode": "VE",
   "org": "Exploitation",
   "source": null,
   "codeMO": "MO_TRAC",
   "hMO": 0.75,
   "codeMach": "ENG_ENJ",
   "intrant": "I002",
   "qIntrant": 0.8,
   "presta": null,
   "role": null
  },
  {
   "code": "CHÉ_1_VE_EXP",
   "famille": "Chélates",
   "libelle": "Chélates",
   "ordre": 5,
   "mode": "VE",
   "org": "Exploitation",
   "source": null,
   "codeMO": "MO_TRAC",
   "hMO": 0.75,
   "codeMach": "ENG_ENJ",
   "intrant": "I004",
   "qIntrant": 30,
   "presta": null,
   "role": null
  },
  {
   "code": "ENT_1_VE_EXP",
   "famille": "Entretien sol",
   "libelle": "Entretien sol mécanique exploit VE",
   "ordre": 6,
   "mode": "VE",
   "org": "Exploitation",
   "source": null,
   "codeMO": "MO_TRAC",
   "hMO": 5,
   "codeMach": "ENG_ENJ",
   "intrant": null,
   "qIntrant": null,
   "presta": null,
   "role": null
  },
  {
   "code": "ENT_2_VE_PRE",
   "famille": "Entretien sol",
   "libelle": "Entretien sol mécanique presta VE",
   "ordre": 6,
   "mode": "VE",
   "org": "Prestataire",
   "source": null,
   "codeMO": null,
   "hMO": null,
   "codeMach": null,
   "intrant": null,
   "qIntrant": null,
   "presta": 450,
   "role": null
  },
  {
   "code": "ENT_3_VSL_EXP",
   "famille": "Entretien sol",
   "libelle": "Entretien sol mécanique exploit VSL",
   "ordre": 6,
   "mode": "VSL",
   "org": "Exploitation",
   "source": null,
   "codeMO": "MO_TRAC",
   "hMO": 3,
   "codeMach": null,
   "intrant": null,
   "qIntrant": null,
   "presta": null,
   "role": null
  },
  {
   "code": "ENT_4_VSL_PRE",
   "famille": "Entretien sol",
   "libelle": "Entretien sol mécanique presta VSL",
   "ordre": 6,
   "mode": "VSL",
   "org": "Prestataire",
   "source": null,
   "codeMO": null,
   "hMO": null,
   "codeMach": null,
   "intrant": null,
   "qIntrant": null,
   "presta": 300,
   "role": null
  },
  {
   "code": "ENT_5_VSL_EXP",
   "famille": "Entretien sol",
   "libelle": "Entretien sol chimique exploit VSL",
   "ordre": 6,
   "mode": "VSL",
   "org": "Exploitation",
   "source": null,
   "codeMO": null,
   "hMO": null,
   "codeMach": null,
   "intrant": null,
   "qIntrant": null,
   "presta": null,
   "role": null
  },
  {
   "code": "ENT_6_VSL_PRE",
   "famille": "Entretien sol",
   "libelle": "Entretien sol chimique presta VSL",
   "ordre": 6,
   "mode": "VSL",
   "org": "Prestataire",
   "source": null,
   "codeMO": null,
   "hMO": null,
   "codeMach": null,
   "intrant": null,
   "qIntrant": null,
   "presta": 370,
   "role": null
  },
  {
   "code": "ENT_7_VE_EXP",
   "famille": "Entretien sol",
   "libelle": "Entretien sol chimique exploit VE",
   "ordre": 6,
   "mode": "VE",
   "org": "Exploitation",
   "source": null,
   "codeMO": "MO_TRAC",
   "hMO": 1,
   "codeMach": "ENG_ENJ",
   "intrant": "I001",
   "qIntrant": 2.5,
   "presta": null,
   "role": null
  },
  {
   "code": "ENT_8_VE_PRE",
   "famille": "Entretien sol",
   "libelle": "Entretien sol chimique presta VE",
   "ordre": 6,
   "mode": "VE",
   "org": "Prestataire",
   "source": null,
   "codeMO": null,
   "hMO": null,
   "codeMach": null,
   "intrant": null,
   "qIntrant": null,
   "presta": 150,
   "role": null
  },
  {
   "code": "POS_1_VE_EXP",
   "famille": "Pose RAK",
   "libelle": "Pose RAK exploit",
   "ordre": 7,
   "mode": "VE",
   "org": "Exploitation",
   "source": null,
   "codeMO": "MO_OUV",
   "hMO": 1,
   "codeMach": null,
   "intrant": "I005",
   "qIntrant": 3200,
   "presta": null,
   "role": null
  },
  {
   "code": "EBO_1_VE_EXP",
   "famille": "Ebourgeonage",
   "libelle": "Ebourgeonage",
   "ordre": 8,
   "mode": "VE",
   "org": "Exploitation",
   "source": "350 pieds/h",
   "codeMO": "MO_OUV",
   "hMO": 24,
   "codeMach": null,
   "intrant": null,
   "qIntrant": null,
   "presta": null,
   "role": null
  },
  {
   "code": "REL_1_VE_EXP",
   "famille": "Relevage",
   "libelle": "Relevage avec fil de pied",
   "ordre": 9,
   "mode": "VE",
   "org": "Exploitation",
   "source": null,
   "codeMO": "MO_OUV",
   "hMO": 19,
   "codeMach": null,
   "intrant": null,
   "qIntrant": null,
   "presta": null,
   "role": null
  },
  {
   "code": "REL_2_VE_EXP",
   "famille": "Relevage",
   "libelle": "Relevage sans fil de pied",
   "ordre": 9,
   "mode": "VE",
   "org": "Exploitation",
   "source": null,
   "codeMO": "MO_OUV",
   "hMO": 33,
   "codeMach": null,
   "intrant": null,
   "qIntrant": null,
   "presta": null,
   "role": null
  },
  {
   "code": "PRO_1_NA_PRE",
   "famille": "Protection",
   "libelle": "Pulvérisation (1 passage Presta)",
   "ordre": 10,
   "mode": "NA",
   "org": "Prestataire",
   "source": null,
   "codeMO": null,
   "hMO": null,
   "codeMach": null,
   "intrant": null,
   "qIntrant": null,
   "presta": 150,
   "role": null
  },
  {
   "code": "PRO_2_NA_EXP",
   "famille": "Protection",
   "libelle": "Pulvérisation (1 passage cuivre)",
   "ordre": 10,
   "mode": "NA",
   "org": "Exploitation",
   "source": null,
   "codeMO": null,
   "hMO": null,
   "codeMach": null,
   "intrant": null,
   "qIntrant": null,
   "presta": null,
   "role": null
  },
  {
   "code": "PRO_3_NA_EXP",
   "famille": "Protection",
   "libelle": "Pulvérisation (1 passage soufre)",
   "ordre": 10,
   "mode": "NA",
   "org": "Exploitation",
   "source": null,
   "codeMO": null,
   "hMO": null,
   "codeMach": null,
   "intrant": null,
   "qIntrant": null,
   "presta": null,
   "role": null
  },
  {
   "code": "PRO_4_NA_EXP",
   "famille": "Protection",
   "libelle": "Pulvérisation (1 passage folpel)",
   "ordre": 10,
   "mode": "NA",
   "org": "Exploitation",
   "source": null,
   "codeMO": null,
   "hMO": null,
   "codeMach": null,
   "intrant": null,
   "qIntrant": null,
   "presta": null,
   "role": null
  },
  {
   "code": "PRO_5_NA_EXP",
   "famille": "Protection",
   "libelle": "Pulvérisation (1 passage Exploit)",
   "ordre": 10,
   "mode": "NA",
   "org": "Exploitation",
   "source": null,
   "codeMO": null,
   "hMO": null,
   "codeMach": null,
   "intrant": null,
   "qIntrant": null,
   "presta": null,
   "role": null
  },
  {
   "code": "PAL_1_VE_EXP",
   "famille": "Palissage",
   "libelle": "Palissage",
   "ordre": 11,
   "mode": "VE",
   "org": "Exploitation",
   "source": "120 pieds / h",
   "codeMO": "MO_OUV",
   "hMO": 66,
   "codeMach": null,
   "intrant": null,
   "qIntrant": null,
   "presta": null,
   "role": null
  },
  {
   "code": "ROG_1_VE_EXP",
   "famille": "Rognage",
   "libelle": "Rognage",
   "ordre": 12,
   "mode": "VE",
   "org": "Exploitation",
   "source": null,
   "codeMO": "MO_TRAC",
   "hMO": 2,
   "codeMach": "ENG_ENJ",
   "intrant": null,
   "qIntrant": null,
   "presta": null,
   "role": null
  },
  {
   "code": "EFF_1_VE_EXP",
   "famille": "Effeuillage",
   "libelle": "Effeuillage",
   "ordre": 12,
   "mode": "VE",
   "org": "Exploitation",
   "source": null,
   "codeMO": "MO_TRAC",
   "hMO": 2,
   "codeMach": "ENG_ENJ",
   "intrant": null,
   "qIntrant": null,
   "presta": null,
   "role": null
  },
  {
   "code": "CIS_1_VE_EXP",
   "famille": "Cisaille",
   "libelle": "Cisaille",
   "ordre": 12,
   "mode": "VE",
   "org": "Exploitation",
   "source": null,
   "codeMO": "MO_OUV",
   "hMO": 35,
   "codeMach": null,
   "intrant": null,
   "qIntrant": null,
   "presta": null,
   "role": null
  },
  {
   "code": "ABO_1_VE_EXP",
   "famille": "Abords de parcelles (entretien)",
   "libelle": "Entretien des abords",
   "ordre": 13,
   "mode": "VE",
   "org": "Exploitation",
   "source": null,
   "codeMO": "MO_TRAC",
   "hMO": 1,
   "codeMach": null,
   "intrant": null,
   "qIntrant": null,
   "presta": null,
   "role": null
  },
  {
   "code": "BAT_1_VE_EXP",
   "famille": "Batiments-véhicules (entretien)",
   "libelle": "Entretien des batiments et véhicules",
   "ordre": 13,
   "mode": "VE",
   "org": "Exploitation",
   "source": null,
   "codeMO": "MO_TRAC",
   "hMO": 1,
   "codeMach": null,
   "intrant": null,
   "qIntrant": null,
   "presta": null,
   "role": null
  },
  {
   "code": "VEN_1_NA_MIX",
   "famille": "Vendanges",
   "libelle": "Vendange manuelle",
   "ordre": 14,
   "mode": "NA",
   "org": "Mixte",
   "source": "35-40 kg / h + coefficient organisation (x 1,35)",
   "codeMO": "MO_SAIS",
   "hMO": 330,
   "codeMach": null,
   "intrant": null,
   "qIntrant": null,
   "presta": null,
   "role": "cueillette"
  },
  {
   "code": "VEN_2_NA_EXP",
   "famille": "Vendanges",
   "libelle": "Transport raisins → pressoir",
   "ordre": 14,
   "mode": "NA",
   "org": "Exploitation",
   "source": null,
   "codeMO": "MO_TRAC",
   "hMO": 4,
   "codeMach": "ENG_ENJ",
   "intrant": null,
   "qIntrant": null,
   "presta": null,
   "role": null
  },
  {
   "code": "PRO_1_NA_EXP",
   "famille": "Prospection",
   "libelle": "Prospection Flavescence dorée",
   "ordre": 15,
   "mode": "NA",
   "org": "Exploitation",
   "source": null,
   "codeMO": "MO_OUV",
   "hMO": 6,
   "codeMach": null,
   "intrant": null,
   "qIntrant": null,
   "presta": null,
   "role": null
  }
 ],
 "profils": [
  {
   "id": "SC_5",
   "classe": "<1",
   "dep": "Marne",
   "cert": "SANS",
   "nb": 10616,
   "surf": 1625
  },
  {
   "id": "SC_1",
   "classe": "<1",
   "dep": "Marne",
   "cert": "HVE+VDC+AUTRE",
   "nb": 1983,
   "surf": 739
  },
  {
   "id": "SC_2",
   "classe": "de 1 à 5",
   "dep": "Marne",
   "cert": "HVE+VDC+AUTRE",
   "nb": 1723,
   "surf": 4453
  },
  {
   "id": "SC_6",
   "classe": "de 1 à 5",
   "dep": "Marne",
   "cert": "SANS",
   "nb": 1538,
   "surf": 3514
  },
  {
   "id": "SC_17",
   "classe": "<1",
   "dep": "Aube et Haute-Marne",
   "cert": "SANS",
   "nb": 844,
   "surf": 272
  },
  {
   "id": "SC_14",
   "classe": "de 1 à 5",
   "dep": "Aube et Haute-Marne",
   "cert": "HVE+VDC+AUTRE",
   "nb": 688,
   "surf": 1738
  },
  {
   "id": "SC_3",
   "classe": "de 5 à 10",
   "dep": "Marne",
   "cert": "HVE+VDC+AUTRE",
   "nb": 638,
   "surf": 4391
  },
  {
   "id": "SC_13",
   "classe": "<1",
   "dep": "Aube et Haute-Marne",
   "cert": "HVE+VDC+AUTRE",
   "nb": 504,
   "surf": 255
  },
  {
   "id": "SC_29",
   "classe": "<1",
   "dep": "Aisne et Seine-et-Marne",
   "cert": "SANS",
   "nb": 435,
   "surf": 83
  },
  {
   "id": "SC_18",
   "classe": "de 1 à 5",
   "dep": "Aube et Haute-Marne",
   "cert": "SANS",
   "nb": 350,
   "surf": 792
  },
  {
   "id": "SC_15",
   "classe": "de 5 à 10",
   "dep": "Aube et Haute-Marne",
   "cert": "HVE+VDC+AUTRE",
   "nb": 290,
   "surf": 1990
  },
  {
   "id": "SC_7",
   "classe": "de 5 à 10",
   "dep": "Marne",
   "cert": "SANS",
   "nb": 286,
   "surf": 1903
  },
  {
   "id": "SC_26",
   "classe": "de 1 à 5",
   "dep": "Aisne et Seine-et-Marne",
   "cert": "HVE+VDC+AUTRE",
   "nb": 201,
   "surf": 521
  },
  {
   "id": "SC_10",
   "classe": "de 1 à 5",
   "dep": "Marne",
   "cert": "BIO+BIODYNAMIE",
   "nb": 177,
   "surf": 481
  },
  {
   "id": "SC_4",
   "classe": "≥10",
   "dep": "Marne",
   "cert": "HVE+VDC+AUTRE",
   "nb": 170,
   "surf": 4374
  },
  {
   "id": "SC_30",
   "classe": "de 1 à 5",
   "dep": "Aisne et Seine-et-Marne",
   "cert": "SANS",
   "nb": 157,
   "surf": 395
  },
  {
   "id": "SC_9",
   "classe": "<1",
   "dep": "Marne",
   "cert": "BIO+BIODYNAMIE",
   "nb": 114,
   "surf": 51
  },
  {
   "id": "SC_25",
   "classe": "<1",
   "dep": "Aisne et Seine-et-Marne",
   "cert": "HVE+VDC+AUTRE",
   "nb": 108,
   "surf": 37
  },
  {
   "id": "SC_11",
   "classe": "de 5 à 10",
   "dep": "Marne",
   "cert": "BIO+BIODYNAMIE",
   "nb": 89,
   "surf": 612
  },
  {
   "id": "SC_27",
   "classe": "de 5 à 10",
   "dep": "Aisne et Seine-et-Marne",
   "cert": "HVE+VDC+AUTRE",
   "nb": 88,
   "surf": 639
  },
  {
   "id": "SC_19",
   "classe": "de 5 à 10",
   "dep": "Aube et Haute-Marne",
   "cert": "SANS",
   "nb": 72,
   "surf": 472
  },
  {
   "id": "SC_16",
   "classe": "≥10",
   "dep": "Aube et Haute-Marne",
   "cert": "HVE+VDC+AUTRE",
   "nb": 69,
   "surf": 1040
  },
  {
   "id": "SC_8",
   "classe": "≥10",
   "dep": "Marne",
   "cert": "SANS",
   "nb": 60,
   "surf": 976
  },
  {
   "id": "SC_22",
   "classe": "de 1 à 5",
   "dep": "Aube et Haute-Marne",
   "cert": "BIO+BIODYNAMIE",
   "nb": 54,
   "surf": 131
  },
  {
   "id": "SC_12",
   "classe": "≥10",
   "dep": "Marne",
   "cert": "BIO+BIODYNAMIE",
   "nb": 37,
   "surf": 683
  },
  {
   "id": "SC_31",
   "classe": "de 5 à 10",
   "dep": "Aisne et Seine-et-Marne",
   "cert": "SANS",
   "nb": 36,
   "surf": 229
  },
  {
   "id": "SC_21",
   "classe": "<1",
   "dep": "Aube et Haute-Marne",
   "cert": "BIO+BIODYNAMIE",
   "nb": 30,
   "surf": 19
  },
  {
   "id": "SC_23",
   "classe": "de 5 à 10",
   "dep": "Aube et Haute-Marne",
   "cert": "BIO+BIODYNAMIE",
   "nb": 22,
   "surf": 161
  },
  {
   "id": "SC_28",
   "classe": "≥10",
   "dep": "Aisne et Seine-et-Marne",
   "cert": "HVE+VDC+AUTRE",
   "nb": 21,
   "surf": 329
  },
  {
   "id": "SC_20",
   "classe": "≥10",
   "dep": "Aube et Haute-Marne",
   "cert": "SANS",
   "nb": 15,
   "surf": 202
  },
  {
   "id": "SC_35",
   "classe": "de 5 à 10",
   "dep": "Aisne et Seine-et-Marne",
   "cert": "BIO+BIODYNAMIE",
   "nb": 11,
   "surf": 75
  },
  {
   "id": "SC_34",
   "classe": "de 1 à 5",
   "dep": "Aisne et Seine-et-Marne",
   "cert": "BIO+BIODYNAMIE",
   "nb": 11,
   "surf": 32
  },
  {
   "id": "SC_32",
   "classe": "≥10",
   "dep": "Aisne et Seine-et-Marne",
   "cert": "SANS",
   "nb": 10,
   "surf": 153
  },
  {
   "id": "SC_24",
   "classe": "≥10",
   "dep": "Aube et Haute-Marne",
   "cert": "BIO+BIODYNAMIE",
   "nb": 10,
   "surf": 147
  },
  {
   "id": "SC_33",
   "classe": "<1",
   "dep": "Aisne et Seine-et-Marne",
   "cert": "BIO+BIODYNAMIE",
   "nb": 9,
   "surf": 4
  },
  {
   "id": "SC_36",
   "classe": "≥10",
   "dep": "Aisne et Seine-et-Marne",
   "cert": "BIO+BIODYNAMIE",
   "nb": 4,
   "surf": 64
  }
 ],
 "scenarios": {
  "SC_2": [
   {
    "code": "VEN_1_NA_MIX",
    "nb": 1
   },
   {
    "code": "TAI_6_VE_EXP",
    "nb": 1
   },
   {
    "code": "ENT_1_VE_EXP",
    "nb": 6
   },
   {
    "code": "PRO_1_NA_PRE",
    "nb": 12
   },
   {
    "code": "ARR_1_VE_EXP",
    "nb": 1
   },
   {
    "code": "PAL_1_VE_EXP",
    "nb": 1
   },
   {
    "code": "ROG_1_VE_EXP",
    "nb": 3
   },
   {
    "code": "EBO_1_VE_EXP",
    "nb": 1
   },
   {
    "code": "RÉP_1_NA_EXP",
    "nb": 1
   },
   {
    "code": "LIA_1_VE_EXP",
    "nb": 1
   },
   {
    "code": "REL_1_VE_EXP",
    "nb": 1
   },
   {
    "code": "VEN_2_NA_EXP",
    "nb": 1
   },
   {
    "code": "PRÉ_1_VE_EXP",
    "nb": 1
   },
   {
    "code": "PRO_1_NA_EXP",
    "nb": 1
   },
   {
    "code": "BRO_1_VE_EXP",
    "nb": 1
   },
   {
    "code": "ENT_1_NA_EXP",
    "nb": 1
   },
   {
    "code": "ENT_7_VE_EXP",
    "nb": 1
   },
   {
    "code": "BAI_1_VE_EXP",
    "nb": 1
   },
   {
    "code": "CHÉ_1_VE_EXP",
    "nb": 1
   },
   {
    "code": "ABO_1_VE_EXP",
    "nb": 1
   },
   {
    "code": "BAT_1_VE_EXP",
    "nb": 1
   },
   {
    "code": "POS_1_VE_EXP",
    "nb": 1
   },
   {
    "code": "FER_5_VE_EXP",
    "nb": 1
   }
  ]
 },
 "version": "2026.09.1",
 "source": "Classeur Simulateur_economique.xlsm v2 (corrections d'exécution du 19/09/2026)"
};
if (typeof module !== 'undefined' && module.exports) module.exports = REFERENTIEL;
