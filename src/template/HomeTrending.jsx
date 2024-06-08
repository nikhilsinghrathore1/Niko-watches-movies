import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DropDown from './DropDown'
import Loading from './Loading'


const HomeTrending = ({data ,fn}) => {
  const navigate = useNavigate()
  return(
    <div className='w-full relative px-5 pt-1 h-[50vh]'>
               
               <div className='w-full flex justify-between items-center'>
                              <h1 className='font-semibold text-4xl capitalize text-white mb-6 mt-2'>trending</h1>
                              <DropDown title="filter" option={["movie","tv"]} fn={fn}/>
               </div>

            <div className='flex w-full h-full text-white overflow-x-auto gap-2 flex-nowrap'>
               {data.map((e,i)=>(
           
               <div onClick={()=>navigate(`/${e.media_type}/${e.id}`)} className='w-[20%] flex-shrink-0 h-[80%] rounded overflow-hidden bg-black/50'>
                              <img className='w-full h-[50%] scale-[115%] object-cover objpos' src={`https://image.tmdb.org/t/p/original/${e.backdrop_path || e.profile_path}`} alt="not showing" />

                              <h1 className='text-lg font-bold mt-4 pl-1'>{e.name || e.title || e.original_name || e.original_title}</h1>
                              <p className='text-sm opacity-80 mt-1 leading-[15px] pl-2'>{e.overview.slice(0,50)}</p>
               </div>
               ))}

            </div>   

            
    </div>
  )
}

export default HomeTrending