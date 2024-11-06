import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Carrossel = () => {
  const produtos = [
    { id: 1, nome: 'Roupa1', img: '/path/to/image1.jpg', preco: 'R$ 99,90' },
    { id: 2, nome: 'Roupa2', img: '/path/to/image2.jpg', preco: 'R$ 129,90' },
    { id: 3, nome: 'Roupa3', img: '/path/to/image3.jpg', preco: 'R$ 89,90' },
    { id: 4, nome: 'Roupa4', img: '/path/to/image4.jpg', preco: 'R$ 149,90' },
    // Adicione mais produtos conforme necessário
  ];

  return (
    <div className="w-full h-screen bg-gray-900 flex flex-col justify-center items-center p-6">
      <h2 className="text-4xl font-bold text-white mb-8">Ofertas da Semana</h2>
      
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
              <img src={produto.img} alt={produto.nome} className="w-full h-64 object-cover rounded-md mb-6" />
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
