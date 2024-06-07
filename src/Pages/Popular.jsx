import axios from '../utils/axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DropDown from '../template/DropDown'
import TopNav from '../template/TopNav'
import Loading from '../template/Loading'
import InfiniteScroll from 'react-infinite-scroll-component'

const Popular = () => {
const navigate = useNavigate()
const [filter, setfilter] = useState("movie")

const [trending, settrending] = useState([])
const [page, settpage] = useState(1)
const [hasMore, setthasMore] = useState(true)

const getData = async()=>{
               try{
                              const res = await axios.get(`${filter}/popular?page=${page}`);
                              // const result = res.data.r
                              // console.log(result)
                              if(res.data.results.length>1){
                                             settrending((prev)=>[...prev,...res.data.results])
                                             settpage(page+1);
                              }
                              else{
                                            setthasMore(false) 
                              }
               }
               catch(err){
                              console.log(err)
               }
}

const refreshHandler = ()=>{
               if(trending.length === 0 ){
                              getData()
               }
               else{
                        settpage(1)
                        settrending([])
                        getData();      
               }
}


          useEffect(() => {
               refreshHandler()
               
          }, [filter])
          
               console.log(trending)


  return trending.length>1?(
    <div className='w-full text-white min-h-screen bg-[#1D1C23] p-5'>
               <div className='w-full h-[10vh] fixed px-5 bg-[#1D1C23] z-10 top-0 left-0 flex justify-between items-center'>
                              <h1 onClick={()=>navigate("/")} className='text-2xl  font-bold '>
                                             <i className="text-[#6556cd] mr-2 font- ri-arrow-left-line"></i>
                                             Popular
                              </h1>

                              <div className='w-[80%] '>
                                             <TopNav/>
                              </div>

                              <div className='w-[25%] flex gap-10 justify-end'>
                                             <DropDown  title="filter" option={["movie" , "tv"] } fn = {setfilter}/>
                                             
                                  
                              </div>
               </div>

                              <InfiniteScroll
                              dataLength={trending.length}
                              hasMore={hasMore}
                              next={getData}
                              loader="loading...">
               <div className='w-full flex justify-center  flex-wrap gap-12 pt-20 '>

                              {trending.map(e=>(
                                             
                                             <div className='w-[18%] h-[365px] text-[21.5px] font-semibold rounded overflow-hidden'>
                                             <img className='w-full h-[80%] object-cover' src={`https://image.tmdb.org/t/p/original/${e.backdrop_path || e.profile_path}`} alt="not showing" />
                                             <h1 className='mt-2 opacity-60'>{e.name || e.title || e.original_name || e.original_title}</h1>
                              </div>
                              ))}
               </div>
                              </InfiniteScroll>
    </div>
  ):<Loading/>
}

export default Popular