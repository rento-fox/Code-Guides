// React Router
    // To add React Router in your application,
    // run this in the terminal from the root directory of the application:
    //     npm i -D react-router-dom

    // Note: This tutorial uses React Router v6.
    // If you are upgrading from v5, you will need to use the @latest flag:
    //     npm i -D react-router-dom@latest

    // Folder Structure
    // To create an application with multiple page routes, let's first start with the file structure.
    // Within the src folder, we'll create a folder named pages with several files:
    // src\pages\:
    //     Layout.jsx
    //     Home.jsx
    //     Blogs.jsx
    //     Contact.jsx
    //     NoPage.jsx

    // Each file will contain a very basic React component.

    // Note: A working example in 'react-vite-js-app'

// Basic Usage
    // Now we will use our Router in our main.jsx file.
    // Use React Router to route to pages based on URL:
    // main.jsx:
        // import ReactDOM from "react-dom/client";
        // import { BrowserRouter, Routes, Route } from "react-router-dom";
        // import Layout from "./pages/Layout";
        // import Home from "./pages/Home";
        // import Blogs from "./pages/Blogs";
        // import Contact from "./pages/Contact";
        // import NoPage from "./pages/NoPage";
        // export default function App() {
        //     return (
        //         <BrowserRouter>
        //             <Routes>
        //                 <Route path="/" element={<Layout />}>
        //                 <Route index element={<Home />} />
        //                 <Route path="blogs" element={<Blogs />} />
        //                 <Route path="contact" element={<Contact />} />
        //                 <Route path="*" element={<NoPage />} />
        //                 </Route>
        //             </Routes>
        //         </BrowserRouter>
        //     );
        // }

// Example Explained
    // We wrap our content first with <BrowserRouter>.
    // Then we define our <Routes>. An application can have multiple <Routes>. Our basic example only uses one.
    // <Route>s can be nested. The first <Route> has a path of / and renders the Layout component.
    // The nested <Route>s inherit and add to the parent route.
    // So the blogs path is combined with the parent and becomes /blogs.
    
    // The Home component route does not have a path but has an index attribute.
    // That specifies this route as the default route for the parent route, which is /.
    // Setting the path to * will act as a catch-all for any undefined URLs. This is great for a 404 error page.

// Pages / Components
    // The Layout component has <Outlet> and <Link> elements.
    // The <Outlet> renders the current route selected.
    // <Link> is used to set the URL and keep track of browsing history.
    // Anytime we link to an internal path, we will use <Link> instead of <a href="">.
    // The "layout route" is a shared component that inserts common content on all pages, such as a navigation menu.

    // Layout.jsx:
        // import { Outlet, Link } from "react-router-dom";
        // const Layout = () => {
        //     return (
        //         <>
        //         <nav>
        //             <ul>
        //                 <li>
        //                     <Link to="/">Home</Link>
        //                 </li>
        //                 <li>
        //                     <Link to="/blogs">Blogs</Link>
        //                 </li>
        //                 <li>
        //                     <Link to="/contact">Contact</Link>
        //                 </li>
        //             </ul>
        //         </nav>
        //         <Outlet />
        //         </>
        //     )
        // };
        // export default Layout;

    // Home.jsx:
        // const Home = () => {
        //     return <h1>Home</h1>;
        // };
        // export default Home;

    // Blogs.jsx:
        // const Blogs = () => {
        //     return <h1>Blog Articles</h1>;
        // };
        // export default Blogs;

    // Contact.jsx:
        // const Contact = () => {
        //     return <h1>Contact Me</h1>;
        // };
        // export default Contact;

    // NoPage.jsx:
        // const NoPage = () => {
        //     return <h1>404</h1>;
        // };
        // export default NoPage;

// EOF
