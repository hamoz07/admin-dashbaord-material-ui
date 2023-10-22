import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MiniDrawer from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Teams  from './scenes/teams/teams'
import Dashboard  from './scenes/dashboard/dashboard'
import Contacts from "./scenes/contacts/contacts";
import Invoices from "./scenes/invoices/invoices";
import NewUser from "./scenes/new-user/newUser";
import Accordioner from "./scenes/accordion/accordion";
import CalenderTodoList from "./scenes/CalenderTodoList/CalenderTodoList.jsx";
import ChartBar from "./scenes/ChartBar/ChartBar.jsx";
import PieChart from "./scenes/piechart/piechart.jsx";
import LineChart from "./scenes/lineChart/lineChart";
import Geo from "./scenes/geo/Geo";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MiniDrawer />}>
     <Route index element={<Dashboard />}/>
     <Route path="team" element={<Teams />}/>
     <Route path="contacts" element={<Contacts />}/>
     <Route path="invoices" element={<Invoices />}/>
     <Route path="form" element={<NewUser />}/>
     <Route path="calendar" element={<CalenderTodoList/>}/>
     <Route path="faq" element={<Accordioner />}/>
     <Route path="bar" element={<ChartBar />}/>
     <Route path="pie" element={<PieChart />}/>
     <Route path="line" element={<LineChart />}/>
     <Route path="geography" element={<Geo />}/>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
