Creating A React + Vite + Ts App

    Vite (French word for "quick", pronounced "veet") is a build tool that aims
    to provide a faster and leaner development experience for modern web projects.
    It consists of two major parts:
        A dev server that provides rich feature enhancements over native ES modules,
            for example extremely fast Hot Module Replacement (HMR).
        A build command that bundles your code with Rollup,
            pre-configured to output highly optimized static assets for production.

    Vite requires Node.js version 18+ or 20+.
    However, some templates require a higher Node.js version to work,
    please upgrade if your package manager warns about it.

    Run this command to create a new React app with Vite:
    "npm create vite@latest <app/folder-name>"

    Output:
        npx
        > create-vite <app/folder-name>

        │
        ◆  Select a framework:
        │  ● Vanilla
        │  ○ Vue
        │  ○ React
        │  ○ Preact
        │  ○ Lit
        │  ○ Svelte
        │  ○ Solid
        │  ○ Qwik
        │  ○ Angular
        │  ○ Others

    After selecting a framework (React in this case):
        Select a framework:
        │  React
        │
        ◆  Select a variant:
        │  ○ TypeScript
        │  ○ TypeScript + SWC
        │  ○ JavaScript
        │  ○ JavaScript + SWC
        │  ● React Router v7 ↗ (npm create react-router@latest)

    After selecting TypeScript:
        Select a variant:
        │  TypeScript
        │
        ◇  Scaffolding project in C:\<path>\<app/folder-name>...
        │
        └  Done. Now run:

        cd <app/folder-name>
        npm install
        npm run dev

    To start the app, navigate to the project folder and run "npm run dev" in the terminal.
    Press the link (http://localhost:5173/) to open the page on the browser.

<br/>

Frameworks Explained (by ChatGPT):

    Vanilla (Plain HTML, CSS, and JavaScript)
        No framework – just pure JavaScript with Vite’s fast bundling.
        Ideal for small projects, prototyping, or when you don’t need React, Vue, or other frameworks.
        Choose this if:
            You just need a fast and minimal JavaScript setup.
            You’re building a simple project or experimenting.

    Vue (Vue.js)
        A progressive JavaScript framework focused on reactivity and a component-based structure.
        Uses Vue Single-File Components (SFCs) (.vue files). Works well for both small and large-scale apps.
        Choose this if:
            You prefer Vue.js over React.
            You like declarative UI with a simpler learning curve.

    React
        The most popular JavaScript library for building user interfaces.
        Uses a component-based approach with JSX. Strong ecosystem (Next.js, React Router, etc.).
        Choose this if:
            You’re building a React app.
            You need a huge ecosystem & community support.

    Preact
        A lightweight alternative to React (only 3KB vs. React’s 40KB).
        Uses the same API as React, so switching is easy. Faster than React,
        but lacks some features like context API & hooks.
        Choose this if:
            You need a React-like framework but smaller & faster.
            You’re building a performance-focused app.

    Lit
        A modern Web Components framework by Google. Uses standard HTML
        & JavaScript (no extra libraries). Very lightweight and fast (~5KB).
        Choose this if:
            You want native Web Components.
            You need a lightweight and framework-agnostic approach.

    Svelte
        A modern UI framework that compiles components into JavaScript at build time.
        No Virtual DOM, making it faster than React. Syntax is simpler than React & Vue.
        Choose this if:
            You want better performance than React/Vue.
            You prefer a simpler, more declarative syntax.

    Solid
        Super fast framework with fine-grained reactivity (better than React).
        Uses JSX, but does not use a Virtual DOM. Best performance of any JavaScript UI framework.
        Choose this if:
            You want better performance than React.
            You like JSX but want a better reactivity model.

    Qwik
        A high-performance framework focused on instant loading and resumability. Developed by
        Misko Hevery (creator of Angular). Perfect for low-latency web apps & SEO-heavy sites.
        Choose this if:
            You need ultra-fast performance & SEO optimization.
            You want a framework built for modern web performance.

    Angular
        A full-fledged frontend framework from Google.
        Uses TypeScript by default. Great for enterprise-grade applications.
        Choose this if:
            You prefer Angular over React/Vue.
            You’re building large-scale enterprise apps.

<br/>

Variants Explained (by ChatGPT):

    When you select React as your framework in Vite, the next step is to choose a variant.
    Each option represents a different way to set up your React project.
    Here's what each one means:

    TypeScript
        Uses TypeScript instead of JavaScript.
        TypeScript adds static types to JavaScript, making code safer and more maintainable.
        Ideal for large projects or when working in teams.
        Choose this if:
            You want better code safety & type checking.
            You're building a long-term project.

    TypeScript + SWC
        Same as TypeScript, but with SWC (Speedy Web Compiler) instead of Babel.
        SWC is much faster than Babel when compiling TypeScript.
        Improves build speed, making it ideal for large apps.
        Choose this if:
            You want TypeScript with faster builds.
            You’re working on a big React app.

    JavaScript
        Uses plain JavaScript (ES6+) instead of TypeScript.
        No need to write types (string, number, boolean, etc.).
        Simpler setup, better for small projects or quick prototypes.
        Choose this if:
            You don’t need TypeScript.
            You want faster development without type checking.

    JavaScript + SWC
        Same as JavaScript, but with SWC instead of Babel.
        Makes JS compilation faster, reducing build times.
        Great for large JavaScript projects that don’t use TypeScript.
        Choose this if:
            You want faster JavaScript builds.
            You're working on a big JavaScript app.

    React Router v7 (npm create react-router@latest)
        Pre-configured with React Router v7, the official way to handle client-side routing in React.
        Recommended for multi-page apps (MPAs) or Single-Page Apps (SPAs) with navigation.
        Instead of npm create vite@latest my-app, it runs:
            "npm create react-router@latest"
        Includes:
            React Router setup
            Basic routes pre-configured
        Choose this if:
            You need built-in navigation (e.g., /home, /about).
            You’re building a multi-page app (MPA) or single-page-app (SPA).

<br/>

Summary:

    -Framework-     -Best For-
    Vanilla         Simple projects, prototyping
    Vue             Easy-to-learn, reactivity-focused apps
    React           Large ecosystem, component-based UIs
    Preact          Lightweight React alternative
    Lit             Web Components, fast rendering
    Svelte          Best performance, no Virtual DOM
    Solid           Faster than React, best reactivity
    Qwik            Ultra-fast performance & SEO
    Angular         Enterprise apps, TypeScript

    For beginners: Choose React or Vue.
    For performance: Choose Svelte, Solid, or Qwik.
    For enterprise apps: Choose Angular.
    For lightweight projects: Choose Preact or Lit.

    -Variant-           -Best For-
    TypeScript          Large projects, type safety, maintainability
    TypeScript + SWC    Large TypeScript apps with faster builds
    JavaScript          Simple projects, quick prototyping
    JavaScript + SWC    Large JS apps with faster builds
    React Router v7     Apps that need client-side navigation

    For beginners: JavaScript (simpler, no setup needed).
    For best performance: TypeScript + SWC (faster builds).
    For routing/navigation: React Router v7.

EOF
