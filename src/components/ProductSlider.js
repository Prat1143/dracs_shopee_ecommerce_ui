import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const ProductSlider = () => {
  const slides = [
    { id: 1, image: 'https://placehold.co/1200x400/3498db/FFFFFF?text=Summer+Collection', title: 'Summer Collection' },
    { id: 2, image: 'https://placehold.co/1200x400/e74c3c/FFFFFF?text=New+Arrivals', title: 'New Arrivals' },
    { id: 3, image: 'https://placehold.co/1200x400/2ecc71/FFFFFF?text=Best+Sellers', title: 'Best Sellers' },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      className="rounded-xl overflow-hidden shadow-lg"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="relative">
            <img src={slide.image} alt={slide.title} className="w-full h-[400px] object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              {/* <h2 className="text-4xl font-bold text-white">{slide.title}</h2> */}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSlider;