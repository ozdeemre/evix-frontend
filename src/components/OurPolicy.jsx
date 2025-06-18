import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {

  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>

        <div>
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>Kolay Değişim Politikası</p>
            <p className='text-gray-400'>Diğer markalara nazaran kolay değişim politikamız ile öne çıkıyoruz.</p>
        </div>
        <div>
            <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>Yüksek Kaliteli Ürünler</p>
            <p className='text-gray-400'>Ürünlerimiz yüksek kalite standartları ile üretilip sizlere teslim edilmektedir.</p>
        </div>
        <div>
            <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>7/24 Destek Hizmeti</p>
            <p className='text-gray-400'>7 gün 24 saat telefon ve whattsap üzerinden bizlere ulaşabilirsiniz.</p>
        </div>

    </div>
  )
}

export default OurPolicy
