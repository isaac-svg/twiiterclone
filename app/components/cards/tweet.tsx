'use client';
import Image from 'next/image';
import React, { useRef } from 'react';
import {
  MessageOutlined,
  RetweetOutlined,
  HeartOutlined,
  SaveOutlined,
  FileImageOutlined,
} from '@ant-design/icons';

import { Input } from 'antd';
// import Search from 'antd/es/input/Search';
// const { TextArea } = Input;
const Tweet = () => {
  const fileRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="w-full h-fit bg-white shadow-md rounded-md p-2">
      {/* user details */}
      <div className="flex gap-2 items-center mb-2">
        {/* avatar */}
        <div className="w-12 h-12 rounded-md bg-slate-400 overflow-hidden">
          <Image
            src="/images/img4.jpg"
            className="w-full h-full object-cover "
            alt="avatar"
            width={12}
            height={12}
          />
        </div>
        {/* user and tweet info */}
        <div>
          <p className="font-bold text-sm leading none">Python Lyons</p>
          <span className="text-slate-600 text-xs">24 August at 23:10</span>
        </div>
      </div>
      {/* tweet content */}
      <div className="my-2 py-1 text-gray-700">
        Travelling, first it leaves you speechless then it turns into a story
        teller
      </div>
      {/* actions */}
      <div className="border-y-[1px] border-gray-500/2 flex gap-1 py-1 items-center justify-around mb-2">
        <div className="flex gap-2 text-gray-700 p-2 rounded-md hover:bg-gray-200 cursor-pointer">
          <MessageOutlined content="Comment" /> <span>Comments</span>
        </div>
        <div className="flex gap-2 text-gray-700 p-2 rounded-md hover:bg-gray-200 cursor-pointer">
          <RetweetOutlined /> <span>Retweets</span>
        </div>{' '}
        <div className="flex gap-2 text-gray-700 p-2 rounded-md hover:bg-gray-200 cursor-pointer">
          <HeartOutlined /> <span>Likes</span>
        </div>{' '}
        <div className="flex gap-2 text-gray-700 p-2 rounded-md hover:bg-gray-200 cursor-pointer">
          <SaveOutlined /> <span>Bookmark</span>
        </div>
      </div>
      {/* reply */}
      <div className="flex gap-1">
        <div className=" h-8 w-8 ">
          <Image
            src={'/images/img7.jpg'}
            alt="avatar"
            width={12}
            height={12}
            className="w-full h-full rounded-md"
          />
        </div>
        <div className="flex-1 border-gray-400 border-[1px] rounded-md bg-gray-100 flex px-1 gap-2">
          {/* <Input.Password /> */}
          <textarea
            name="tweet"
            id="tweet"
            rows={1}
            className="h-full outline-none flex-1 bg-gray-100"
          ></textarea>
          <div className="relative  w-8">
            <input type="file" name="file" id="file" ref={fileRef} hidden />
            <FileImageOutlined
              className="absolute inset-0 w-full h-full"
              onClick={() => {
                fileRef?.current?.click();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
