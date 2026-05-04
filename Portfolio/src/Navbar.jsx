import { useState } from "react";
import "./Navbar.css"
import { FaBars, FaTimes } from "react-icons/fa";
export default function Navbar(){
    const [open,setOpen]=useState(false);
    return(
        <nav className="Navbar">
            <div className="logo">Portfolio</div>
             
         <div className={open?"nav-links active":"nav-links"}>
          
           <a href="#">Home</a>
          <a href="#">project</a>
           <a href="#">About</a>
            <a href="#">Contact Us</a>
            </div>
            <div className="hamburger" onClick={() => setOpen(!open)}>
       {open?"X": "☰"}
      </div>
        </nav>
    );
}