'use strict';
/* Parité avec le classeur Excel v2 et les calculs de référence de l'audit du 19/09/2026.
 * Mêmes cas que l'onglet « Contrôles et tests » de la page (CasValidation, dans index.html). */
const test = require('node:test'), assert = require('node:assert');
const { Core, CV, usine } = require('./charger');
for (const r of CV.executer(Core, usine()))
  test(`${r.id} ${r.l} [${r.origine}]`, () => assert.ok(r.ok, `obtenu ${r.v}, attendu ${r.exp}`));
