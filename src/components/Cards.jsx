import React from 'react';

const Cards = ({ produtos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {produtos.map((produto) => (
        <div
          key={produto.id}
          className="bg-white p-4 shadow-lg rounded-lg text-center transform transition duration-300 hover:scale-105"
        >
          <img
            src={produto.img}
            alt={produto.nome}
            className="h-40 w-full object-cover mb-4 rounded-md"
          />
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
