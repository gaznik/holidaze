import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../../pages/Home';
import Profile from '../../pages/Profile';
import VenueDetail from '../../pages/VenueDetail';
import CreateVenue from '../../pages/CreateVenue';


function AppRouter() {
 return (
  
      <Routes>
         <Route path="/" element={<Home />} /> 
         <Route path="/profile" element={<Profile />} /> 
         <Route path="/venue/:id" element={VenueDetail} />
         <Route path="/create-venue" element={CreateVenue} />
      </Routes> 
   
 );
}


export default AppRouter;