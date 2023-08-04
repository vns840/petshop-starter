import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css';
import Service1Icon from '../public/img/services/service-icon1.svg';
import Service2Icon from '../public/img/services/service-icon2.svg';
import Service3Icon from '../public/img/services/service-icon3.svg';
import Image from 'next/image';

const services = [
  {
    id: 1,
    image: Service1Icon,
    name: 'Pharmacy',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsum quis est rerum accusamus. Qui, soluta? Est quas facilis officia impedit distinctio eaque doloremque optio! Tempora ea corrupti cum accusamus?',
    btnText: 'Explore'
  },
  {
    id: 2,
    image: Service2Icon,
    name: 'Cloths',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsum quis est rerum accusamus.',
    btnText: 'Explore'
  },
  {
    id: 3,
    image: Service3Icon,
    name: 'Breed-specific Haircuts',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsum quis est rerum accusamus.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    btnText: 'Explore'
  },
];


export default function ServiceSlider(){
  return(
    <Swiper slidesPerView={1} spaceBetween={30} navigation={true} modules={[Navigation]} breakpoints={{
      768:{
        slidesPerView: 2,
      }
    }} className='serviceSlider min-h-[680px]'>
      {services.map((service,index) =>{
        return(
          <>
            <SwiperSlide className='border border-primary/20 bg-cream min-h-[560px] rounded-[66px] py-16 px-8' key={index} >
              <Image className='mb-9' src={service.image} alt='services' />
              <div className='text-[26px] font-medium mb-4'>{service.name}</div>
              <div className='text-[20px] mb-8'>{service.description}</div>
              <button className='btn btn-primary'>{service.btnText}</button>
            </SwiperSlide>
          </>
        )
      })}
    </Swiper>
  )
}