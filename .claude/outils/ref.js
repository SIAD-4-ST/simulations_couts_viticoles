'use strict';
/* Accès ciblé au référentiel — évite de lire data/referentiel.js (≈ 60 Ko) en entier.
 *   node .claude/outils/ref.js stats
 *   node .claude/outils/ref.js ls <operations|mo|machines|intrants|profils|sources> [filtre]
 *   node .claude/outils/ref.js get <table> <code|id>
 *   node .claude/outils/ref.js set <table> <code|id> <champ> <valeur>      (valeur JSON ou texte ; "null" pour vider)
 *   node .claude/outils/ref.js scen <SC_x> [json-options]                  (synthèse calculée par le moteur)
 *   node .claude/outils/ref.js param <nom> [valeur] [idSource]              */
const fs = require('fs'), path = require('path');
const FILE = path.join(__dirname, '..', '..', 'data', 'referentiel.js');
const brut = fs.readFileSync(FILE, 'utf8');
const debut = brut.indexOf('const REFERENTIEL = ') + 'const REFERENTIEL = '.length, fin = brut.lastIndexOf('};') + 1;
const ref = JSON.parse(brut.slice(debut, fin));
/* Réécrit uniquement le bloc de données : en-tête et ligne d'export conservés. */
const save = () => fs.writeFileSync(FILE, brut.slice(0, debut) + JSON.stringify(ref, null, 1) + brut.slice(fin));
const [cmd, a, b, c, d] = process.argv.slice(2);
const key = { operations: 'code', mo: 'code', machines: 'code', intrants: 'id', profils: 'id', sources: 'id' };
const table = t => t === 'sources' ? ref.meta.sources : ref[t];
const parse = v => { try { return JSON.parse(v); } catch (e) { return v; } };
const cols = { operations: o => [o.code, o.famille, o.libelle, o.mode, o.org, o.codeMO || '', o.hMO ?? '', o.codeMach || '', o.intrant || '', o.qIntrant ?? '', o.presta ?? ''],
  mo: m => [m.code, m.libelle, m.brut ?? '', m.charges ?? '', m.eurKg ?? ''], machines: m => [m.code, m.libelle, m.valeur, m.duree, m.heures, m.conso],
  intrants: i => [i.id, i.code, i.composition || '', i.prix ?? '?', i.unite || ''], profils: p => [p.id, p.classe, p.dep, p.cert, p.nb, p.surf, (ref.scenarios[p.id] || []).length + ' lignes'],
  sources: s => [s.id, s.date, s.statut, s.libelle] };
function main() {
  if (cmd === 'stats') {
    const { validerReferentiel } = require('../../tests/valider-referentiel');
    const v = validerReferentiel(ref);
    console.log(`version ${ref.meta.version} (${ref.meta.date}) — ${ref.operations.length} opérations, ${ref.mo.length} MO, ${ref.machines.length} machines, ${ref.intrants.length} intrants, ${Object.keys(ref.scenarios).length}/${ref.profils.length} profils avec scénario`);
    console.log(`erreurs : ${v.erreurs.length}${v.erreurs.length ? '\n- ' + v.erreurs.join('\n- ') : ''}`);
    console.log(`avertissements : ${v.avertissements.length}${v.avertissements.length ? '\n- ' + v.avertissements.slice(0, 15).join('\n- ') : ''}`);
    return;
  }
  if (cmd === 'ls') { const f = (b || '').toLowerCase(); table(a).map(cols[a]).filter(r => !f || r.join(' ').toLowerCase().includes(f)).forEach(r => console.log(r.join(' | '))); return; }
  if (cmd === 'get') { const x = table(a).find(y => y[key[a]] === b); if (!x) return fail(`${a} ${b} introuvable`); console.log(JSON.stringify(x, null, 1)); return; }
  if (cmd === 'set') { const x = table(a).find(y => y[key[a]] === b); if (!x) return fail(`${a} ${b} introuvable`); const av = x[c]; x[c] = parse(d); save(); console.log(`${a}.${b}.${c} : ${JSON.stringify(av)} → ${JSON.stringify(x[c])}`); return; }
  if (cmd === 'param') { if (b === undefined) return console.log(a, ref.params[a], 'source:', (ref.meta.params || {})[a]); const av = ref.params[a]; ref.params[a] = parse(b); if (c) ref.meta.params[a] = c; save(); console.log(`params.${a} : ${av} → ${ref.params[a]}`); return; }
  if (cmd === 'scen') {
    const { Core, CV } = require('../../tests/charger');
    const r = Core.scenario(ref, { ...CV.DEFAULT_OPTS, ...(b ? JSON.parse(b) : {}) }, a), s = r.synth, f = v => Math.round(v * 100) / 100;
    console.log(`${a} — surface moyenne ${f(r.surf)} ha — coût ${f(s.cout)} €/ha (MO ${f(s.mo)}, matériel ${f(s.mach)}, intrants ${f(s.intr)}, presta ${f(s.presta)}) — ${f(s.hMO)} h MO/ha, ${f(s.hMach)} h traction/ha — ${f(s.eurKg)} €/kg`);
    r.warnings.forEach(w => console.log('! ' + w)); return;
  }
  fail('Commande inconnue. Voir l\'en-tête de .claude/outils/ref.js');
}
function fail(m) { console.error(m); process.exitCode = 1; }
main();
