const fs = require('fs');
const path = require('path');
const dirent = require('dirent');

const folderPath = path.join(__dirname, '03-files-in-folder', 'secret-folder');

function fileInfo(file) {
    const fileName = path.basename(file.name);
    const fileText = path.extname(file.name);
    const fileSize = fs.statSync(file).size;
    console.log(fileName + '-' + fileText + '-' + fileSize);
}

function handleError(err) {
    console.log(err.message);
}

fs.readdir(folderPath, {withFileTypes: true}, (err, file) => {
    if(err) {
        handleError(err);
        return;
    }
    fileInfo(file);
    return;
});