'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
const Linktree = () => {
  const pathname = usePathname();
  return (
    <div className="sm:w-56 w-full">
      <ul className="bg-white rounded-md shadow-md ">
        <li
          className={`py-1 flex items-center gap-6    ${
            pathname !== 'tweets'
              ? 'text-blue-600 flex gap-1'
              : 'text-slate-600 hover:text-blue-300'
          }`}
        >
          <div
            className={`${
              pathname !== 'tweets'
                ? 'bg-blue-600 w-[4px] h-full  rounded-r-sm block'
                : ''
            }`}
          >
            |
          </div>
          <Link href={'/tweets'} className="text-sm">
            Tweets
          </Link>
        </li>
        <li
          className={`py-1 flex items-center gap-6 ${
            pathname === 'tweets-replies'
              ? 'text-blue-600'
              : 'text-slate-600 hover:text-blue-300'
          }`}
        >
          <span
            className={`${
              pathname === 'tweets-replies'
                ? 'text-blue-600 w-[2px] rounded-r-sm'
                : 'text-slate-600 '
            }`}
          ></span>
          <Link href={'/tweets-replies'} className="text-sm">
            Tweets & replies
          </Link>
        </li>
        <li
          className={`py-1 flex items-center gap-6 ${
            pathname === 'tweets'
              ? 'text-blue-600'
              : 'text-slate-600 hover:text-blue-300'
          }`}
        >
          <span
            className={`${
              pathname === 'media'
                ? 'text-blue-600 w-[2px] rounded-r-sm'
                : 'text-slate-600'
            }`}
          ></span>
          <Link href={'/media'} className="text-sm">
            Media
          </Link>
        </li>
        <li
          className={`py-1 flex items-center gap-6 ${
            pathname === 'tweets'
              ? 'text-blue-600'
              : 'text-slate-600 hover:text-blue-300'
          }`}
        >
          <span
            className={`${
              pathname === 'likes'
                ? 'text-blue-600 w-[2px] rounded-r-sm'
                : 'text-slate-600'
            }`}
          ></span>
          <Link href={'/likes'} className="text-sm">
            likes
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Linktree;
