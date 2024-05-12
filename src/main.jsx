import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Artist from './pages/Artist.jsx';
import Ticket from './pages/Ticket.jsx';
import About from './pages/About.jsx';
import Schedule from './pages/Schedule.jsx';
import JadiPartner from './pages/JadiPartner.jsx';
import AppsPromotion from './pages/AppsPromotion.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/Schedule",
    element: <Schedule />,
  },
  {
    path: "/artist",
    element: <Artist />,
  },
  {
    path: "/ticket",
    element: <Ticket />,
  },
  {
    path: "/jadipartner",
    element: <JadiPartner />,
  },
  {
    path: "/promotions",
    element: <AppsPromotion />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
