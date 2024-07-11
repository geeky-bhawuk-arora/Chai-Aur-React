import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './Layout';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import './index.css';
import User from './components/User/User.jsx';
import Github, { githubInfoLoader } from './components/Github/Github.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       { path: "", element: <Home /> }, 
//       { path: "about", element: <About /> }
//     ]
//   }
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='user/:userid' element={<User />} />
      <Route
        loader={githubInfoLoader}
        path='github'
        element={<Github />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
