import React from 'react';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div>
      <h1>Bem vindo a Home</h1>
      <Link to="/sobre">Sobre</Link>
    </div>
  );
}

export default Home;
