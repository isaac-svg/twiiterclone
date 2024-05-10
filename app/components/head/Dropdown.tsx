'use client';
import React from 'react';
import {
  DownOutlined,
  SmileOutlined,
  ArrowDownOutlined,
  ProfileFilled,
  GroupOutlined,
  SettingOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import Link from 'next/link';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <Space>
        <Link href="/user/profile">My profile</Link>
      </Space>
    ),
    icon: <ProfileFilled />,
  },
  {
    key: '2',
    label: (
      <Space>
        <Link href="/user/profile">My profile</Link>
      </Space>
    ),
    icon: <ProfileFilled />,
  },
  {
    key: '3',
    label: (
      <Space>
        <Link href="/user/profile/settings">Settings</Link>
      </Space>
    ),
    icon: <SettingOutlined />,
  },
  {
    key: '4',
    danger: true,
    label: (
      <Space>
        <LogoutOutlined />
        <Link href="/user/logout">Logout</Link>
      </Space>
    ),
  },
];

const HeaderProfileDropdown = () => {
  return (
    <Dropdown menu={{ items }}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <ArrowDownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default HeaderProfileDropdown;
