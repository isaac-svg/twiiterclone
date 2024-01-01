import React from 'react'
import NavTabs from './ui/Tabs'
import NavMid from './ui/NavMid'
import UserDetails from './UserDetails'

const Navbar = () => {
  return (
    <header className='flex items-center justify-between px-8 pt-4 bg-white'>
      <div className="flex items-center">
        <span>
         logo {/* repalce span tag with Image tag  */}
        </span>
        <p>Twiiter</p>
      </div>
      {/* home explore bookmarks section */}
      
        <NavMid/>
      
      <div className="">
        <UserDetails/>
      </div>
    </header>
  )
}

export default Navbar