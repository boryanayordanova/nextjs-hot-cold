'use client';
import Image from "next/image";


import ProgressBar from "./components/box";

const Home: React.FC = () => {
  // const percentage = 50;
  return (    
    <>
      <div className="bg-[#021024]">
        <div className="md:max-w-[80vw] md:mx-auto py-20">
          <h1 className="text-white font-extrabold text-center text-4xl border-red-300">
            <span className="font-medium text-[#36FCF0] uppercase flex justify-center text-xl">The</span>Hot or Cold Box
          </h1>
        </div>
      </div>
      <Image src="/frame-background.svg" width="1728" height="218" alt="frame background" className="w-full -mt-4"/>

    {/* <div className="w-200 h-200">
          <CircularProgressbar 
            value={percentage}
            // text={`${percentage}%`}
            circleRatio={0.75}
            
            styles={buildStyles({
              rotation: 1 / 2 + 1 / 8,
              // strokeLinecap: "butt",
              trailColor: "gray",
              // strokeColor: "red",         
              pathColor: `<img src="./hot.svg" />`
              
            })}
          />
   </div> */}

   {/* <div style={{ position: 'relative', width: '207px', height: '158px'}} className="z-1">
  <CircularProgressbar
    value={100}
    // circleRatio={0.0066 * percentage}
    circleRatio={0.66 - 0.0068 * percentage} // size
    styles={buildStyles({
      pathColor: "gray", // Make the stroke transparent
      rotation:  0.0034*percentage*2 + 0.67,
      trailColor: "black",
      
      
      
      
    })}
  />
  <img src="/cold.svg" alt="Progress" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} className="-z-1"/>
</div> */}

<ProgressBar />

    </>
  );
}
export default Home;
