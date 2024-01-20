const fs = require('fs');
const path = require('path');
const readline = require('readline');

const filePath = path.join(__dirname, '02-write-file.txt');
const writeStream = fs.createWriteStream(filePath, 'utf8');

const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Hello my friend, enter text please');

readlineInterface.prompt();
readlineInterface.on('line', (item) => {
    if(item === 'exit') {
        console.log('Goodbye my friend!!!');
        readlineInterface.close();
        process.exit(0); // скрипт завершился без ошибок process - глобальный обьект можно использовать в любом модуле
    }
    writeStream.write(item);
    readlineInterface.prompt();
});