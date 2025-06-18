import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {

  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm items-start'>
            <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ad ducimus voluptatem aliquam. Temporibus iure unde ab molestias ipsa non totam a odio, fugit illum porro voluptates dolores sequi debitis.
            </p>
            </div>

        <div>
            <p className='text-xl font-medium mb-5'>EVİX</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Ana Sayfa</li>
                <li>Hakkımızda</li>
                <li>Teslimat</li>
                <li>Gizlilik Politikası</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>İLETİŞİME GEÇİN</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+90 539 289 73 77</li>
                <li>evixmobilya@gmail.com</li>
            </ul>
        </div>

    </div>

    <div>
        <hr />
        <p className='py-5 text-sm text-center'>officialemreozdemir@gmail.com | Tüm Hakları Saklıdır.</p>
    </div>

</div>
  )
}

export default Footer
