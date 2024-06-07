import axios from '../utils/axios'
import React, { useEffect, useState } from 'react'
import Header from '../template/Header'
import SideNav from '../template/SideNav'
import TopNav from '../template/TopNav'
import HomeTrending from '../template/HomeTrending'
import Loading from '../template/Loading'

const Home = () => {
  const [wallpaper, setwallpaper] = useState()
  const [trend, settrend] = useState(null)
  const [category, setcategory] = useState("all")
  useEffect(() => {
const fetchd = async()=>{
  try{
                 const res = await axios.get(`/trending/${category}/day`)
                 const results = res.data.results;
                 settrend(results)
                 const randomIndex = Math.floor(Math.random() * results.length);
                 const oneImage = results[randomIndex];
                 setwallpaper(oneImage)
  }
  catch(err){
                 console.log(err)
  }
}
fetchd();


  }, [category])
  const dataa = false
  return trend?(
    <div className='w-full flex bg-[#1D1C23]'>
               <SideNav/>
               <div className='w-[80%] h-screen overflow-x-auto relative'>
               <TopNav/>
               <Header data={wallpaper}/>
               <HomeTrending data={trend} fn={setcategory} />
               </div>
    </div>
  ):<Loading/>
}

export default Home