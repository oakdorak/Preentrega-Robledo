import React from "react";
import styled from 'styled-components'
import Carrito from "../Cart/CartWidget";
import { Link } from 'react-router-dom';
import conejelly from './conejelly.png'

const Navbar = () => {
    return(
        <NavContainer>
        <div>
            <h2>Robbit House</h2>
            <img src={conejelly} height="50" width="50"  alt="" />
        </div>
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
    div{
        display: flex;
        align-items: left;
    }
    a{
        color: #a2c2a6;
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

