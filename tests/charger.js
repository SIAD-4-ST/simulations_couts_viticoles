'use strict';
/* Charge le moteur depuis index.html (bloc <script id="moteur">) et le référentiel depuis data/.
 * Pas de build : les tests lisent exactement le code que le navigateur exécute. */
const fs = require('fs'), path = require('path'), vm = require('vm');
const racine = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(racine, 'index.html'), 'utf8');
const bloc = id => { const m = html.match(new RegExp(`<script id="${id}">([\\s\\S]*?)</script>`)); if (!m) throw new Error(`Bloc <script id="${id}"> introuvable dans index.html`); return m[1]; };
const ctx = vm.createContext({});
vm.runInContext(bloc('moteur') + '\n;this.Core = Core; this.CasValidation = CasValidation;', ctx, { filename: 'index.html#moteur' });
const fichierRef = path.join(racine, 'data', 'referentiel.js');
/* Copie fraîche à chaque appel : un test ne voit jamais les mutations d'un autre. */
const usine = () => { delete require.cache[require.resolve(fichierRef)]; return JSON.parse(JSON.stringify(require(fichierRef))); };
module.exports = { Core: ctx.Core, CV: ctx.CasValidation, OPTS: ctx.CasValidation.DEFAULT_OPTS, usine, html, bloc, racine };
