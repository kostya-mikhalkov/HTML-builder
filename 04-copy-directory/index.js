
const fs = require('fs');
const path = require('path');

if (!fs.existsSync('files-copy')) {
  fs.mkdirSync('files-copy');
}

fs.readdir('files', (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  for (let file of files) {
    let sourcePath = path.join('files', file);
    let destinationPath = path.join('files-copy', file);

    fs.access(sourcePath, fs.constants.R_OK, (err) => {
      if (err) {
        console.error(err);
        return;
      }

      fs.copyFile(sourcePath, destinationPath, (err) => {
        if (err) {
          console.error(err);
          return;
        }

        console.log(`Copied ${file} from files to files-copy`);
      });
    });
  }
});