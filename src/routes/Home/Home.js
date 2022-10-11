import React from 'react';
import styled from 'styled-components';
import robbit from './robbit.png'

const Home = () => {
  return <HomeContainer>
  <div>Bienvenido a un mundo lleno de gomitas!
  <p>Aqui tendre lo que hará tu sueño realidad, espero lo disfrutes :D</p>
  </div>;
  <img src={robbit} height='500vp' width='500vp' alt=''/>;

  </HomeContainer>
  
};

const HomeContainer = styled.nav`
  {
    font-weight: bold;
    color: #a2c2a6;
}
    text-align: center;
    background-color: #f2ecaa;
    display: flex;
    align-items: right;
    justify-content: space-around;
    `

export default Home;
