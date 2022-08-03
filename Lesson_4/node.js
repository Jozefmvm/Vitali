
const fse = require('fs-extra');

fse.ensureDirSync('./firstFolder/');
fse.ensureFileSync('./firstFolder/text.txt');
fse.ensureDirSync('./secondFolder/');
fse.moveSync('./firstFolder/text.txt', './secondFolder/text.txt');
fse.ensureDirSync('./thirdFolder/');
fse.copySync('./secondFolder/text.txt', './thirdFolder/new_text.txt');
