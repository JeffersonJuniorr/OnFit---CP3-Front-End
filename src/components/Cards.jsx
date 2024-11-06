import React from 'react';

const Cards = ({ produtos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {produtos.map((produto) => (
        <div
          key={produto.id}
          className="bg-white p-4 shadow-lg rounded-lg text-center transform transition duration-300 hover:scale-105"
        >
          {/* Contêiner para garantir que a imagem tenha o fundo branco e o tamanho correto */}
          <div className="bg-white w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 flex items-center justify-center mb-4 rounded-md">
            <img
              src={produto.img}
              alt={produto.nome}
              className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80"
            />
          </div>
          <h3 className="text-xl font-semibold">{produto.nome}</h3>
          <p className="text-gray-500">{produto.preco}</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Adicionar ao Carrinho
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cards;
