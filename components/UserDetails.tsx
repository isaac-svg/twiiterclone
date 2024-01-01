import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import UserDropdown from './group/Dropdown'

const UserDetails = () => {
  return (
    <div className="flex items-center gap-2">

    <div className='flex items-center gap-4'>
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png"/>
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    </div>
    {/* user name */}

    <div className='hidden sm:inline-block'>
      <span>Isaac Sakyi</span>
    </div>
    {/* dropdown */}
    <div className='hidden sm:inline-block'>
    <UserDropdown />
    </div>
    </div>
  )
}

export default UserDetails