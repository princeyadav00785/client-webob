import React,{useState} from 'react'

// import logo from '/home/prince/Documents/webob/src/logo.jpeg'
import Menu from "@material-ui/icons/Menu"
import Notification from "@material-ui/icons/Notifications"

import Search from "@material-ui/icons/Search"
import "./header.css";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";
import {Link} from "react-router-dom";
function Header() {

const {InputSearch , SetInputSearch} = useState(""); 

  return (
    <div className="header ">

      <div className='header_left'>
        <img className="menu_icon" src={Menu} alt="menuicon" />
        <Link to ="/">
        <img className="logo" src={Menu} alt="logo" srcset="" />
        </Link>
      </div>


      <div className="header_input"><input onChange={e=>SetInputSearch(e.target.value)} value = {InputSearch} className='SearchArea' type="text" placeholder='Search' name="" id="" />
        <Link to = {'/search/${InputSearch}' }> 
        <Search className='header_inputButton' />
        </Link>
      </div>


      <div className='header_icons'>
        <AppsIcon />
        <Notification />
        <Avatar alt="Prince Yadav" src="/home/prince/Documents/webob/src/logo.jpeg" />
      </div>


    </div>
  );
}

export default Header