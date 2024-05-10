import React, { Suspense, lazy } from 'react';
import { Button, ConfigProvider, Flex } from 'antd';
import theme from './theme/themeConfig';
import Banner from './components/banner/banner';
import Image from 'next/image';
import Linktree from './components/cards/linktree';
import TweetsContainer from './components/containers/tweets';
const IntroCard = lazy(() => import('./components/banner/intro'));

const HomePage = () => (
  <ConfigProvider theme={theme}>
    <div className="App bg-[#F2F2F2] min-h-screen">
      {/* <h1>I am header</h1> */}
      <div className="relative w-full">
        <Banner />

        <IntroCard />
      </div>
      <div className="flex gap-4 mt-16 mx-auto sm:w-4/5 w-[90%] flex-col sm:flex-row">
        <Linktree />
        <TweetsContainer />
      </div>
    </div>
  </ConfigProvider>
);

export default HomePage;
