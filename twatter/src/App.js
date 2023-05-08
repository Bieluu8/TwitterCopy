import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import WidgetsMain from "./Widgets-main";
import WidgetsExplore from './Widgets-explore'
import WidgetsProfile from './Widgets-profile'
import Explore from './Explore';
import Profile from './Profile'
import "./Css/App.css";
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Main />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/profile" element={<Profile />} />
      </Routes> 
      <Routes>
        <Route path="/" element={<WidgetsMain />} />
        <Route path="/home" element={<WidgetsMain />} />
        <Route path="/explore" element={<WidgetsExplore />} />
        <Route path="/profile" element={<WidgetsProfile />} />
      </Routes>
    </div>
  );
}

export default App;
