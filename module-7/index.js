//local module
const {a,add} = require('./local-1');
const {a : a2,add : add2} = require('./local-2'); //name alias
// console.log(add(2,3),a);
// console.log(add2(2,3,4),a2);

//built in module
const path = require("path");
console.log(path.dirname('D:/Project/ProgrammingHero-Level2/module-7/index.js'))
console.log(path.parse('D:/Project/ProgrammingHero-Level2/module-7/index.js'))
console.log(path.join('D:/Project/ProgrammingHero-Level2/module-7/index.js','local-1.js'))