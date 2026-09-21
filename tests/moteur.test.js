'use strict';
/* Propriétés du moteur : invariants qui doivent tenir quel que soit le référentiel. */
const test = require('node:test'), assert = require('node:assert');
const { Core, usine, OPTS } = require('./charger');
const near = (a, b, t = 1e-6) => assert.ok(Math.abs(a - b) <= t, `${a} ≠ ${b}`);

test('pmt : taux nul = amortissement linéaire', () => near(Core.pmt(0, 10, 1000), 100));
test('pmt : 3 %, 10 ans, 210 000 € = 24 618,41 €', () => near(Core.pmt(0.03, 10, 210000), 24618.4064, 1e-3));

test('synthèse = somme des postes (MO + matériel + intrants + prestations)', () => {
  for (const o of [OPTS, { ...OPTS, machine: 'scenario' }, { ...OPTS, vendange: 'tache' }, { ...OPTS, vendange: 'productivite' }]) {
    const s = Core.scenario(usine(), o, 'SC_2').synth; near(s.cout, s.mo + s.mach + s.intr + s.presta, 1e-6);
  }
});
test('heures de traction nulles pour une opération sans machine (anti double comptage)', () => {
  const ref = usine(); const op = ref.operations.find(o => o.code === 'TAI_6_VE_EXP');
  assert.strictEqual(Core.heuresOp(ref, op, OPTS).hMach, 0);
});
test('code inconnu dans un scénario : ligne à 0 € et alerte, pas d\'exception', () => {
  const ref = usine(); ref.scenarios.SC_2.push({ code: 'INEXISTANT', nb: 1 });
  const r = Core.scenario(ref, OPTS, 'SC_2');
  assert.ok(r.warnings.some(w => w.includes('INEXISTANT'))); near(r.synth.cout, 20609.5946, 1e-3);
});
test('mode « heures du scénario » : machine inutilisée → alerte, pas de division par zéro', () => {
  const ref = usine(); ref.scenarios.SC_2 = [{ code: 'TAI_6_VE_EXP', nb: 1 }];
  const r = Core.scenario(ref, { ...OPTS, machine: 'scenario' }, 'SC_2');
  assert.ok(isFinite(r.synth.cout));
});
test('mode « heures du scénario » : le coût horaire baisse quand la surface augmente', () => {
  const ref = usine(); const p = ref.profils.find(x => x.id === 'SC_2');
  const a = Core.scenario(ref, { ...OPTS, machine: 'scenario' }, 'SC_2').machRates.ENG_ENJ.rate;
  p.nb = p.nb / 4; // surface moyenne × 4
  const b = Core.scenario(ref, { ...OPTS, machine: 'scenario' }, 'SC_2').machRates.ENG_ENJ.rate;
  assert.ok(b < a, `${b} devrait être < ${a}`);
});
test('vendange « productivité » : le temps suit le volume récolté', () => {
  const ref = usine(); const o = { ...OPTS, vendange: 'productivite' };
  const h1 = Core.scenario(ref, o, 'SC_2').lines.find(l => l.code === 'VEN_1_NA_MIX').h;
  const h2 = Core.scenario(ref, { ...o, miseReserve: 1000 }, 'SC_2').lines.find(l => l.code === 'VEN_1_NA_MIX').h;
  near(h2 / h1, 9800 / 8800);
});
test('vendange « temps fixe » : insensible au rendement (comportement du classeur, arbitrage A2 ouvert)', () => {
  const ref = usine(); const a = Core.scenario(ref, OPTS, 'SC_2').synth.cout; ref.params.volume = 12000;
  near(Core.scenario(ref, OPTS, 'SC_2').synth.cout, a);
});
test('débit : la table de sensibilité inclut arrêt et route (correctif v2)', () => {
  const d = { longueur: 24, largeur: 7, ecRang: 1.1, ecPied: 1.1, piedsH: 400, vitesse: 5, rangsPassage: 2, demiTour: 45, arret: 0.1, route: 0.1 };
  const r = Core.debit(d); near(r.sensib.find(x => x.v === 5).hHa, r.hHaMach);
});
test('débit : rangs courts → les demi-tours dominent le temps de travail', () => {
  const r = Core.debit({ longueur: 24, largeur: 7, ecRang: 1.1, ecPied: 1.1, piedsH: 400, vitesse: 4, rangsPassage: 2, demiTour: 45, arret: 0, route: 0 });
  assert.ok(r.partDemiTour > 0.5);
});
test('contrôles du référentiel d\'usine : valeurs figées au 19/09/2026', () => {
  const c = Object.fromEntries(Core.controles(usine()).map(x => [x.label, x.n]));
  assert.deepStrictEqual(c, {
    'Opérations dont le coût est nul': 13, 'Intrants référencés mais absents du barème': 0, "Codes main-d'œuvre sans taux horaire": 1,
    'Intrants sans prix': 123, 'Profils sans scénario défini': 35, 'Lignes de scénario avec un code inconnu': 0,
    'Codes opération en doublon ou vides': 0, 'Codes intrants en doublon': 20 });
});
