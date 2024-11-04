import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Carrossel = () => {
  const produtos = [
    { id: 1, nome: 'Roupa1', img: '/path/to/', preco: 'R$ 99,90' },
    { id: 2, nome: 'Roupa2', img: '/path/to/', preco: 'R$ 99,90' },
    { id: 3, nome: 'Roupa3', img: '/path/to/', preco: 'R$ 99,90' },
    { id: 4, nome: 'Roupa4', img: '/path/to/', preco: 'R$ 99,90' },
    // Adicione mais produtos conforme necessário
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Ofertas da Semana</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {produtos.map((produto) => (
          <SwiperSlide key={produto.id}>
            <div className="bg-white p-4 shadow-lg rounded-lg text-center">
              <img src={produto.img} alt={produto.nome} className="h-40 w-full object-cover mb-4" />
              <h3 className="text-xl font-semibold">{produto.nome}</h3>
              <p className="text-gray-500">{produto.preco}</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Comprar</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carrossel;
