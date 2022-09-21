import React from "react";
import styled from 'styled-components'
import Carrito from "../cart/CartWidget";

const Navbar = () => {
    return(
        <NavContainer>
            <h2>Robbit House</h2>
            <div>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Shop</a>
                <a href="/">Animations</a>
                <Carrito/>
            </div>
        </NavContainer>
        
    )
}

const NavContainer = styled.nav`
    h2{
        font weight: bold;
        color: #bbb47c;
        
    }

    svg{
        width: 35px;
        height: 35px;
    }
    a{
        color: #bbb47c;
        font weight: bold;
        justify-content: space-between;
        text-decoration: none;
        margin-right: 1rem;
    }
    padding: .4rem;
    background-color: #ddf4d0;
    display: flex;
    align-items: center;
    justify-content: space-between;`

export default Navbar;

