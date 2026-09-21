---
description: Instruire un arbitrage de méthode, sans l'implémenter
argument-hint: <A1…A6 ou sujet>
allowed-tools: Bash(node .claude/outils/ref.js:*)
---
Sujet : $ARGUMENTS

Ne modifie aucun fichier. Produis :
1. Le point de fragilité dont dépend le résultat et le test chiffré qui le tranche (`node .claude/outils/ref.js scen SC_2 '{"machine":"scenario"}'` pour chiffrer une variante).
2. Deux à quatre options : critère favorable, effet chiffré sur SC_2, ce qu'elle écarte.
3. La question à trancher, formulée pour être posée telle quelle, et à qui la poser si l'information est externe.

Si la décision est prise dans la conversation : ajoute une entrée au journal du README (modèle fourni) et retire le point de la liste « Arbitrages ouverts » de `.claude/CLAUDE.md`. L'implémentation est une tâche séparée.
