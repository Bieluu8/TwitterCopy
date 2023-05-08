import React from "react";
import "./Css/Sidebar.css";
import brand from "./svg/twitter.svg";
import profile from "./svg/profile.svg";
import explore from "./svg/explore.svg"
import home from "./svg/home.svg";
import more from "./svg/more.svg";
import dots from "./svg/threedots.svg";
import { Link } from "react-router-dom";

function Sidebar() {

  return (
    <div className="sidebar">

      <div class="sidebar-logo"> <img src={brand} alt="brand" class="brand" /> </div>

      <div class="sidebar-menu">
        <Link to="/home" class="sidebar-menu-pad">
          <img src={home} alt="home" class="sidebar-menu__item-icon" /> Home
        </Link>
      </div>
      <div class="sidebar-menu">
        <Link to="/explore" class="sidebar-menu-pad">
          <img src={explore} alt="explore" class="sidebar-menu__item-icon" /> Explore
        </Link>
      </div>
      <div class="sidebar-menu">
        <Link to="/profile" class="sidebar-menu-pad">
          <img src={profile} alt="profile" class="sidebar-menu__item-icon" /> Profile
        </Link>
      </div>
      <div class="sidebar-menu">
        <div class="sidebar-menu-pad">
          <img src={more} alt="more" class="sidebar-menu__item-icon" /> More
        </div>
      </div>

      <div class="sidebar-menu">
        <button class="sidebar-button">Tweet 😎</button>
      </div>

      <div class="sidebar-profile">
        <img class="sidebar-avatar" src={localStorage.getItem('profileImage')} alt="avatar"/>
              <div class="sidebar-profile-content">
                  <div class="sidebar-username">
                    {localStorage.getItem('userName')}
                  </div>
                  <div class="sidebar-username-tag">
                    @{localStorage.getItem('userName')}123
                  </div>
                <img class="sidebar-profile-dots" src={dots} alt="threedots"/>
              </div>
      </div>

    </div>
  );
}
  
  export default Sidebar;
  