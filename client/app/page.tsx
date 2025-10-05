import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SiApplenews } from "react-icons/si";

const Page = () => {
  return (
    <div className="">
      <header className="h-[6em] flex items-center justify-between px-4 sm:px-6 md:px-[6em] lg:px-[9em]">
        <div className="flex items-center justify-center leading-tight">
          <SiApplenews className="text-red-600 text-3xl sm:text-4xl mr-2" />
          <div className="flex flex-col items-end p-0">
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-0 leading-none">
              shortnews
            </h1>
            <p className="text-[0.7em] sm:text-xs text-gray-400 mt-0 leading-none">
              stay informed
            </p>
          </div>
        </div>
        <Link
          href="/News"
          className="text-gray-400 text-[0.6rem] sm:text-xs underline underline-offset-6"
        >
          Read Now
        </Link>
      </header>
      <main className="my-8 px-4 sm:px-8 md:px-[6em] lg:px-[7.5em]">
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 gap-y-6 gap-x-4 mb-6">
          <div className="flex justify-center items-center order-1 md:order-1">
            <Image
              src="https://plus.unsplash.com/premium_photo-1683134256624-0e67ff44dc19?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              height={100}
              width={100}
              className="h-[12em] sm:h-[14em] md:h-[15em] w-auto rounded-md"
              unoptimized
            />
          </div>
          <div className="flex items-center justify-center font-extralight order-2 md:order-2">
            <div className="flex flex-col justify-center text-center md:text-left items-center md:items-start">
              <h2 className="text-xl sm:text-2xl text-blue-400 mb-4">
                Stay informed in few words.
              </h2>
              <p className="text-gray-400 w-full md:w-3/4 text-sm sm:text-base">
                We understand you don’t have time to go through long news
                articles everyday. So we cut the clutter and deliver them, in
                few word shorts. Short news for the mobile generation.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center font-extralight order-4 md:order-3">
            <div className="flex flex-col justify-center text-center md:text-left items-center md:items-start md:pl-20">
              <h2 className="text-xl sm:text-2xl text-blue-400 mb-4">
                Your favourite sources in one app.
              </h2>
              <p className="text-gray-400 w-full md:w-3/4 text-sm sm:text-base">
                We pick-up articles from all your favourite sources and present
                them in few words. Read full articles for shorts that interest
                you, within the app.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center order-3 md:order-4">
            <Image
              src="https://images.unsplash.com/photo-1680878903102-92692799ef36?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="h-[12em] sm:h-[14em] md:h-[15em] w-auto rounded-md"
              width={100}
              height={100}
              unoptimized
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
