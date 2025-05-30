// Upgrade React
    // Upgrading an existing React application only requires two steps.

// Step 1: Install React
    // To install the latest version from your project folder,
    // run the following from the terminal:
        // npm i react@latest react-dom@latest

// Step 2: Use the new root API
    // In order to take advantage of React 18's concurrent features,
    // you'll need to use the new root API for client rendering.

    // Before
        import ReactDOM from 'react-dom';
        ReactDOM.render(<App />, document.getElementById('root'));

    // After
        import ReactDOM from 'react-dom/client';
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);

// Your application will work without using the new root API.
// If you continue to use ReactDOM.render your application will behave like React 17.

// EOF
