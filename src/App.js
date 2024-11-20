import React from 'react';
import Navbar from './NavBar';  
import ItemListContainer from './ItemListContainer';

const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
    </>
  );
};

export default App;
