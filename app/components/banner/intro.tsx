import { Button } from 'antd';
import React, { Suspense } from 'react';
import { UserAddOutlined } from '@ant-design/icons';
import Image from 'next/image';

const IntroCard = () => {
  return (
    <>
      <div className="bg-white absolute h-auto w-4/5 rounded-md top-[70%]  left-0 right-0 mx-auto p-4 max-w-screen-lg hidden sm:inline-block">
        <div className="sm:flex hidden ">
          <div className="relative h-full bg-cyan-500 w-36 ">
            <div className="w-28 h-28 rounded-md bg-white p-[1px] absolute overflow-hidden -top-14 cursor-pointer">
              {/* Avatar */}
              <Image
                src="/images/img0.jpg"
                className="w-auto h-full object-cover rounded-md"
                alt="avatar"
                width={96}
                height={96}
                priority
              />
            </div>
          </div>
          {/* Name and stats , description*/}
          <div className="flex-1">
            <div className="flex items-center  justify-between">
              <div className="flex items-center gap-2">
                <span className="font-bold text-base">Daniel Jensen</span>
                <div className="flex gap-2">
                  <span className="text-xs">
                    {' '}
                    <span className="font-bold ">2,444</span>{' '}
                    <span className="text-slate-600">Followers</span>
                  </span>
                  <span className="text-xs">
                    {' '}
                    <span className="font-bold ">1k</span>{' '}
                    <span className="text-slate-600">Following</span>
                  </span>
                </div>
              </div>
              <div>
                {/* <Button
                    role="button"
                    aria-label="Follow user"
                    type="default"
                    style={{
                      backgroundColor: 'rgb(59 130 246)',
                      color: 'white',
                    }}
                    icon={<UserAddOutlined />}
                  >
                    Follow
                  </Button> */}
              </div>
            </div>
            <div>
              {/* description */}
              <p className="max-w-[80%] text-slate-600 break-words text-base opacity-90">
                Photographer and Filmmaker based in Copenhagen, Denmark, * 🇩🇰{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* mobile */}

      <div className="bg-white absolute h-auto w-4/5 rounded-md top-[70%]  left-0 right-0 mx-auto p-4 max-w-screen-lg sm:hidden ">
        <div className="relative w-full mb-8 bg-green-400">
          <div className="absolute -top-16 left-0 right-0 mx-auto p-[1.5px] rounded-md bg-white w-20 shadow-sm overflow-hidden">
            <Image
              src={'/images/img2.jpg'}
              alt="Avatar"
              width={98}
              height={98}
              className="w-full h-20 rounded-md"
            />
          </div>
        </div>
        <div className="flex items-center flex-col justify-center gap-2">
          {/* name */}
          <div>
            <span className="font-bold text-base">Daniel Jensen</span>
          </div>
          {/* following */}
          <div className="flex gap-2">
            <span className="text-xs">
              {' '}
              <span className="font-bold ">2,444</span>{' '}
              <span className="text-slate-600">Followers</span>
            </span>
            <span className="text-xs">
              {' '}
              <span className="font-bold ">1k</span>{' '}
              <span className="text-slate-600">Following</span>
            </span>
          </div>
          {/* description */}
          <div>
            <p className="max-w-[80%] mx-auto text-slate-600 break-words text-base opacity-90 text-center">
              Photographer and Filmmaker based in Copenhagen, Denmark, * 🇩🇰{' '}
            </p>
          </div>
          {/* follow button */}
          <button>Follow</button>
        </div>
      </div>
    </>
  );
};

export default IntroCard;
