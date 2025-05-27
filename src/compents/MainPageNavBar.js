import React from "react";
import { Link } from "react-router-dom";
import './NavBarStyles.css'; // Make sure to style your buttons here

function MainNavbar(){
   return( 
   <div className="navbar">
      <Link to="/" className="nav-button">Home</Link>
      <Link to="/page1" className="nav-button">Things to Read About Me</Link>
       <Link to="/page3" className="nav-button">Plant Page</Link>
   </div>
   );
}

export default MainNavbar;
