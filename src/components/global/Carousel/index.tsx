import { Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ICarElement {
  category: string;
  catalogue: Array<any>;
  className?: string;
}


export default function Carousel({ category, catalogue, className="" }: ICarElement) {
  return (
    <div className='z-0 w-[80%] md:w-[90%] mx-auto'>
      <Swiper
      spaceBetween={50}
      slidesPerView={1}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{ clickable: true }}
      modules={[Pagination, A11y, Autoplay]}
    >

      {catalogue.map((element) => (
        <SwiperSlide key={element.nombre} className='card rounded-xl lg:card-side border border-current'>
          <figure>
            <img
              className={`${className} lg:h-[250px] lg:w-[300px]`}
              src={`/${category}/${element.referencial}`}
              alt={`${element.nombre}`}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {element.nombre}
            </h2>
            <p>{element.contenido}</p>
            <div className="card-actions">
              <div className="badge badge-outline">{element.precio}</div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
}
