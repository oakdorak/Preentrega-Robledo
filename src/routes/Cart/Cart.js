import React from 'react';
import styled from 'styled-components';

const Cart = () => {
  return <CartContainer>
  <div>Soy un carrito
  </div>;

  </CartContainer>
  
};

const CartContainer = styled.nav`
  img{
    position: relative;
  }
  {
    font-weight: bold;
    color: #a2c2a6;
}
    text-align: center;
    background-color: #f2ecaa;
    display: flex;
    align-items: left;
    justify-content: space-between;
    position: absolute;
    `

export default Cart;