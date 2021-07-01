import React from 'react'
import {Link} from "react-router-dom";

function Navbar() {
   
    return (
        <nav className="navbar"> 

        <span className="nav-title-span">  <h2 className="nav-title"> Notes App</h2>  </span>
        
        <ul>  
                <Link to='/'>
            <li> Home</li>
               </Link>
                     
                     <Link to="/add"> 
                <li> Add Note </li>
                     </Link>
        </ul>
        </nav>
    )
}

export default Navbar;
