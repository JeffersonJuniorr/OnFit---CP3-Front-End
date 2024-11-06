import React from 'react';
import Home from './routes/Home.jsx';
import Banner from './components/Banner.jsx';
import Carrossel from './components/Carrossel.jsx';
import Formulario from './routes/Formulario.jsx';
import Rodape from './components/Rodape.jsx';
import Cards from './components/Cards.jsx';
import Roupa1 from './assets/images/roupa1.jpg';
import Roupa2 from './assets/images/roupa2.jpg';
import Roupa3 from './assets/images/roupa3.jpg';
import Roupa4 from './assets/images/roupa4.jpg';

function App() {
  const produtos = [
    { id: 1, nome: 'Roupa1', img: Roupa1, preco: 'R$ 99,90', categoria: 'Roupas' },
    { id: 2, nome: 'Roupa2', img: Roupa2, preco: 'R$ 79,90', categoria: 'Roupas' },
    { id: 3, nome: 'Roupa3', img: Roupa3, preco: 'R$ 29,90', categoria: 'Roupas' },
    { id: 4, nome: 'Roupa4', img: Roupa4, preco: 'R$ 39,90', categoria: 'Roupas' },
  ];

  return (
    <div className='bg-gray-300'>
      <Home />
      <Banner />
      <Carrossel />
      <Cards produtos={produtos} /> {/* Passando os dados de produtos */}
      <Formulario />
      <Rodape />
    </div>
  );
}

export default App;


