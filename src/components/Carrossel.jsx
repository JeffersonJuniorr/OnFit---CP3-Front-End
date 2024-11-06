import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Roupa1 from "../assets/images/roupa1.jpg";
import Roupa2 from "../assets/images/roupa2.jpg";
import Roupa3 from "../assets/images/roupa3.jpg";
import Roupa4 from "../assets/images/roupa4.jpg";


const Carrossel = () => {
  const produtos = [
    { id: 1, nome: 'Roupa1', img: Roupa1, preco: 'R$ 99,90' },
    { id: 2, nome: 'Roupa2', img: Roupa2, preco: 'R$ 129,90' },
    { id: 3, nome: 'Roupa3', img: Roupa3, preco: 'R$ 89,90' },
    { id: 4, nome: 'Roupa4', img: Roupa4, preco: 'R$ 149,90' },
  ];

  return (
    <div className="w-full h-screen bg-gray-900 flex flex-col justify-center items-center p-6">
      <h2 className="text-4xl font-bold text-white mb-8">Roupas da Semana</h2>
      
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full max-w-screen-xl"
      >
        {produtos.map((produto) => (
          <SwiperSlide key={produto.id}>
            <div className="bg-white p-6 rounded-lg shadow-xl flex flex-col items-center">
              <img src={produto.img} alt={produto.nome} className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80" />
              <h3 className="text-2xl font-semibold text-gray-800">{produto.nome}</h3>
              <p className="text-xl font-medium text-gray-600 mb-4">{produto.preco}</p>
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">
                Comprar
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carrossel;
