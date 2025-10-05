import Image from "next/image";
import React from "react";
import { SiApplenews } from "react-icons/si";
import Link from "next/link";

export const revalidate = 86400;

const Page = async () => {
  const API_KEY = process.env.API_SECRET_KEY;
  const result = await fetch(
    `https://gnews.io/api/v4/top-headlines?lang=en&max=10&apikey=${API_KEY}`,
    {
      next: { revalidate: 86400 },
    }
  );
  const data = await result.json();

  return (
    <div className="min-h-screen bg-white">
      <header className="shadow-xl h-[4.5em] w-full flex items-center justify-center fixed top-0 left-0 z-50 bg-white px-4 sm:px-8 md:px-12">
        <Link href="/">
          <div className="flex items-center justify-center leading-tight">
            <SiApplenews className="text-red-600 text-2xl sm:text-3xl mr-2" />
            <div className="flex flex-col items-end p-0">
              <h1 className="font-bold text-xl sm:text-2xl md:text-3xl text-gray-800 mb-0 leading-none">
                shortnews
              </h1>
              <p className="text-[0.65em] sm:text-[0.7em] md:text-[0.75em] text-gray-400 mt-0 leading-none">
                stay informed
              </p>
            </div>
          </div>
        </Link>
      </header>
      <main className="my-[6em] flex items-center justify-center px-3 sm:px-6 md:px-8">
        <div className="w-full max-w-[1300px] flex flex-col items-center space-y-8">
          {data.articles.map((article: any) => (
            <div
              key={article.url}
              className="
                w-full sm:w-[90%] md:w-[80%] lg:w-[70%]
                grid grid-cols-1 md:grid-cols-[4fr_6fr]
                shadow-2xl rounded-2xl overflow-hidden
              "
            >
              <div className="p-2 md:p-4">
                <Image
                  src={article.image || "/fallback.jpg"}
                  alt={"news image"}
                  height={200}
                  width={400}
                  className="
                    h-[12em] sm:h-[14em] md:h-[15em] lg:h-[18em]
                    w-full object-cover rounded-md
                  "
                  unoptimized
                />
              </div>
              <div className="flex flex-col py-3 px-4 md:py-4 md:px-6">
                <h2 className="text-gray-800 mb-2 text-lg sm:text-xl md:text-2xl font-light leading-snug">
                  {article.title}
                </h2>
                <p className="text-gray-600 mb-2 text-sm sm:text-base font-extralight leading-5">
                  {article.description}.
                </p>
                <p className="text-gray-600 mb-3 text-sm sm:text-base font-extralight leading-5">
                  {article.content}
                </p>
                <h3 className="text-xs sm:text-sm text-black font-semibold mt-auto">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Read more at {article.source.name}
                  </a>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Page;
