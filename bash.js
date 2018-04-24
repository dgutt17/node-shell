let cmd; 
const pwdCommand = require('./pwd.js');
const lsCommand = require('./ls.js')
const catCommand = require('./cat.js')

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    cmd = data.toString().trim();
    if(cmd === 'pwd'){ 
        pwdCommand();
    }
    else if (cmd === 'ls') { 
        lsCommand();
    }
    else if (cmd.slice(0, 3) === 'cat') {
        process.stdout.write(catCommand(cmd.slice(4)));
        // process.stdin.on('fileName', (fileName) =>{
        //     console.log(fileName);
        //     return catCommand(fileName);
        // }) 
    }
});