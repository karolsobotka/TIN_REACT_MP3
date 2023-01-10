import React from 'react';
import {Link} from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Strona Główna</Link></li> 
                <li><Link to="/cars">Auta</Link></li> 
                <li><Link to="/employees">Mechanicy</Link></li>
                <li><Link to="/repairs">Naprawy</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation