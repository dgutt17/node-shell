const fs = require('fs');

function lsCommand() {
    fs.readdir('./', 'utf8', (err, files) => {
        if (err === true) { throw err; }
        else {
            process.stdout.write(files.join('\n'));
            process.stdout.write('\nprompt > ' );
        }
    });

};

module.exports = lsCommand;