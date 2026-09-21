#!/usr/bin/env node
'use strict';
/* Hook PostToolUse (Edit|Write|MultiEdit) : relance les tests si index.html ou data/ ont changé.
 * Silencieux si tout passe. En cas d'échec : sortie 2 et résumé court, que Claude doit traiter. */
const { spawnSync } = require('child_process'), path = require('path');
const racine = path.join(__dirname, '..', '..');
let brut = ''; process.stdin.on('data', c => brut += c).on('end', () => {
  let f = ''; try { f = (JSON.parse(brut).tool_input || {}).file_path || ''; } catch (e) { process.exit(0); }
  f = f.replace(/\\/g, '/');
  if (/index-autonome\.html$/.test(f)) { console.error('index-autonome.html est généré : modifier index.html ou data/, puis node .claude/outils/fichier-unique.js'); process.exit(2); }
  if (!/(^|\/)index\.html$|(^|\/)data\/|(^|\/)tests\//.test(f)) process.exit(0);
  const t = spawnSync(process.execPath, ['--test', '--test-reporter=spec'], { cwd: racine, encoding: 'utf8' });
  if (!t.status) process.exit(0);
  const sortie = t.stdout + t.stderr, i = sortie.indexOf('failing tests:');
  const ko = (i >= 0 ? sortie.slice(i) : sortie).split('\n').filter(l => /✖|AssertionError|Error/.test(l))
    .map(l => l.replace(/\s*\([\d.]+ms\)$/, '')).slice(0, 24);
  console.error('Tests en échec :\n' + ko.join('\n'));
  process.exit(2);
});
