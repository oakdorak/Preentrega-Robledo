import { faCannabis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React from "react";

const Carrito = () => {
    
    return(<div>
        <FontAwesomeIcon icon={faCannabis} color='#a2c2a6' />
        <Link to={`/cart`}></Link>
    </div>
    )
}

export default Carrito;