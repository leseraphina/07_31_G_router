import React from "react";
import {Link} from 'react-router-dom'
import './Nav.css'

function Nav(){
    return (
        <header>
            <h1>
               <Link to="/">Home</Link>
                </h1>
            <ul className="nav">
                <li><Link to="/list01">sample01</Link></li>
                <li><Link to="/list02">Sample02</Link></li>
                <li><Link to="/list03">sample03</Link></li>
            </ul>
        </header>
    )
}


export default Nav