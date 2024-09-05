import React from 'react'

function Headeritem(props) {
  return (
    <div className='text-white flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8'>
        <props.Icon/>
        <h2 className='hidden md:block'>{props.name}</h2>
    </div>
  )
}

export default Headeritem