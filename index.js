const fs = require('fs');

const genVarDef = d => Object.keys(d).reduce((r, k) => r+=`const ${k}=${JSON.stringify(d[k])};`, '');
const readTemplate = name => fs.readFileSync(name, 'utf-8');

module.exports = (filename, data) => Function(genVarDef(data) + 'return `' + readTemplate(filename) + '`')();
