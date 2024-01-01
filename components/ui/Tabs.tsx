import React from 'react';
import { Tabs } from 'antd';

const NavTabs: React.FC = () => (
  <Tabs
    defaultActiveKey="1"
    centered
    items={new Array(3).fill(null).map((_, i) => {
      const id = String(i + 1);
      return {
        label: `Home`,
        key: id,
        children: `Content of Tab Pane ${id}`,
      };
    })}
  />
);

export default NavTabs;
