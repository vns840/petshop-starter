import {HiOutlineArrowNarrowRight} from 'react-icons/hi';
import DogImg from '../public/img/newsletter/dog.png';
import Image from 'next/image';

export default function Newsletter(){
  return(
    <section>
      <div className='h-[800px] flex flex-1 flex-col lg:flex-row  lg:h-[324px]'>
        <div className='bg-newsletterOrange bg-center bg-cover bg-no-repeat flex flex-1 flex-col justify-center h-full items-center px-8 lg:px-0'>
          <div>
            <h2 className='h2 mb-12'>Subcribe & Get Pet <br />Updatenews</h2>
            <div className='flex relative'>
              <input className='bg-transparent border-b-2 placeholder:text-white text-white outline-none absolute w-full pr-12' type="text"  placeholder='Mail'/>
              <HiOutlineArrowNarrowRight className='absolute top-0 right-0 text-white cursor-pointer' />
            </div>
          </div>
        </div>
        <div className='bg-newsletterYellow bg-center bg-no-repeat bg-cover flex-1 flex justify-center items-end h-full'>
          <Image src={DogImg} alt='dog' />
        </div>
      </div>
    </section>
  )
}