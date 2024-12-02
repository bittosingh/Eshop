import React from 'react'
import Heading from '../shared/Heading'
import ProductCard from './ProductCard'
//images import

import Img1 from '../../assets/product/headphone1.avif'
import Img2 from '../../assets/product/smartwatch.webp'
import Img3 from '../../assets/product/headphone2.jpg'
import Img4 from '../../assets/product/headphone3.avif'
//second cloumn
import Img5 from '../../assets/product/headphone4.avif'
import Img6 from '../../assets/product/watch2.avif'
import Img7 from '../../assets/product/headphone5.jpg'
import Img8 from '../../assets/product/headphone6.avif'
const productsData=[
    {
       
    id:1,
    img:Img1,
    title:"Boat Headphone",
    price:"120",
    aosDelay:"0"
    },

    {
       
        id:2,
        img:Img2,
        title:"Rocky Mountain",
        price:"420",
        aosDelay:"200"
    
        },

        {
       
            id:3,
            img:Img3,
            title:"headphone",
            price:"320",
            aosDelay:"400"
        
            },

            {
       
                id:4,
                img:Img4,
                title:"Black",
                price:"220",
                aosDelay:"600"
            
                },
]

const productsData2=[
    {
       
    id:1,
    img:Img5,
    title:"Boat Headphone",
    price:"130",
    aosDelay:"0"

    },

    {
       
        id:2,
        img:Img6,
        title:"Smart Watch",
        price:"410",
        aosDelay:"200"
    
        },

        {
       
            id:3,
            img:Img7,
            title:"headphone",
            price:"390",
            aosDelay:"400"
        
            },

            {
       
                id:4,
                img:Img8,
                title:"Black",
                price:"360",
                aosDelay:"600"
            
                },
]

const Products = () => {

  return (
    <div>
      <div className="container">
        {/* header section */}
   
   <Heading title="Our Products" subtitle={"Explore Our Products"}/>
        {/* body section */}

        <ProductCard data={productsData}/>
        <ProductCard data={productsData2}/>
      </div>
    </div>
  )
}

export default Products
