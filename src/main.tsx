import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import App from './App.tsx'
import './index.css'
import { Suspense, lazy } from "react";

import NotFound from "./screens/notFound";
import Loader from './components/loader/loader.tsx';

// const Page1= lazy(() =>
//   wait(1300).then(() => import("./screens/OtherOffice.tsx"))
// );

// const Page2= lazy(() =>
//   wait(1300).then(() => import("./screens/MayorsOffice.tsx"))
// );


const Mayor = lazy(() =>
  wait(1300).then(() => import("./mayor.tsx"))
);

const router = createBrowserRouter([
  {
    path: "/ereadiness/",
    element: <App />,
    
    children: [
      {
        path: "/ereadiness/", 
        element: <Navigate to="/ereadiness/mayor" />, 
      },
      {
        path: "/ereadiness/mayor",
        element: <>
        <Suspense fallback={<Loader />}>
          <Mayor />
        </Suspense>
      </>,
      },
      // {
      //   path: "/react-vite-supreme/page2",
      //   element: <>
      //   <Suspense fallback={<Loader />}>
      //     <Page2 />
      //   </Suspense>
      // </>,
      // },



      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function wait( time:number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
