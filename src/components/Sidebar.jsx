import React from "react";

/* Components */
import Avatar from '../img/profile_picture.jpg'
import SocialNetworks from './SocialNetWorks'
import Information from './Information'
import Stats from './Stats'

/* Styles */
import '../styles/components/sidebar.sass'

const Sidebar = () => {
    return (
      <aside id="sidebar">
        <img src={Avatar} alt="Matheus Battisti" />
        <p className="title">Web Developer</p>
        <SocialNetworks />
        <Information />
        <Stats />
      </aside>
    );
  };
  
  export default Sidebar