import Image from 'next/image';
import Logo from '../public/img/header/logo.svg';
export default function Header(){
  return(
    <header className=' py-6 lg:absolute lg:w-full lg:left-0'>
      <div className='container mx-auto flex flex-col gap-y-6 lg:flex-row h-full justify-between items-center'>
        <a href='#'>
          <Image src={Logo} alt='' />
        </a>
        <nav className='text-xl flex gap-x-4 lg:gap-x-12'>
          <a href='#'>Services</a>
          <a href='#'>About</a>
          <a href='#'>Blog</a>
          <a href='#'>Contatc</a>
        </nav>
        <button className='btn btn-primary lg:btn-outline'>Sign in</button>
      </div>
    </header>
  )
}