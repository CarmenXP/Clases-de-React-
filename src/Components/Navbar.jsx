import React from 'react';

function Navbar(){
    return(
<nav id='navigator'>
    <ul>
        <li><a href="#"><img src= {require ("../images/mozilla.png")} alt="IconMozilla"/></a></li>
        <li><a href="#">Firefox</a></li>
        <li><a href="#">Proyectos</a></li>
        <li><a href="#">Desarrolladores</a></li>
        <li><a href="#">Acerca de</a></li>
        <button id="CreateAccount">Consigue una Firefox Account</button>
        
    </ul>

</nav>
    )
}

export default Navbar