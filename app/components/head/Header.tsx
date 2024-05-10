import Link from 'next/link';
import React from 'react';
import HeadMenu from './Menu';
import { Header as AntHeader } from 'antd/es/layout/layout';
import HeaderProfile from './Profile';
const Header = () => {
  return (
    <div className=" px-4 flex items-center bg-white gap-4 justify-between">
      <div>
        <Link href="/">
          <span className="hidden sm:inline-block">Image</span>
          <span>Text</span>
        </Link>
      </div>
      <HeadMenu />
      <div>
        <HeaderProfile />
      </div>
    </div>
  );
};

export default Header;
