import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from "../list.json";
import Cards from "./Cards";


function Freebook() {
    const filterData=list.filter((data)=>data.category==="Free");
    var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    mobileFirst: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  }
]
  };
    
   
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4  flex-col md:flex-row mt-8 md:mt-12'>
        <div>
        <h1 className='font-semibold text-xl '>Free Offered Courses</h1>
        <p className='font-semibold text-sm text-gray-500 mt-2'>Get access to our specially curated free book courses. Learn, explore, and grow — without spending a single rupee.</p>
        </div>
    
    <div>
        <Slider {...settings}>
        {filterData.map((item)=>(
            <Cards item={item} key={item.id}/>

        ))
        }
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Freebook
