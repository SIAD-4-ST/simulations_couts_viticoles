'use strict';
/* Validation structurelle du référentiel. Renvoie { erreurs:[], avertissements:[] }.
 * Erreur = le calcul peut devenir faux. Avertissement = donnée à compléter (non bloquant). */
function validerReferentiel(ref) {
  const E = [], A = [];
  const num = v => v === null || (typeof v === 'number' && isFinite(v));
  for (const k of ['meta', 'params', 'mo', 'machines', 'intrants', 'operations', 'profils', 'scenarios'])
    if (!(k in ref)) E.push(`Section manquante : ${k}`);
  if (E.length) return { erreurs: E, avertissements: A };
  const sources = new Set((ref.meta.sources || []).map(s => s.id));
  (ref.meta.sources || []).forEach(s => { if (!s.date) E.push(`Source ${s.id} sans date`); });
  Object.keys(ref.params).forEach(p => {
    if (!num(ref.params[p])) E.push(`Paramètre non numérique : ${p}`);
    const s = (ref.meta.params || {})[p];
    if (!s) A.push(`Paramètre sans source : ${p}`); else if (!sources.has(s)) E.push(`Paramètre ${p} : source inconnue ${s}`);
  });
  const dup = (arr, lib) => { const vu = new Set(); arr.forEach(x => { if (vu.has(x)) E.push(`${lib} en doublon : ${x}`); vu.add(x); }); };
  dup(ref.operations.map(o => o.code), 'Code opération');
  dup(ref.mo.map(m => m.code), 'Code MO'); dup(ref.machines.map(m => m.code), 'Code machine'); dup(ref.intrants.map(i => i.id), 'Id intrant');
  const mo = new Set(ref.mo.map(m => m.code)), ma = new Set(ref.machines.map(m => m.code)), ins = new Set(ref.intrants.map(i => i.id));
  ref.operations.forEach(o => {
    if (!o.code) E.push('Opération sans code');
    if (o.codeMO && !mo.has(o.codeMO)) E.push(`${o.code} : code MO inconnu ${o.codeMO}`);
    if (o.codeMach && !ma.has(o.codeMach)) E.push(`${o.code} : machine inconnue ${o.codeMach}`);
    if (o.intrant && !ins.has(o.intrant)) E.push(`${o.code} : intrant inconnu ${o.intrant}`);
    ['hMO', 'qIntrant', 'presta'].forEach(k => { if (k in o && !num(o[k])) E.push(`${o.code}.${k} non numérique`); });
    if (o.intrant && o.qIntrant == null) A.push(`${o.code} : intrant sans quantité`);
  });
  ref.machines.forEach(m => ['valeur', 'duree', 'heures', 'entretien', 'conso', 'autres', 'assurance'].forEach(k => { if (!num(m[k])) E.push(`${m.code}.${k} non numérique`); }));
  ref.mo.forEach(m => ['brut', 'charges', 'eurKg'].forEach(k => { if (!num(m[k])) E.push(`${m.code}.${k} non numérique`); }));
  ref.intrants.forEach(i => { if (!num(i.prix)) E.push(`${i.id}.prix non numérique (utiliser null si inconnu)`); });
  const opCodes = new Set(ref.operations.map(o => o.code)), prof = new Set(ref.profils.map(p => p.id));
  Object.entries(ref.scenarios).forEach(([id, ls]) => {
    if (!prof.has(id)) E.push(`Scénario ${id} sans profil`);
    ls.forEach(l => { if (!opCodes.has(l.code)) E.push(`${id} : code inconnu ${l.code}`); if (!num(l.nb)) E.push(`${id}/${l.code} : nb non numérique`); });
  });
  const sansPrix = ref.intrants.filter(i => i.prix === null).length;
  if (sansPrix) A.push(`${sansPrix} intrants sans prix`);
  return { erreurs: E, avertissements: A };
}
module.exports = { validerReferentiel };
