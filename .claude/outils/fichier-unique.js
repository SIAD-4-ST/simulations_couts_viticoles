'use strict';
/* Produit index-autonome.html : index.html avec data/referentiel.js intégré.
 * Utile pour publier l'outil en un seul fichier (artifact claude.ai, envoi par mail).
 * Le fichier produit n'est pas versionné (.gitignore) et ne doit pas être édité. */
const fs = require('fs'), path = require('path');
const racine = path.join(__dirname, '..', '..');
const html = fs.readFileSync(path.join(racine, 'index.html'), 'utf8');
const data = fs.readFileSync(path.join(racine, 'data', 'referentiel.js'), 'utf8').replace(/<\//g, '<\\/');
const balise = '<script src="data/referentiel.js"></script>';
if (!html.includes(balise)) { console.error('Balise de chargement des données introuvable dans index.html'); process.exit(1); }
const out = html.replace(balise, () => '<script>\n' + data + '</script>');
fs.writeFileSync(path.join(racine, 'index-autonome.html'), out);
console.log(`index-autonome.html — ${Math.round(out.length / 1024)} Ko`);
