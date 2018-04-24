let cmd; 


process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    cmd = data.toString().trim();
    if(cmd === 'pwd'){
        process.stdout.write(__dirname)
    }
    process.stdout.write('\n prompt > ' )
});