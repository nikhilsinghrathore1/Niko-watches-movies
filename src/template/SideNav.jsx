import React from 'react'
import { useNavigate } from 'react-router-dom'

const SideNav = () => {
  const navigate = useNavigate()

               const data = [
                              {
                                             text:"trending",
                                             icon:"ri-fire-fill"
                              },
                              {
                                             text:"popular",
                                             icon:"ri-bard-fill"
                              },
                              {
                                             text:"movies",
                                             icon:"ri-movie-2-fill"
                              },
                              {
                                             text:"tv shows",
                                             icon:"ri-tv-2-fill"
                              },
                              {
                                             text:"people",
                                             icon:"ri-team-fill"
                              },

               ]

  return (
    <div className='w-[20%] text-white px-6 pt-7 h-screen border-r-[2px] border-zinc-400 cursor-pointer'>
               <div className='flex gap-1 px-4 text-xl'>
               <i className="ri-tv-fill text-[#6556cd]"></i>
               <h1 className='font-semibold'>NikoChan.</h1>
               </div>
               <div className='mt-14'>
                              <div>
                                             <h1 className='text-lg font-semibold capitalize'>news feeds</h1>

                              </div>
                              <div className='px-1 mt-5 border-b-[2px] border-zinc-400/40 pb-2'>
                                             {data.map((e,i)=>(

                                             <div onClick={()=>navigate(`/${e.text}`)} className='flex cursor-pointer opacity-70 text-[17px] p-4 hover:bg-[#6556cd] hover:opacity-100 hover:text-white duration-150 rounded-[5px] gap-[5px] items-center'>
                                             <i className={e.icon}></i>
                                             <p className='capitalize  '>{e.text}</p>
                                             </div>

                                             ))}
                                          
                              </div>



               </div>

               <div className='mt-5'>
               <h1 className='text-lg font-semibold capitalize'>website information</h1>

                                             <div className='flex  opacity-70 cursor-pointer text-[17px] p-4 hover:bg-[#6556cd] hover:opacity-100 hover:text-white duration-150 rounded-[5px] gap-[5px] items-center'>
                                             <img className='w-6 object-cover object-bottom h-6 rounded-full' src="https://i.pinimg.com/236x/f1/d9/66/f1d966611c8f07938d524009d213cb2b.jpg" alt="not showing" />
                                             <p className='capitalize  '>NikoChan</p>

                                             </div>

                                             <div className='flex  opacity-70 cursor-pointer text-[17px] p-4 hover:bg-[#6556cd] hover:opacity-100 hover:text-white duration-150 rounded-[5px] gap-[5px] items-center'>
                                             <i className="ri-phone-fill"></i>
                                             <p className='capitalize  '>Contact us</p>

                                             </div>


               </div>
    </div>
  )
}

export default SideNav