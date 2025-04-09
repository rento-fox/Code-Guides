Last Updated: 09.04.2025


<br/>

tsconfig.json-file

    To create a 'tsconfig.json' file, run command:
        tsc -init

    In /* Language and Environment */ settings:
        Change: "target": "es2016",
        To:     "target": "ESNext",

<br/>

Installing TypeScript

    Install TypeScript by running command:
        npm install -g typescript

    Check TypeScript version by running command:
        tsc --version

<br/>

Transpiling And Running TypeScript:

    In the VS Code terminal, navigate to the directory where your files are located.

    To transpile a TypeScript file into a JavaScript file, run command:
        tsc

    Then, to run the transpiled JavaScript file, run command:
        node '.\filename.js'

    To run a TypeScript file without transpiling, run the command:
        ts-node '.\filename.ts'

    If you are transpiling TypeScript files into JavaScript, then:
        In /* Emit */ settings:
            Change: // "outDir": "./",
            To:     "outDir": "./dist",
            (Uncomment it and add 'dist'. Transpiled JavaScript files will go into the 'dist' folder.)

            Change: // "noEmitOnError": true,
            To:     "noEmitOnError": true,
            (Uncomment it, good practice)

<br/>

EOF
