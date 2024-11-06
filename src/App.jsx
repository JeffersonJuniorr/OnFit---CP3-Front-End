import React from 'react';
import Home from './routes/Home.jsx';
import Banner from './components/Banner.jsx';
import Carrossel from './components/Carrossel.jsx';
import Formulario from './routes/Formulario.jsx';
import Rodape from './components/Rodape.jsx';
import Cards from './components/Cards.jsx';

function App() {
  const produtos = [
    { id: 1, nome: 'Roupa1', img: '/path/to/image1.jpg', preco: 'R$ 99,90', categoria: 'Roupas' },
    { id: 2, nome: 'Roupa2', img: '/path/to/image2.jpg', preco: 'R$ 79,90', categoria: 'Roupas' },
    { id: 3, nome: 'Acessório1', img: '/path/to/image3.jpg', preco: 'R$ 29,90', categoria: 'Acessórios' },
    { id: 4, nome: 'Acessório2', img: '/path/to/image4.jpg', preco: 'R$ 39,90', categoria: 'Acessórios' },
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

