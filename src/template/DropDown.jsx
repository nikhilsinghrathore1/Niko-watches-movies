import React from 'react'

const DropDown = ({title , option , fn}) => {
               console.log(fn)
  return (
               <select onChange={(e)=>fn(e.target.value)} className='bg-white/30 text-white outline-none ' id="dropdown">
               <option value="0" disabled className='text-black'>{title}</option>
               {option.map((e,i)=>(
                              <option  value={`${e}`} className='text-black'>{e}</option>
               ))}
             </select>
  )
}

export default DropDown