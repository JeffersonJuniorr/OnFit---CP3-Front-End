import Home from './routes/Home.jsx';
import Banner from './components/Banner.jsx';
import Carrossel from './components/Carrossel.jsx';
import Formulario from './routes/Formulario.jsx';
import Rodape from './components/Rodape.jsx';

function App() {
  return (
    <div className='bg-gray-300'>
      <Home />
      <Banner />
      <Carrossel />
      <Formulario />
      <Rodape/>
    </div>
  );
}

export default App;
