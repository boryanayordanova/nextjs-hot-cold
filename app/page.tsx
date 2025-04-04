"use client";
import Image from "next/image";

import ProgressBar from "./components/box";

const Home: React.FC = () => {
  // const percentage = 50;
  return (
    <>
      <div className="bg-[#021024]">
        <div className="md:max-w-[80vw] md:mx-auto py-20">
          <h1 className="text-white font-extrabold text-center text-4xl border-red-300">
            <span className="font-medium text-[#36FCF0] uppercase flex justify-center text-xl">
              The
            </span>
            Hot or Cold Box
          </h1>
        </div>
      </div>
      <Image
        src="/frame-background.svg"
        width="1728"
        height="218"
        alt="frame background"
        className="w-full -mt-4"
      />

      <div className="flex flex-wrap justify-between max-w-[80vw] mx-auto pt-8">
        <ProgressBar />
        <ProgressBar />
        <ProgressBar />
      </div>
    </>
  );
};
export default Home;
