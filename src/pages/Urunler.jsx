import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { FaWhatsapp } from 'react-icons/fa';
import RelatedProducts from '../components/RelatedProducts';

const Urunler = () => {

    const {productId} = useParams();
    const {products, currency} = useContext(ShopContext);
    const [productData, setProductData] = useState(false);
    const [image, setImage] = useState('');

    const fetchProductData = async () => {
        products.map((item) => {
            if (item._id === productId) {
                setProductData(item)
                setImage(item.image[0]);
                console.log(item)
                return null;
            }
        })
    }

    useEffect(() => {
        fetchProductData();
    }, [productId])

  return productData ? (

    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
        {/* Product Data */}
        <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
            {/* Product Images */}
            <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
            <div className='grid grid-cols-4 sm:grid-cols-1 gap-2 max-h-[500px] overflow-y-auto w-full sm:w-[18.7%]'>
  {
    productData.image.map((item,index) => (
      <img
        onClick={() => setImage(item)}
        src={item}
        key={index}
        className='w-full cursor-pointer'
        alt=""
      />
    ))
  }
</div>

                <div className='w-full sm:w-[80%]'>
                    <img src={image} className='w-full h-auto' alt="" />
                </div>
            </div>


    {/* ------------Product Info------------ */}

    <div className='flex-1'>
        <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
        <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className='pl-2'>(122)</p>
        </div>
        <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
        <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>

        <p className='py-5'>Şuanda E Sipariş mevcut değildir. Satıcı ile görüşmek için aşağıdaki butona tıklamanız yeterlidir.</p>

        <button
          onClick={() =>
            window.open(
              'https://wa.me/905392897377?text=Merhaba,%20Ürünleriniz%20Hakkında%20Bilgi%20Almak%20İstiyorum.',
              '_blank'
            )
          }
          className='flex items-center gap-2 border border-green-600 text-green-600 px-8 py-4 text-sm rounded hover:bg-green-600 hover:text-white transition-all duration-500'
        >
          <FaWhatsapp className='text-lg' />
          WhatsApp ile Bilgi Al
        </button>
        <hr className='mt-8 sm:w-4/5'/>
        <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>%100 Orjinal üründür.</p>
            <p>Kolay iade ve değişim.</p>
            <p>Daha fazlası için takipte kalabilirsiniz.</p>
        </div>
    </div>
  </div>

  {/* --- Description and Review Section --- */}

<div className='mt-20'>
    <div className='flex'>
        <b className='border px-5 py-3 text-sm'>Açıklama</b>
        <p className='border px-5 py-3 text-sm'>İnceleme (122)</p>
    </div>
    <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius doloribus iusto earum distinctio, aperiam doloremque et velit accusantium. Fuga cum, reiciendis facere eum sapiente eligendi debitis distinctio incidunt? Corrupti, voluptates?

Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta distinctio, perferendis ipsa quidem blanditiis officiis assumenda suscipit et fugit ratione velit fuga corrupti sit. Facere quisquam tenetur dolorem quidem minus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure recusandae consequatur magni harum impedit, reprehenderit quas doloremque similique esse soluta dolore. Sapiente porro voluptatibus officia dolorem amet dolores quidem dignissimos.</p>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem culpa magni unde omnis aperiam voluptas dignissimos deleniti voluptate excepturi, tenetur facere iusto eaque perferendis placeat illum quas dolores repellat dolorem?</p>
    </div>
</div>

{/* --- Display Related Products --- */}

<RelatedProducts category={productData.category} subCategory={productData.subCategory} />

</div>

  ) : <div className='opacity-0'></div>
}

export default Urunler
