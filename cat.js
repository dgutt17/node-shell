const fs = require('fs');

function catCommand(fileName){
    fs.readFile(fileName,'utf8', (err, data) =>{
        if(err) throw err;
        else {
            process.stdout.write(data.toString())
            process.stdout.write('\nprompt > ');
        }
    })
}


module.exports = catCommand;