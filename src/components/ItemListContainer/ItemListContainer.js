import React, {useState,useEffect} from "react";
import data from "../Item/Products.json"
import styled from 'styled-components'


const ItemListContainer = () => {

    return (
    <ItemContainer>
        {data.map((gummy) => (<div>
            <h1 key={gummy.id}>{gummy.title}</h1> 
            <img src={gummy.img} alt=""></img>
            <p>{gummy.concentracion} - {gummy.precio}</p>
            </div>
    ))}
    </ItemContainer>
    )
}
      
const ItemContainer = styled.nav`
    h1{
        color: #a2c2a6;
        font weight: bold;
    }

    img{
        height: 150px;
        width: 150px
    }
    text-align: center;
    padding: .4rem;
    background-color: #f2ecaa;
    display: flex;
    align-items: center;
    justify-content: space-around;
    `
export default ItemListContainer

