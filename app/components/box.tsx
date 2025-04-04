import Image from "next/image";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressBar: React.FC = () => {
  const percentage: number = 80;
  const RTP: number = -2;

  const coldImage: string = "/cold.svg"; // Use the correct path for the cold.svg image
  const coldShadowImage: string = "/cold-shadow.svg"; // Use the correct path for the cold.svg image
  const hotImage: string = "/hot.svg"; // Use the correct path for the cold.svg image
  const hotShadowImage: string = "/hot-shadow.svg"; // Use the correct path for the cold.svg image
  const snowImage: string = "/snow.svg"; // Use the correct path for the snow.svg image
  const flameImage: string = "/flame.svg"; // Use the correct path for the snow.svg image
  const operatorImage: string = "/operator-bluechip.svg"; // Use the correct path for the snow.svg image
  const providerImage: string = "/provider-netent.svg"; // Use the correct path for the snow.svg image
  const slotImage: string = "/slot-starburst.svg"; // Use the correct path for the snow.svg image
  const timerImage: string = "/timer.svg"; // Use the correct path for the snow.svg image
  const infoImage: string = "/info.svg"; // Use the correct path for the snow.svg image

  const radius = 94; // Adjust based on your CircularProgressbar size
  const centerX = 85; // Half of the width of the CircularProgressbar
  const centerY = 80; // Half of the height of the CircularProgressbar

  const angle = ((percentage * 0.7 + 40) / 100) * 2 * Math.PI; // Convert percentage to radians
  //const angle = 40/100 * 2 * Math.PI ;
  const bulletX = centerX + radius * Math.cos(angle); // Adjust for bullet size
  const bulletY = centerY + radius * Math.sin(angle); // Adjust for bullet size

  return (
    <>
      <div className="bg-[#021024] w-[398px] flex justify-center items-center flex-col rounded-3xl py-2">
        <div className=" text-white flex justify-between w-full px-3 pt-2">
          <div className="flex w-1/2 items-center">
            <Image
              src={operatorImage}
              width="36"
              height="36"
              alt="Casino Image"
            />
            <div className="flex flex-col pl-2">
              <span className="text-gray-400 text-[11px]">Casino</span>
              <span className="font-bold text-[13px]">BlueChip</span>
            </div>
          </div>
          <div className="w-[2px] h-full bg-gray-400 -indent-9999">|</div>
          <div className="flex w-1/2 justify-end">
            <div className="flex flex-col pr-2 text-right">
              <span className="text-gray-400 text-[11px]">Created by</span>
              <span className="font-bold text-[13px]">Netent</span>
            </div>
            <Image
              src={providerImage}
              width="36"
              height="36"
              alt="Provider Image"
            />
          </div>
        </div>
        <div className="relative z-1 w-full flex justify-center py-4 ">
          <div
            style={{ position: "relative", width: "207px", height: "158px" }}
            className="z-1 "
          >
            {percentage != 100 && (
              <CircularProgressbar
                value={100}
                // circleRatio={0.0066 * percentage}
                circleRatio={0.66 - 0.0068 * percentage} // size
                styles={buildStyles({
                  pathColor: "gray", // Make the stroke transparent
                  rotation: 0.0034 * percentage * 2 + 0.67,
                  trailColor: "black",
                })}
              />
            )}
            <div
              style={{
                position: "absolute",
                top: `${bulletY}px`,
                left: `${bulletX}px`,
                width: "36px",
                height: "41px",
                borderRadius: "50%",
                // background: `${RTP < 0 ? 'url(/snow.svg)' : 'url(/flame.svg)'}`,
                background: `url(${RTP < 0 ? snowImage : flameImage})`,
                // backgroundColor: 'red', // Change color as needed
              }}
            />

            {RTP < 0 ? (
              <>
                <Image
                  src={coldImage}
                  alt="Cold Background"
                  width="207"
                  height="158"
                  className="-z-1 absolute top-0 left-0 w-full h-full"
                />
                {/* <Image src={snowImage} alt="Snow Image" width="36" height="41" className="w-[36px] h-[41px] absolute top-${bulletY}` left-[${bulletX}px]"  />                         */}
              </>
            ) : (
              <Image
                src={hotImage}
                alt="Cold Background"
                width="207"
                height="158"
                className="-z-1 absolute top-0 left-0 w-full h-full"
              />
            )}
            {/* <img src="/cold.svg" alt="Progress" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} className="-z-1"/> */}
            <Image
              src={slotImage}
              width="128"
              height="128"
              alt="Slot Image"
              className="absolute top-0 left-0 w-full h-full mt-6 p-4"
            />
          </div>
          {RTP < 0 ? (
            <Image
              src={coldShadowImage}
              alt="Cold Shadow Background"
              width="328"
              height="279"
              className="-z-1 absolute -top-8 left-0 w-[328px] h-[279px] right-0 mx-auto "
            />
          ) : (
            <Image
              src={hotShadowImage}
              alt="Hot Shadow Background"
              width="328"
              height="279"
              className="-z-1 absolute -top-8 left-0 w-[328px] h-[279px] right-0 mx-auto "
            />
          )}
        </div>
        <div className="text-white text-4xl font-black">88.2%</div>
        <div className="text-[#36FCF0] text-base font-semibold">
          RTP - 6.80%
        </div>
        <div className="bg-[#0B1B32] text-white w-[85%] rounded-2xl p-5 mt-4">
          <div className="flex justify-between">
            <div className="flex items-center">
              SRP{" "}
              <Image
                src={infoImage}
                width="16"
                height="16"
                alt="Info Image"
                className="ml-1 hover:cursor-pointer"
              />
            </div>
            <span>88.2%</span>
          </div>
          <div className="flex justify-between">
            Game RTP<span>95.0%</span>
          </div>
          <div className="flex justify-between">
            Difference<span>-6.80%</span>
          </div>
          <div className="border-t-2 border-gray-400 mt-2"></div>
          <div className="text-[#36FCF0] text-xs text-center pt-4 flex justify-center">
            <Image src={timerImage} width="16" height="16" alt="Timer Image" />
            <span className="pl-1">
              Last Update: 2 min ago based on 6990 Spins
            </span>
          </div>
        </div>
        <button className="bg-[#3736FA] rounded-4xl text-white my-4 p-4 w-[85%] font-bold text-base hover:bg-indigo-600 hover:cursor-pointer">
          Play Now at Ice Casino
        </button>
      </div>
    </>
  );
};

export default ProgressBar;
