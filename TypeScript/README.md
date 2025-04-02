    To create a 'tsconfig.json' file, run command:
        tsc -init

    In /* Language and Environment */ settings:
        Change: "target": "es2016",
        To:     "target": "ESNext",

    Transpiling and running TypeScript:
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

    Check the version of TypeScript installed on your system:
        Run the following command in your terminal or command prompt:
            tsc --version

        If TypeScript is not installed globally, you'll get an error, and you'll need to install it first using:
            npm install -g typescript

<br/>

Last Updated: 02.04.2025

EOF
