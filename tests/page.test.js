'use strict';
/* Règles de construction de index.html, vérifiées statiquement (pas de navigateur requis). */
const test = require('node:test'), assert = require('node:assert');
const { html, bloc } = require('./charger');
const sansCommentaires = s => s.replace(/\/\*[\s\S]*?\*\/|\/\/[^\n]*/g, '');
test('le moteur est pur : ni document, ni window, ni stockage', () =>
  assert.ok(!/\b(document|window|localStorage|sessionStorage)\b/.test(bloc('moteur'))));
test('aucun appel réseau dans la page', () => assert.ok(!/\bfetch\s*\(|XMLHttpRequest|WebSocket/.test(html)));
test('aucune ressource externe : seul data/referentiel.js est chargé', () => {
  const srcs = [...html.matchAll(/<script[^>]+src="([^"]+)"/g)].map(m => m[1]);
  assert.deepStrictEqual(srcs, ['data/referentiel.js']);
  assert.ok(!/https?:\/\//.test(sansCommentaires(bloc('moteur') + bloc('interface'))), 'URL externe dans un script');
});
test('interface : pas de couleur littérale (jetons CSS uniquement)', () => assert.ok(!/#[0-9a-fA-F]{3,8}\b/.test(bloc('interface'))));
test('interface : pas de toFixed (format fr-FR via fr())', () => assert.ok(!/toFixed\(/.test(bloc('interface'))));
test('les repères de section sont présents (lecture ciblée)', () =>
  ['STYLE', 'PAGE', 'MOTEUR', 'INTERFACE'].forEach(s => assert.ok(html.includes(`SECTION ${s} =`), s)));
