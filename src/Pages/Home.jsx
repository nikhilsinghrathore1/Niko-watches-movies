import axios from '../utils/axios'
import React, { useEffect, useState } from 'react'
import Header from '../template/Header'
import SideNav from '../template/SideNav'
import TopNav from '../template/TopNav'

const Home = () => {
  const [wallpaper, setwallpaper] = useState()
  useEffect(() => {
const fetchd = async()=>{
  try{
                 const res = await axios.get("/trending/all/day")
                 const results = res.data.results; // Correctly access the data property
                 const randomIndex = Math.floor(Math.random() * results.length);
                 const oneImage = results[randomIndex];
                 setwallpaper(oneImage)
  }
  catch(err){
                 console.log(err)
  }
}
fetchd();


  }, [])
  return wallpaper? (
    <div className='w-full flex bg-[#1D1C23]'>
               <SideNav/>
               <div className='w-[80%]'>
               <TopNav/>
               <Header data={wallpaper}/>
               </div>
    </div>
  ):<h1>loading</h1>
}

export default Home