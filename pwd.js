function pwdCommand() {
    process.stdout.write(__dirname + '\n')
    process.stdout.write('prompt > ' );
}

module.exports = pwdCommand;
