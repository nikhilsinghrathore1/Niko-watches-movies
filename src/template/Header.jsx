import axios from '../utils/axios'
import React, { useEffect, useState } from 'react'



const Header = ({data}) => {
               console.log(data)

  return data?(
    <div className='w-full h-[60vh] z-0 relative mt-[2px]'>
      <img className='absolute top-0 left-0 w-full h-full object-cover objpos' src={`https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path}`} alt="not showing" />
      <div className='w-full text-white pb-5 h-full absolute top-0 left-0 px-10 flex  flex-col items-start justify-end z-[1] gradient'>
        <h1 className='text-6xl font-bold capitalize'>{data.title || data.original_title|| data.name || data.original_name }</h1>
        <p className='text-[14.5px] opacity-80 leading-[18px] w-[45%] mt-3'>{data.overview.slice(0,200)}</p>
        <p className='text-[14.5px] opacity-80 mt-2'>
        <i class="text-yellow-500 mr-1 ri-megaphone-fill"></i>{data.release_date?data.release_date:"Cumming soon"}
        <i class="text-yellow-500 mr-1 ri-album-fill ml-5"></i>{data.media_type}
        </p>
        <button className='bg-[#6556CD] p-3 text-[15px] mt-2 font-semibold tracking-wide hover:bg-[#5548ad] duration-100 w-[17%]  rounded'>Watch trailer</button>
      </div>
    </div>
  ):<h1>loading...</h1>
}

export default Header