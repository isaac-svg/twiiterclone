import React from "react";
import { Button, ConfigProvider } from "antd";

import theme from "./theme/themeConfig";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Feed from "@/components/Feed";

const HomePage = () => (
  <ConfigProvider theme={theme}>
    <div className="App bg-[#F2F2F2] min-h-screen">
      <Navbar />
      <Hero />
      <Feed />
    </div>
  </ConfigProvider>
);

export default HomePage;
