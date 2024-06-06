import axios from '../utils/axios'
import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import Searched from '../Components/Searched'

const useDebounce = (query)=>{
               const [deb, setdeb] = useState(null)

               useEffect(() => {
                              let cl;
               if(query){

                              cl = setTimeout(async()=>{
                                             try{
                                                            const res = await axios.get(`/search/multi?query=${query}`)
                                                            setdeb(res.data.results)
                                             }
                                             catch(err){
                                                            console.log(err)
                                             }
                              }, 500);
               }
               else{
                              setdeb("")
               }
               return ()=>clearTimeout(cl)
               
               }, [query])

return deb;

}


const TopNav = () => {

               const [search, setsearch] = useState("")
               const [insideSearch, setinsideSearch] = useState([])
               const data = useDebounce(search)
               const inputref = useRef(null)
               // setinsideSearch(data)

               useEffect(() => {
                              setinsideSearch(data || [])
               }, [data])

                          
       
  return (
    <div className='w-[100%] h-fit  pt-6'>

               <div className='w-[100%] relative justify-center text-white flex gap-3 items-center'>
                              <i onClick={()=>inputref.current.focus()} class="ri-search-line text-xl font-light"></i>
                              <input ref={inputref} onChange={(e)=>setsearch(e.target.value)} className='w-[60%]  p-2 text-zinc-400  bg-transparent outline-none text-lg border-b-2 border-zinc-50/10 rounded-xl' type="text" placeholder='search' />
                              {search?<>
                              
                              <i onClick={()=>{
                                             setsearch("")
                                             inputref.current.value =""
                                             }} class="ri-close-line text-xl font-light absolute top-3 right-[218px]"></i>
                              
                              
                              <div className='w-[59%] h-[40vh] bg-white/10 absolute top-12 left-[235px] rounded overflow-x-hidden'>
                                        {insideSearch.map((e,i)=><Searched data={e} key={i}/>)}
                              </div></>:""}
               </div>
    </div>
  )
}

export default TopNav