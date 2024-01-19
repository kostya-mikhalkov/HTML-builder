const fs = require('fs');
const path = require('path');
const readline = require('readline');

const filePath = path.join(__dirname, 'text.txt');
const writeStream = fs.createWriteStream(filePath, 'utf8');

const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});