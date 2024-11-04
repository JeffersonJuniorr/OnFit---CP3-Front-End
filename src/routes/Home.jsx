const Home = () => {
    return (
      <header className="flex justify-between items-center p-4 bg-gray-900 text-white">
        <h1 className="text-2xl">OnFit</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#produtos">Produtos</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </header>
    );
  };
  export default Home;
  