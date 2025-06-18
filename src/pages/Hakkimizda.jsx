import React from 'react'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'
import { assets } from '../assets/assets'

const Hakkimizda = () => {



  return (
    <div>
        <div className='text-2xl text-center pt-8 border-t'>
            <Title text2={'HAKKIMIZDA'} />
        </div>

        <div className='my-10 flex flex-col md:flex-row gap-16'>
            <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
            <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati earum adipisci odit eaque minima molestias voluptates, laborum dicta a, vel est voluptatibus placeat id fugiat cum. Vero nesciunt nihil maiores!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod maiores odio labore beatae provident ipsam laborum. Asperiores perspiciatis maxime accusamus voluptatum, praesentium harum unde accusantium ducimus. Dolor eaque quae quos.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam harum, rerum cum ipsam blanditiis commodi quibusdam impedit corrupti placeat. Debitis ullam hic earum aliquid culpa fuga possimus voluptate consequuntur laboriosam?
                </p>
                <b className='text-gray-800'>Misyonumuz</b>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi error repellat rem aspernatur dolore dignissimos est eligendi voluptatibus? In vero enim officiis quis nulla obcaecati tempore excepturi minus adipisci fugiat.</p>
            </div>
        </div>

    <div className='text-xl py-4'>
        <Title text1={'NEDEN'} text2={'BİZ'} />
    </div>

    <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Kalite</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus perspiciatis commodi molestias est, illo quidem provident fugit, quis, distinctio totam cupiditate eos. Aut alias nulla doloremque, architecto eum blanditiis distinctio.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Hız</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus perspiciatis commodi molestias est, illo quidem provident fugit, quis, distinctio totam cupiditate eos. Aut alias nulla doloremque, architecto eum blanditiis distinctio.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Güven</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus perspiciatis commodi molestias est, illo quidem provident fugit, quis, distinctio totam cupiditate eos. Aut alias nulla doloremque, architecto eum blanditiis distinctio.</p>
        </div>
    </div>

    <NewsletterBox />

    </div>
  )
}

export default Hakkimizda
