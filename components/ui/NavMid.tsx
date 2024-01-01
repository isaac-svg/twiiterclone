import React from 'react'

const NavMid = () => {
  return (
    <nav className='sm:flex items-center  hidden gap-12 mx-auto '>
        <li className={` text-[#2F80ED] border-b-[3px]  border-[#2F80ED] h-10 w-20 text-center `}>
                <span className={`text-[#2F80ED`}>Home</span>
        </li>
        <li className={` border-b-[3px] h-10 w-20 text-centeractive:text-[#2F80ED] `}>
            
                <span className={`text-[#828282]`}>Explore</span>
            
        </li>
        <li className={` active:text-[#2F80ED] border-b-[3px] h-10 w-24 text-center`}>
           
                <span className={`text-[#828282]`}>Borkmarks</span>
            
        </li>
    </nav>
  )
}

export default NavMid