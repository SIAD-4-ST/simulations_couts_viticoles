---
description: Lancer les tests ; ne rapporter que les échecs
allowed-tools: Bash(node --test:*)
---
Lance `node --test --test-reporter=dot`.
- Tout passe : une ligne (nombre de tests).
- Échec : relance `node --test --test-reporter=spec`, puis pour chaque échec donne la cause probable et la correction proposée. Si un cas de validation (T1 à T9) est en jeu, ne corrige rien sans accord : c'est un résultat figé.
