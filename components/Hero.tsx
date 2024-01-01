import React from "react";
import Banner from "./group/Banner";
import { FollowButton } from "./group/FollowButton";

const Hero = () => {
  return (
    <div className="relative w-screen h-52 sm:h-60">
      {/* <Banner/> */}

      <div className="w-full h-full ">
        <img
          src="https://images.unsplash.com/photo-1696461353431-32c529d4585d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D"
          alt="Banner"
          className="w-full h-full object-fill object-center"
        />
      </div>
      <div className="bg-white absolute -bottom-[90%] sm:-bottom-[45%] min-h-32 h-fit left-[3%] right-[3%] sm:left-[5%] sm:right-[5%] sm:28 px-2 py-4 sm:p-4 rounded-md ">
        {/* Profile photo mobile*/}
        <div className="absolute bg-white h-32 w-32 rounded-md p-1  right-1/2 translate-x-1/2 -top-[35%] shadow-md sm:hidden">
          <img
            src="https://github.com/shadcn.png"
            alt=""
            className="w-full h-full rounded-md"
          />
        </div>
        <div className="flex flex-col gap-2 text-center sm:hidden">
          <h3 className="font-semibold text-lg sm:text-2xl text-[#333333] mt-8">
            Daniel Jensen
          </h3>
          <div className="flex gap-4 sm:gap-8 justify-center">
            <p className="inline-block font-semibold  text-[#333333] text-center text-xs">
              2,569{" "}
              <span className="font-medium text-[#828282]  text-center">
                Following
              </span>
            </p>

            <p className="inline-block font-semibold text-xs text-[#333333] text-center">
              2,569{" "}
              <span className="font-medium text-[#828282]  text-center">
                Following
              </span>
            </p>
          </div>

          {/* content */}

          <div
            className="text-[#828282] 
         text-lg sm:text-xl"
          >
            Photographer & Filmmaker based in Copenhagen, Denmark ✵ 🇩🇰
          </div>
          {/* follow button */}
          <div>
            <FollowButton />
          </div>
        </div>
        {/* content for larger screens */}
        <div className=" justify-between gap-4 hidden  sm:flex">
          {/* left side */}
          <div className="left-side w-32 h-24  relative">
            <div className="absolute w-32 h-32  -top-14 bg-white p-1 rounded-md">
              <img
                src="https://images.unsplash.com/photo-1696461353431-32c529d4585d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D"
                alt="profile"
                className="w-full h-full rounded-md"
              />
            </div>
          </div>
          {/* right side */}
          <div className="flex-1 flex-col content-between ">
            <div className="top flex w-full  justify-between">
              {/* name and followers */}
              <div className="flex gap-4 items-center">
                <h3 className="font-semibold text-md  text-[#333333]  inline-block">
                  Daniel Jensen
                </h3>
                <p className="inline-block font-semibold  text-[#333333] text-center text-xs">
                  2,569{" "}
                  <span className="font-medium text-[#828282]  text-center">
                    Following
                  </span>
                </p>

                <p className="inline-block font-semibold text-xs text-[#333333] text-center">
                  2,569{" "}
                  <span className="font-medium text-[#828282]  text-center">
                    Following
                  </span>
                </p>
              </div>
              {/* follow button */}
              <div>
                <FollowButton />
              </div>
            </div>
            {/* bottom content */}
            <div className="">
              <div
                className="text-[#828282]  
         text-xl"
              >
                Photographer & Filmmaker based in Copenhagen, Denmark ✵ 🇩🇰
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
