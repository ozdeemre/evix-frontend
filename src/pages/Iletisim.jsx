import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import { FaWhatsapp } from 'react-icons/fa';
import NewsletterBox from '../components/NewsletterBox'

const Iletisim = () => {
  return (
    <div>

        <div className='text-center text-2xl pt-10 border-t'>
            <Title text1={'İLETİŞİME'} text2={'GEÇİN'} />
        </div>

        <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
            <img className='w-full md:max-w-[480px]' src={assets.ayens-3} alt="" />
            <div className='flex flex-col justify-center items-start gap-6'>
                <p className='font-semibold text-xl text-gray-600'>Mağzamız</p>
                <p className='text-gray-500'>6.Mobilya Sokak No : 35/A <br /> 16400 Bursa, İnegöl, Türkiye</p>
                <p className='text-gray-500'> Telefon: +90 539 289 73 77 <br /> Mail : evixmobilya@gmail.com </p>
                <p> Ürünlerimiz ve bizim hakkımızda daha detaylı bilgi için lütfen aşağıdaki butona tıklayınız. </p>
                <button
  onClick={() =>
    window.open(
      'https://wa.me/905392897377?text=Merhaba,%20ürünleriniz%20hakkında%20bilgi%20almak%20istiyorum.',
      '_blank'
    )
  }
  className='flex items-center gap-2 border border-green-600 text-green-600 px-8 py-4 text-sm rounded hover:bg-green-600 hover:text-white transition-all duration-500'
>
  <FaWhatsapp className='text-lg' />
  WhatsApp ile Bilgi Al
</button>
            </div>
        </div>

        <NewsletterBox />

    </div>
  )
}

export default Iletisim
