import pretitleImg from '../public/img/hero/pretitle-img.svg';
import Header from './Header';
export default function Hero(){
  return(
    <section className='bg-crem lg:bg-hero lg:bg-cover lg:bg-no-repeat min-h-[400px] lg:min-h-[805px]'>
      <Header />
    </section>
  )
}