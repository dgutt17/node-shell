let cmd; 
const pwdCommand = require('./pwd.js');
const lsCommand = require('./ls.js')

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    cmd = data.toString().trim();
    if(cmd === 'pwd'){ 
        pwdCommand();
    }
    else if (cmd === 'ls') { 
        lsCommand();
    }

    
});