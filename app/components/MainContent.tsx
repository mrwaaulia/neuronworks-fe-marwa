"use client";

import { CaretDown } from "@phosphor-icons/react/dist/ssr/CaretDown";
import React, { useRef, useState } from "react";

function MainContent() {
  const TABS = [
    "Multimedia",
    "CRM Application",
    "Work Management system",
    "System Integrator",
    "Business Intellegence",
  ];
  const DATA = [
    {
      title: "Multimedia",
      overview:
        "Highly multimedia content, UI/UX Design, video editing, film and animation, social media management, script writting, Photography, Logo design and visual graphic design for your product.",
    },
    {
      title: "CRM Application",
      overview:
        "Highly multimedia content, UI/UX Design, video editing, film and animation, social media management, script writting, Photography, Logo design and visual graphic design for your product.",
    },
    {
      title: "Work Management system",
      overview:
        "Highly multimedia content, UI/UX Design, video editing, film and animation, social media management, script writting, Photography, Logo design and visual graphic design for your product.",
    },
    {
      title: "System Integrator",
      overview:
        "Highly multimedia content, UI/UX Design, video editing, film and animation, social media management, script writting, Photography, Logo design and visual graphic design for your product.",
    },
    {
      title: "Business Intellegence",
      overview:
        "Highly multimedia content, UI/UX Design, video editing, film and animation, social media management, script writting, Photography, Logo design and visual graphic design for your product.",
    },
  ];

  const [currentTab, setCurrentTab] = useState("Multimedia");
  const [defaultDisplay, setDefaultDisplay] = useState("hidden");
  const loadMore = useRef<HTMLButtonElement>(null);

  return (
    <section id="maincontent">
      <div className="py-12 px-32">
        <div className="flex justify-between mb-12">
          <div className="relative w-fit">
            <input
              type="search"
              placeholder="Search Portfolio"
              className="w-[445px] h-[56px] px-4 rounded-lg border border-gray-300 pr-16"
            />
            <img
              src="/assets/search.svg"
              alt="search"
              className="absolute top-4 right-4"
            />
          </div>
          <div className="relative ">
            <select className="rounded-lg text-[#333435] border border-gray-300 p-4 w-[211px] h-[56px] appearance-none">
              <option value="">Newest first</option>
              <option value="">Oldest first</option>
            </select>
            <CaretDown className="absolute right-5 top-4" size={24} />
          </div>
        </div>
        <div className="flex gap-6 text-lg text-[#637381] mb-8">
          {TABS.map((data) => {
            return (
              <button
                key={data}
                onClick={() => {
                  setCurrentTab(data);
                }}
                className={`pb-3 ${
                  currentTab === data
                    ? "border-b-[3px] border-[#D61924] font-medium text-[#333435]"
                    : ""
                }`}
              >
                {data}
              </button>
            );
          })}
          {/* <button className="border-b-[3px] pb-3 border-[#D61924] font-medium text-[#333435]">
          Multimedia
        </button> */}
        </div>
        <h1 className="text-[#333435] font-bold text-5xl">
          {DATA.find((data) => data.title === currentTab)!.title}
        </h1>
        <p className="text-[#637381] py-6 text-lg">
          {DATA.find((data) => data.title === currentTab)!.overview}
        </p>
        <div className="grid grid-cols-3 gap-8 mb-12">
          <div className="shadow-xl rounded-[32px]">
            <img
              src="/assets/frame.svg"
              alt="Multimedia Photo 1"
              width={500}
              height={500}
              className="w-full rounded-t-[32px]"
            />
            <div className="py-4 px-6">
              <h4 className="text-[#333435] font-medium mb-2">My Simetri</h4>
              <p className="text-[#333435] mb-1">
                PT. Telekomunikasi Indonesia
              </p>
              <p className="text-[#637381]">Sep 2017 - Current</p>
            </div>
          </div>
          <div className="shadow-xl rounded-[32px]">
            <img
              src="/assets/frame.svg"
              alt="Multimedia Photo 1"
              width={500}
              height={500}
              className="w-full rounded-t-[32px]"
            />
            <div className="py-4 px-6">
              <h4 className="text-[#333435] font-medium mb-2">My Simetri</h4>
              <p className="text-[#333435] mb-1">
                PT. Telekomunikasi Indonesia
              </p>
              <p className="text-[#637381]">Sep 2017 - Current</p>
            </div>
          </div>
          <div className="shadow-xl rounded-[32px]">
            <img
              src="/assets/frame.svg"
              alt="Multimedia Photo 1"
              width={500}
              height={500}
              className="w-full rounded-t-[32px]"
            />
            <div className="py-4 px-6">
              <h4 className="text-[#333435] font-medium mb-2">My Simetri</h4>
              <p className="text-[#333435] mb-1">
                PT. Telekomunikasi Indonesia
              </p>
              <p className="text-[#637381]">Sep 2017 - Current</p>
            </div>
          </div>
          <div className="shadow-xl rounded-[32px]">
            <img
              src="/assets/frame.svg"
              alt="Multimedia Photo 1"
              width={500}
              height={500}
              className="w-full rounded-t-[32px]"
            />
            <div className="py-4 px-6">
              <h4 className="text-[#333435] font-medium mb-2">My Simetri</h4>
              <p className="text-[#333435] mb-1">
                PT. Telekomunikasi Indonesia
              </p>
              <p className="text-[#637381]">Sep 2017 - Current</p>
            </div>
          </div>
          <div className="shadow-xl rounded-[32px]">
            <img
              src="/assets/frame.svg"
              alt="Multimedia Photo 1"
              width={500}
              height={500}
              className="w-full rounded-t-[32px]"
            />
            <div className="py-4 px-6">
              <h4 className="text-[#333435] font-medium mb-2">My Simetri</h4>
              <p className="text-[#333435] mb-1">
                PT. Telekomunikasi Indonesia
              </p>
              <p className="text-[#637381]">Sep 2017 - Current</p>
            </div>
          </div>
          <div className="shadow-xl rounded-[32px]">
            <img
              src="/assets/frame.svg"
              alt="Multimedia Photo 1"
              width={500}
              height={500}
              className="w-full rounded-t-[32px]"
            />
            <div className="py-4 px-6">
              <h4 className="text-[#333435] font-medium mb-2">My Simetri</h4>
              <p className="text-[#333435] mb-1">
                PT. Telekomunikasi Indonesia
              </p>
              <p className="text-[#637381]">Sep 2017 - Current</p>
            </div>
          </div>
          <div className={`shadow-xl rounded-[32px] ${defaultDisplay}`}>
            <img
              src="/assets/frame.svg"
              alt="Multimedia Photo 1"
              width={500}
              height={500}
              className="w-full rounded-t-[32px]"
            />
            <div className="py-4 px-6">
              <h4 className="text-[#333435] font-medium mb-2">My Simetri</h4>
              <p className="text-[#333435] mb-1">
                PT. Telekomunikasi Indonesia
              </p>
              <p className="text-[#637381]">Sep 2017 - Current</p>
            </div>
          </div>
          <div className={`shadow-xl rounded-[32px] ${defaultDisplay}`}>
            <img
              src="/assets/frame.svg"
              alt="Multimedia Photo 1"
              width={500}
              height={500}
              className="w-full rounded-t-[32px]"
            />
            <div className="py-4 px-6">
              <h4 className="text-[#333435] font-medium mb-2">My Simetri</h4>
              <p className="text-[#333435] mb-1">
                PT. Telekomunikasi Indonesia
              </p>
              <p className="text-[#637381]">Sep 2017 - Current</p>
            </div>
          </div>
          <div className={`shadow-xl rounded-[32px] ${defaultDisplay}`}>
            <img
              src="/assets/frame.svg"
              alt="Multimedia Photo 1"
              width={500}
              height={500}
              className="w-full rounded-t-[32px]"
            />
            <div className="py-4 px-6">
              <h4 className="text-[#333435] font-medium mb-2">My Simetri</h4>
              <p className="text-[#333435] mb-1">
                PT. Telekomunikasi Indonesia
              </p>
              <p className="text-[#637381]">Sep 2017 - Current</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            ref={loadMore}
            onClick={() => {
              setDefaultDisplay("block");
              loadMore.current!.style.display = "none";
            }}
            className="text-[#637381]"
          >
            Load more
          </button>
          <p className={`${defaultDisplay} text-[#637381] text-center`}>
            All portfolios shown
          </p>
        </div>
      </div>
    </section>
  );
}

export default MainContent;
