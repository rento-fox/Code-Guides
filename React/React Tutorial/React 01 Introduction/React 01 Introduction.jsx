// What is React?
    // React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.
    // React is a tool for building UI components. React is used to build single-page applications.
    // React allows us to create reusable UI components.

// How does React Work?
    // React creates a VIRTUAL DOM in memory.
    // Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory,
    // where it does all the necessary manipulating, before making the changes in the browser DOM.
    // React only changes what needs to be changed!
    // React finds out what changes have been made, and changes only what needs to be changed.
    // You will learn the various aspects of how React does this in the rest of this tutorial.

// What You Should Already Know
    // Before starting with React.JS, you should have intermediate experience in:
    //     HTML
    //     CSS
    //     JavaScript
    // You should also have some experience with the new JavaScript features introduced in ECMAScript 6 (ES6),
    // you will learn about them in the React ES6 chapter.

// React Development Tools and Frameworks:
    // 1. Vite (Best for Speed & Simplicity)
        // Best for: Small to medium projects, SPAs, and general React apps
        // Pros:
        //     Super fast development server
        //     Instant hot module replacement (HMR)
        //     Lightweight and easy to configure
        //     Works great with TypeScript, Tailwind, and modern libraries
        //     Recommended if you just want a fast, modern replacement for CRA
        // Install:
            // npm create vite@latest my-app --template react
            // cd my-app
            // npm install
            // npm run dev

    // 2. Next.js (Best for SEO & Full-Stack Apps)
        // Best for: Production-ready React apps, SEO-friendly websites, SSR (Server-Side Rendering), Static Sites
        // Pros:
        //     SSR (Server-Side Rendering) & SSG (Static Site Generation) built-in
        //     Great for SEO & performance
        //     Built-in API routes (backend + frontend in one project)
        //     Image optimization, automatic routing, and caching
        //     Recommended if you're building a scalable, SEO-friendly, or full-stack app
        // Install:
            // npx create-next-app@latest my-app
            // cd my-app
            // npm run dev

    // 3. React Router (Best for Client-Side Routing)
        // Best for: Single Page Applications (SPAs) where you handle your own build tools
        // Pros:
        //     Flexible client-side routing
        //     No opinionated build system (use with Vite, Webpack, etc.)
        //     Recommended if you just need routing and don’t want a full framework
        // Use with Vite:
            // npm create vite@latest my-app --template react
            // cd my-app
            // npm install react-router-dom
            // npm run dev

    // 4. Expo (Best for React Native & Hybrid Apps)
        // Best for: React Native mobile apps, PWAs, hybrid web + mobile projects
        // Pros:
        //     Great for mobile-first development
        //     Works with web & native platforms
        //     Recommended if you're building a mobile app with React
        // Install:
            // npx create-expo-app my-app
            // cd my-app
            // npm start

    // 5. Parcel (Best for Zero-Config Bundling)
        // Best for: Projects that need a zero-config, simple bundler alternative
        // Pros:
        //     Zero configuration
        //     Automatic code splitting & optimizations
        //     Recommended if you want an easy, hassle-free bundler
        // Install:
            // npm install -g parcel-bundler
            // parcel index.html

    // Which One Should You Choose?
    //     For general React apps → Vite
    //     For full-stack, SEO-friendly apps → Next.js
    //     For SPAs & routing → React Router (with Vite)
    //     For React Native or mobile-first apps → Expo
    //     For a simple, zero-config bundler → Parcel

    // Best all-around option? Vite or Next.js, depending on your needs!

// React.JS History
    // Current version of React.JS is V18.0.0 (April 2022).
    // Initial Release to the Public (V0.3.0) was in July 2013.
    // React.JS was first used in 2011 for Facebook's Newsfeed feature.
    // Facebook Software Engineer, Jordan Walke, created it.
    // Current version of create-react-app is v5.0.1 (April 2022).
    // create-react-app includes built tools such as webpack, Babel, and ESLint.

// EOF
