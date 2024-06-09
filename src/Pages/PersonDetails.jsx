import React, { useEffect } from 'react'
import {useDispatch , useSelector} from "react-redux"
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import{asyncLoadperson, removePerson} from "../Store/action/PersonAction"
import DropDown from '../template/DropDown'
import Loading from '../template/Loading'
const PersonDetails = () => {
  const {pathname} = useLocation()
  const navigate = useNavigate()
  const {info} = useSelector(state=>state.person)
const dispatch = useDispatch()
const {id} = useParams()
// console.log(info)

  useEffect(() => {
  
    dispatch(asyncLoadperson(id))
    return ()=>{
      dispatch(removePerson())
    }
  }, [id])
  
  // console.log(info)
  if (!info || !info.details) {
  return <Loading />;
}
  return (
    <div className='w-full min-h-[160vh] relative bg-[#1D1C23]'>
      <div onClick={()=>navigate(-1)}> <i class="text-white text-3xl absolute top-5 left-10 ri-arrow-left-line"></i></div>
      {/* first part  */}
      <div className='w-full h-screen flex justify-between px-28 pt-6'>
        {/* left part  */}
                <div className='w-[25%] h-full pt-12 '>
                  
                  <div className='w-[85%] h-[60%] rounded overflow-hidden'>
                    <img className='w-full h-full object-cover objpos ' src={`https://image.tmdb.org/t/p/original/${info.details.backdrop_path || info.details.profile_path}`} alt="" />
                    
                  </div>
    {/* <hr /> */}
                  <div className='w-full flex gap-5  mt-3 text-white text-2xl h-[5%]'>
                <a target="_blank" href={`https://en.wikipedia.org/wiki/${info.exteranal.wikidata_id}`}>
                <i class="ri-earth-fill"></i>
                </a>
                
                <a target="_blank" href={`https://www.instagram.com/${info.exteranal.instagram_id}`}>
                <i class="ri-instagram-fill"></i>
                </a>
                
                <a target="_blank" href={`https://facebook.com/${info.exteranal.facebook_id}`}>
                <i class="ri-facebook-circle-fill"></i>
                </a>
                <a target="_blank" href={`https://facebook.com/${info.exteranal.twitter_id}`}>
                <i class="ri-twitter-x-fill"></i>
                </a>

                  </div>
        <div className=' mt-10'>
            <div className='text-2xl font-semibold text-white/90'>
              <h1>personal info</h1>
            </div>

            <div className='text-lg mt-5 font-semibold text-white/50'>
              <h1>Known for: <span>{info.details.known_for_department}</span> </h1>
            </div>

            <div className='text-lg mt-5 font-semibold text-white/50'>
              <h1>Birthdate: <span>{info.details.birthday}</span> </h1>
            </div>

            <div className='text-lg mt-5 font-semibold text-white/50'>
              <h1>Death: <span>{info.details.deathday?info.details.deathday:"earth is still 70kg heavier"}</span> </h1>
            </div>

            <div className='text-lg mt-5 font-semibold text-white/50'>
              <h1>place of birth: <span>{info.details.place_of_birth}</span> </h1>
            </div>

        </div>
                </div>
            {/* second part personal info  */}

                <div className='w-[68%]  text-white/80 min-h-full pt-10'>
                  <h1 className='text-5xl  font-bold'>{info.details.name}</h1>
                  <p className='text-xl capitalize font-semibold mt-5'>biography</p>
                  <p className=' mt-1 text-sm text-md w-[60%]'>{info.details.biography.slice(0,500)}</p>

                  <p className='text-2xl text-white font-bold mt-5 capitalize'>Spotted in.. </p>

                  <div className='w-full flex justify-start overflow-x-auto px-2 flex-nowrap gap-12 mt-3 '>



              {info.CombinedCredits.cast.map(e=>(
                              
                              <div onClick={()=>navigate(`/${e.media_type}/${e.id}`)} className='w-[24%] flex-shrink-0 relative h-[365px] text-[21.5px] font-semibold rounded overflow-hidden'>
                              <img className='w-full h-[80%] object-cover' src={`https://image.tmdb.org/t/p/original/${e.backdrop_path || e.profile_path}`} alt="not showing" />
                              <h1 className='mt-2 opacity-60'>{e.name || e.title || e.original_name || e.original_title}</h1>
                              <div className='w-12 flex items-center justify-center absolute bottom-[20%] -right-[0%] h-12 rounded-full text-white bg-yellow-600'>{(e.vote_average*10).toFixed()}<sup>%</sup> </div>
               </div>
               ))}

                </div>
                <div className='w-full border-t-[1px] border-zinc-100/30 pt-5 '>
                  <div className='w-full flex justify-between items-center'>
                    <h1>Acting</h1>
                    <DropDown title="category" option={['tv','movie']} fn ={()=>""}/>
                  </div>

                  <div className='w-full h-[40vh] mt-3 shadow-lg rounded-md overflow-auto shadow-white/30'>
                    {info["movieCredits"].cast.map((e,i)=>(
                      <li className='p-5 text-white'>
                        {e.name|| e.title || e.original_name || e.original_title}
                        <span className='block opacity-70 ml-5 mt-1'>{ e.character }</span>
                      </li>
                    ))}
                  </div>
                </div>
                </div>
      </div>



    </div>
  )
}

export default PersonDetails