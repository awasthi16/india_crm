import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Body from './Body'

import Messege from './Components/Messege'
import Feed from './Components/Feed'
import Collabs from './Components/Collabs'
import Calender from './Components/Calender'
import OnlineDocument from './Components/OnlineDocument'
import Board from './Components/Board'
import Drive from './Components/Drive'
import Webmail from './Components/Webmail'
import Workgroup from './Components/Workgroup'
import TaskandProject from './Components/TaskandProject'
import CRM from './Components/CRM'
import Booking from './Components/Booking'
import InventoryManagement from './Components/InventoryManagement'
import Marketing from './Components/Marketing'
import SitesandStores from './Components/SitesandStores'
import EsignatureforHR from './Components/EsignatureforHR'
import Esignature from './Components/Esignature'
import Builder from './Components/Builder'
import Employees from './Components/Employees'
import Automation from './Components/Automation'
import ApplicationMarketing from './Components/ApplicationMarketing'
import DeveloperResources from './Components/DeveloperResources'
import Subscription from './Components/Subscription'
import Login from './Login'
import PrivateComponent from './PrivateComponent'


const App = () => {
  return (
    <>

      <BrowserRouter>
      
      <Body/>

        <Routes>

    {/* Public Route */}
    <Route path="/login" element={<Login />} />

    {/* Protected Routes */}
    <Route element={<PrivateComponent />}>
      
        <Route path="/" element={<Messege />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/collabs" element={<Collabs />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/onlinedocument" element={<OnlineDocument />} />
        <Route path="/board" element={<Board />} />
        <Route path="/drive" element={<Drive />} />
        <Route path="/workgroups" element={<Workgroup />} />
        <Route path="/crm" element={<CRM />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/sitesandstores" element={<SitesandStores />} />
        <Route path="/e-signature-hr" element={<EsignatureforHR />} />
        <Route path="/e-signature" element={<Esignature />} />
        <Route path="/tasks and projects" element={<TaskandProject/>}/>
        <Route path="/bi-builder" element={<Builder />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/automation" element={<Automation />} />
        <Route path="/application-marketing" element={<ApplicationMarketing />} />
        <Route path="/developer-resources" element={<DeveloperResources />} />
        <Route path="/subscription" element={<Subscription />} />

    </Route>

  </Routes>


      </BrowserRouter>

    </>

  )
}

export default App