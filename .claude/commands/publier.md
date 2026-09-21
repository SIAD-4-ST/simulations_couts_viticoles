---
description: Produire la version en un seul fichier pour diffusion
allowed-tools: Bash(node --test:*), Bash(node .claude/outils/fichier-unique.js), Bash(git status), Bash(git log:*)
---
1. `node --test --test-reporter=dot` : s'arrêter au premier échec.
2. `node .claude/outils/fichier-unique.js` → `index-autonome.html` (ne pas le lire).
3. Résumer en 5 lignes au plus ce qui change pour l'utilisateur depuis le dernier commit publié, et rappeler les arbitrages encore ouverts et le nombre d'intrants sans prix (`node .claude/outils/ref.js stats`).
