import { useState, useEffect } from "react";
import React from "react";
import styled from "styled-components";

const Menu = () => {
    const[productos, setProducto] = useState([])
    useEffect(() => {
        fetch('https://upcdn.io/12a1xqt/raw/products-7Dmy.json')
        .then(res => res.json())
        .then(prod => setProducto(prod))
    },[]);

    return (
        productos.map((prod) =>
    <ItemContainer>
    <div className="card" key={prod.id}>
            <h1> Gomita de {prod.title}</h1><br></br>
                <img src={prod.img} height='100' width='100' alt="" /><br></br>
           <p>{prod.concentracion} - ${prod.precio}</p>
           <button>más info</button>
    </div>
    </ItemContainer>
        )    )
}

const ItemContainer = styled.nav`
    .card{
        box-shadow: 0 0 10px 5px;
        border-radius: $radius;
        min-width:16rem;
    }
    *{
    max-width: 18rem;
    font-weight: bold;
    color: #a2c2a6;
    text-align: center;
    background-color: #f2ecaa;
}
    `

export default Menu;