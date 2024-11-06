import descontoImg from '../assets/images/desconto.jpg';

const Banner = () => {
  return (
    <div className="w-full h-screen bg-gray-900 flex items-center justify-center">
      <div
        className="w-full sm:w-4/5 md:w-3/4 lg:w-3/4 p-6 bg-blue-500 text-white text-center bg-cover bg-center relative h-64 sm:h-80 md:h-96 lg:h-[500px]"
        style={{ backgroundImage: `url(${descontoImg})` }}
      >
        {/* Camada de sobreposição para escurecer a imagem */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        {/* Conteúdo do banner - Centralizando o texto */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-red-500">
          <h2 className="text-3xl">Desconto Especial da Semana</h2>
          <p>Compre agora e ganhe 50% de desconto!</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;




  