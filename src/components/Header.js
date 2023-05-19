import React from "react";
import globe from '../images/globe2.png'
import '../styles/Header.css'
function Header(){
    return(
       <header className="header">  
                <img src = {globe} alt='globe' className="header--image"></img>
                <h3 className="header--title">my travel journal</h3>
       </header>

    )
}

export default Header;