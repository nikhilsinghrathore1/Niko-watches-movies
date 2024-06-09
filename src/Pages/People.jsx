import axios from '../utils/axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DropDown from '../template/DropDown'
import TopNav from '../template/TopNav'
import Loading from '../template/Loading'
import InfiniteScroll from 'react-infinite-scroll-component'

const People = () => {
const navigate = useNavigate()
const [filter, setfilter] = useState("popular")

const [trending, settrending] = useState([])
const [page, settpage] = useState(1)
const [hasMore, setthasMore] = useState(true)

const getData = async()=>{
               try{
                              const res = await axios.get(`/person/${filter}?page=${page}`);
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
                                             Movies
                              </h1>

                              <div className='w-[80%] '>
                                             <TopNav/>
                              </div>

                              <div className='w-[25%] flex gap-10 justify-end'>
                                             {/* <DropDown  title="filter" option={["popular" , "top_rated" ,"on_the_air" , "airing_today"] } fn = {setfilter}/> */}
                                             
                                  
                              </div>
               </div>

                              <InfiniteScroll
                              dataLength={trending.length}
                              hasMore={hasMore}
                              next={getData}
                              loader="loading...">
               <div className='w-full flex justify-center  flex-wrap gap-12 pt-20 '>

               {trending.map(e=>(
                                             
                                             <div onClick={()=>navigate(`/people/${e.id}`)} className='w-[18%] relative h-[365px] text-[21.5px] font-semibold rounded overflow-hidden'>
                                             <img className='w-full h-[80%] object-cover' src={`https://image.tmdb.org/t/p/original/${e.backdrop_path || e.profile_path}`} alt="not showing" />
                                             <h1 className='mt-2 opacity-60'>{e.name || e.title || e.original_name || e.original_title}</h1>
                                             {/* <div className='w-12 flex items-center justify-center absolute bottom-[20%] -right-[0%] h-12 rounded-full text-white bg-yellow-600'>{(e.vote_average).toFixed()}</div> */}
                              </div>
                              ))}
               </div>
                              </InfiniteScroll>
    </div>
  ):<Loading/>
}

export default People