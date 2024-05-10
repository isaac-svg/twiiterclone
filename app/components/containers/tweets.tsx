import React from 'react';
import { RetweetOutlined } from '@ant-design/icons';
import Tweet from '../cards/tweet';
const TweetsContainer = () => {
  return (
    <div className="flex flex-col gap-6 flex-1">
      <div>
        <span className="text-slate-500">
          <RetweetOutlined /> User name tweets
        </span>
      </div>
      <div className=" flex flex-col gap-4">
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </div>
    </div>
  );
};

export default TweetsContainer;
