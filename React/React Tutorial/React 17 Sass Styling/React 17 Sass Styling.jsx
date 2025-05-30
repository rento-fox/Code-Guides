// Styling React Using Sass
    // Sass is a CSS pre-processor.
    // Sass files are executed on the server and sends CSS to the browser.

// Can I use Sass?
    // Install Sass by running this command in your terminal:
    //     npm i sass
    // Now you are ready to include Sass files in your project!

    // Note: A working example in 'react-vite-js-app'

    // Create a Sass file
        // Create a Sass file the same way as you create CSS files,
        // but Sass files have the file extension .scss
        // In Sass files you can use variables and other Sass functions:
            // my-sass.scss:
            // Create a variable to define the color of the text:
                // $myColor: red;
                // h1 {
                //     color: $myColor;
                // }

        // Import the Sass file the same way as you imported a CSS file:
            // index.js:
                // import React from 'react';
                // import ReactDOM from 'react-dom/client';
                // import './my-sass.scss';
                // const Header = () => {
                //     return (
                //         <>
                //         <h1>Hello Style!</h1>
                //         <p>Add a little style!.</p>
                //         </>
                //     );
                // }
                // const root = ReactDOM.createRoot(document.getElementById('root'));
                // root.render(<Header />);

// EOF
