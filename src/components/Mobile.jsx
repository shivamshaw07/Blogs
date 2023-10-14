import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Mobile = () => {
    const {page,totalPage,setPage,pageHandler} = useContext(AppContext)
  return (
    <div className='h-[10vh] flex items-center justify-center border-2 gap-[38vw] border-black'>
      <div>
    {page != 1 && <button onClick={()=>pageHandler(page-1)} className='border-2 text-center bg-slate-200 font-light text-sm mr-2 rounded-md border-black px-2'>prev</button>}        
    {page != 6 && <button onClick={()=>pageHandler(page+1)} className='border-2 text-center bg-slate-200 font-light text-sm rounded-md border-black px-2'>next</button>}      
    </div>
      <div>
        <p>page {page} of {totalPage}</p>
      </div>
    </div>
  )
}

export default Mobile
