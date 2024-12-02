import React from 'react'
import Image1 from '../../assets/category/earphone.png'
 import Image2 from '../../assets/category/watch.png'
 import Image3 from '../../assets/category/macbook.png'
 
import Button from '../shared/Button'
const Category = () => {
  return (
    <div className='py-8'>
        <div className='container'>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* First column */}
       <div className='py-10 pl-5 bg-gradient-to-br from-black 90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end'>
<div className='mb-4'>
  <div>
    <p className='mb-[2px] text-gray-400'>Enjoy</p>
    <p className='text-2xl font-semibold mb-[2px]'>With</p>
    <p className='text-4xl xl:text-5xl font-bold opacity-30 mb-2'>Earphone</p>
    <Button text="Browse"
    bgColor={"bg-primary"}
    textColor={"text-white"}
    />
      
    
  </div>
</div>
<img src={Image1}
className='w-[320px] absolute top-0 pl-[30px] h-[330px]'
/>
       </div>
            {/* second column */}
            <div className='py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/90 text-white rounded-3xl relative h-[320px] flex items-end'>
<div className='mb-4'>
  <div>
    <p className='mb-[2px] text-white'>Enjoy</p>
    <p className='text-2xl font-semibold mb-[2px]'>With</p>
    <p className='text-4xl xl:text-5xl font-bold opacity-70 mb-2'> Watch</p>
    <Button text="Browse"
    bgColor={"bg-white"}
    textColor={"text-brandYellow"}
    />
      
    
  </div>
</div>
<img src={Image2}
className='w-[340px] absolute top-0 pl-[30px] h-[280px]  pt-[40px]'
/>
       </div>
            {/* third column */}
            <div className='sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end'>
<div>
  <div className=' mb-4'>
    <p className=' text-gray-200'>Enjoy</p>
    <p className='text-2xl font-semibold mb-[2px]'>With</p>
    <p className='text-4xl xl:text-5xl font-bold opacity-60 '>Laptop</p>
    <Button text="Browse"
    bgColor={"bg-white"}
    textColor={"text-primary"}
    />
      
    
  </div>
</div>
<img src={Image3}
className='w-[320px] absolute top-1/2  -translate-y-1/2 -right-0'
/>
       </div>
       {/* fourth column */}
       {/* <div className='py-10 pl-5 bg-gradient-to-br from-black 30 to-brandBlue/80 text-white rounded-3xl relative h-[320px] flex items-end'>
<div className='mb-4'>
  <div>
    <p className='mb-[2px] text-gray-400'>Enjoy</p>
    <p className='text-2xl font-semibold mb-[2px]'>With</p>
    <p className='text-4xl xl:text-5xl font-bold opacity-50 mb-2'>IPhone</p>
    <Button text="Browse"
    bgColor={"bg-primary"}
    textColor={"text-white"}
    />
      
    
  </div>
</div>
<img src={Image4}
className='w-[320px] absolute top-0 pl-[50px] h-[200px] pt-[20px]'
/>
       </div> */}
          </div>
        </div>
    </div>
  )
}

export default Category
