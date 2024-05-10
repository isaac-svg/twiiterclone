'use client';
import React, { useState } from 'react';

import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import Link from 'next/link';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: <Link href={'/'}>Home</Link>,
    key: 'home',
  },
  {
    label: <Link href={'/explore'}>Explore</Link>,
    key: 'explore',
  },

  {
    key: 'bookmark',
    label: <Link href="/bookmark">Bookmark</Link>,
  },
];

const HeadMenu: React.FC = () => {
  const [current, setCurrent] = useState('home');

  const onClick: MenuProps['onClick'] = (e) => {
    // console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <Menu
      className="hidden sm:inline-block"
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default HeadMenu;
