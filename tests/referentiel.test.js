'use strict';
const test = require('node:test'), assert = require('node:assert');
const { usine } = require('./charger');
const { validerReferentiel } = require('./valider-referentiel');
test('référentiel : aucune erreur structurelle', () => assert.deepStrictEqual(validerReferentiel(usine()).erreurs, []));
test('le validateur détecte une référence cassée', () => {
  const ref = usine(); ref.operations[0].codeMach = 'MACHINE_FANTOME';
  assert.ok(validerReferentiel(ref).erreurs.some(e => e.includes('MACHINE_FANTOME')));
});
test('le validateur refuse un prix textuel (« ? » doit être null)', () => {
  const ref = usine(); ref.intrants[0].prix = '?'; assert.ok(validerReferentiel(ref).erreurs.length > 0);
});
test('rendement commercialisable 8 800 kg/ha, sourcé Comité Champagne 22/07/2026', () => {
  const ref = usine(); assert.strictEqual(ref.params.volume, 8800); assert.strictEqual(ref.meta.params.volume, 'CIVC-REND-2026');
});
