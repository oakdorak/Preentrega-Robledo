import React from "react";
import styled from 'styled-components'
import Carrito from "../Cart/CartWidget";
import { Link } from 'react-router-dom';


const Navbar = () => {
    return(
        <NavContainer>
            <h2>Robbit House</h2>
            <div>
             
        <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/menu'}>Gomitas</Link>
        </li>
            <Carrito/>
      </ul>

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

