
import React from 'react';
import Heading from '../shared/Heading';

import Img1 from '../../assets/blogs/smartwatch.webp';
import Img2 from '../../assets/blogs/gadget.jpg';
import Img3 from '../../assets/blogs/vr.png';

const BlogData = [
  {
    title: "How to choose the perfect smartwatch",
    subtitle: "Choosing the perfect smartwatch is about finding the right balance between functionality, style, and budget. By considering these factors, you’ll be well-equipped to make a choice that suits your lifestyle. Happy shopping!",
    published: "5 Oct, 2024 by Dilsad",
    image: Img1,
    aosDelay:"0"
  },
  {
    title: "How to choose the perfect gadget",
    subtitle: "Choosing the right gadget can significantly enhance your daily life, whether it's for productivity, entertainment, or personal use. Here’s a comprehensive guide to help you make an informed decision.",
    published: "5 Oct, 2024 by Harsh",
    image: Img2,
    aosDelay:"200"
  },
  {
    title: "How to choose the perfect VR headset",
    subtitle: "Set a budget that considers both the headset and any necessary accessories.",
    published: "5 Oct, 2024 by Satya",
    image: Img3,
    aosDelay:"400"
  },
];

const Blog = () => {
  return (
    <div className='my-12'>
      <div className='container'>
        {/* header section */}
        <Heading title="Recent News" subtitle="Explore Our Blogs" />
        {/* body section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
          {/* blog card */}
          {BlogData.map((data) => (

            <div data-aos="fade-up"
            data-aos-delay={data.aosDelay}
            
            key={data.title} className='bg-white dark:bg-gray-900'>
              {/* image section */}
              <div className='overflow-hidden rounded-2xl mb-2'>
                <img src={data.image} alt={data.title} className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 transition-transform duration-500' />
              </div>
              {/* content section */}
              <div className='space-y-2'>
                <p className='text-xs text-gray-500'>{data.published}</p>
                <p className='font-bold line-clamp-1'>{data.title}</p>
                <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400'>{data.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
