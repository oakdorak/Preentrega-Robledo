import { useState, useEffect } from "react";
import React from "react";

const Menu = () => {
    const[producto, setProducto] = useState([])
    useEffect(() => {
        fetch('./products.json')
        .then(res => res.json())
        .then(prod => setProducto(prod))
    },[]);
    return (
        producto.map((prod) =>  <div>
            <div>
                Soy un {prod.title}
            </div>
            <div>
                <img src={prod.img} height='100' width='100' alt=''/>
            </div>
        </div> )
    )
}

export default Menu;