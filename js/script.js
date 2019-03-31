process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    // tutaj treść tego co ma się wykonać w momencie odczytania wejścia.
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    //Nasza aplikacja spodziewa się na wyjściu tylko postaci tekstowej (string), ale jako że nie otrzymuje niczego, 
    //to próbuje wyświetlić nam na wyjściu wartość null. Musimy zabezpieczyć się przed takim działaniem opakowując funkcję
    // odczytu instrukcją warunkową sprawdzającą, czy na wejściu cokolwiek istnieje.
    if (input !== null) {
        // teraz jest sens cokolwiek wyświetlać :)
        var instruction = input.toString().trim(); // Pozbywamy sie spacji
        switch (instruction) {
            case '/exit':
            {
                process.stdout.write('Quitting app!\n');
                console.log('Node version  ' +  process.versions.node);
                const env = process.env;
                const language = env.LANG || env.LANGUAGE || env.LC_ALL || env.LC_MESSAGES;
                console.log('User system language ' + language);
                process.exit();
            }
            default:
            {
                process.stderr.write('Wrong instruction!\n');
                console.log('Node version ' + process.versions.node);
                const env = process.env;
                const language = env.LANG || env.LANGUAGE || env.LC_ALL || env.LC_MESSAGES;
                console.log('User system language ' + language);
            }
          }          
        }
});
