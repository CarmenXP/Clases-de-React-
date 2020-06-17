import React from 'react';

function Title() {
    return(
        <div id= "main">
        <div id="icon">
            <img src= {require ("../images/iconfirefox.png")}  alt="FirefoxIcon"/>
        </div>
        <br/>
        <br/>
        <div id="text">
            <h1>Rápido y realmente <br></br> bueno.</h1>
            <p>Con el doble de velocidad, mejor protección de la privacidad, el nuevo <br></br> Firefox es la mejor manera de navegar. </p>
        </div>
        </div>
    )
    
}

export default Title

