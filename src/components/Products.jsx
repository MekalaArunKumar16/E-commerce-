import React from 'react'
import ProductsCard from './ProductsCard'

const Products = ({Products}) => {
  return (
    <div className='py-10'>
        <div className='flex flex-col items-center gap-4'>
            <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>
                Shopping EveryDay
            </h1>
            <span className='w-20 h-[3px] bg-black'></span>
            <p className='max-w-[700px] text-gray-600 text-center'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus expedita aliquid omnis perferendis sit magnam recusandae cumque ab necessitatibus, dignissimos tempore. Maiores magni ad doloremque? Doloremque, exercitationem? Illum, mollitia reprehenderit?
            </p>   
        </div>
        <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10'>
            {
                Products.map((item)=>(
                    <ProductsCard key={item.id} product={item}/>
                ))
            }
        </div>
    </div>
  )
}

export default Products