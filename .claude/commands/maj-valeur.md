---
description: Mettre à jour une valeur du référentiel avec sa source
argument-hint: <table> <code> <champ> <valeur> <source + date>
allowed-tools: Bash(node .claude/outils/ref.js:*), Bash(node --test:*)
---
Demande : $ARGUMENTS

1. `node .claude/outils/ref.js get <table> <code>` : lire uniquement l'élément visé, jamais tout `data/referentiel.js`.
2. Si la source n'est pas dans `node .claude/outils/ref.js ls sources`, demander son libellé, sa date et son statut (primaire, secondaire, à sourcer). Ne jamais inventer une date ou une URL.
3. `node .claude/outils/ref.js set …` (le hook relance les tests).
4. Si un cas T1–T9 casse : s'arrêter, c'est un arbitrage (/arbitrage), pas une mise à jour.
5. Ajouter une ligne au tableau « Mises à jour de valeurs » du README (date, élément, avant → après, source).
