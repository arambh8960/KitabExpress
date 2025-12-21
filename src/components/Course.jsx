import React from 'react'
import Cards from './Cards'
import list from "../list.json";
import { Link } from 'react-router-dom';



const Course = () => {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-10'>
      <div className='items-justify-center text-center md:mt-28  mt-20'>
      <h1 className='text-xl font-semibold md:text-4xl '>We are delighted to have you <span className='text-pink-500'>Here! :)</span></h1>
      <p className='text-xl mt-5'>Free and premium book courses are offered to support learning, skill development, and a deeper understanding of various subjects.</p>
      <Link to="/">
      <button className=' bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-slate-600 duration-300 cursor-pointer mt-5'>Back</button>
      </Link>
      </div>
    
      <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-4' >{
       list.map((item)=>(
        <Cards item={item} key={item.id}/>
       ))
      }
      
      </div>
    </div>
    </>
  )
}

export default Course
