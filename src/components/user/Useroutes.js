import React from 'react'
import { useRoutes } from 'react-router-dom';
import About from './About';
import Dashboard from './Dashboard';
import DashboardMessages from './DashboardMessages';
import Dashboardtask from './Dashboardtask';

const Useroutes = () => {
    let element = useRoutes([
        {
          path: "dashboard",
          element: <Dashboard />,
          children: [
            {
              path: "dasmsg",
              element: <DashboardMessages />,
            },
            { path: "dastask", element: <Dashboardtask /> },
          ],
        },
        { path: "about", element: <About /> },
      ]);
    
      return element;
}

export default Useroutes