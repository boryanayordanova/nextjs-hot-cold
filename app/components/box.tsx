import Image from "next/image";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface ProgressBarProps {
  operatorLogo: string;
  providerLogo: string;
  gameThumb: string;
  RTP: number;
  SRP: number;
  gameRTP: number;
  variant: "desktop" | "mobile";
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  operatorLogo,
  providerLogo,
  gameThumb,
  RTP,
  SRP,
  gameRTP,
  variant,
}) => {
  // const percentage: number = Math.abs(gameRTP - SRP) * 10;
  const percentage: number = Math.min(100, Math.abs(gameRTP - SRP) * 10);
  const coldImage: string = "/cold.svg";
  const coldShadowImage: string = "/cold-shadow.svg";
  const hotImage: string = "/hot.svg";
  const hotShadowImage: string = "/hot-shadow.svg";
  const snowImage: string = "/snow.svg";
  const flameImage: string = "/flame.svg";
  const timerImage: string = "/timer.svg";
  const infoImage: string = "/info.svg";
  const coldFaceImage: string = "/cold-face.svg";
  const hotFaceImage: string = "/hot-face.svg";

  console.log(percentage);
  // if (percentage > 100) {
  //   percentage = 100.0;
  // }

  const radius = 94; // Adjust based on your CircularProgressbar size
  const centerX = 85; // Half of the width of the CircularProgressbar
  const centerY = 80; // Half of the height of the CircularProgressbar

  const angle = ((percentage * 0.7 + 40) / 100) * 2 * Math.PI; // Convert percentage to radians
  //const angle = 40/100 * 2 * Math.PI ;
  const bulletX = centerX + radius * Math.cos(angle); // Adjust for bullet size
  const bulletY = centerY + radius * Math.sin(angle); // Adjust for bullet size

  return (
    <>
      <div
        className={`bg-[#021024] ${
          variant === "desktop" ? "w-[398px]" : "w-full"
        } flex justify-center items-center flex-col rounded-3xl my-2`}
      >
        <div
          className={` text-white flex justify-between w-full px-3 pt-3 ${
            variant === "desktop" ? "" : "hidden"
          }`}
        >
          <div className="flex w-1/2 items-center">
            <Image
              src={operatorLogo}
              width="36"
              height="36"
              alt="Casino Image"
            />
            <div className="flex flex-col pl-2">
              <span className="text-gray-400 text-[11px]">Casino</span>
              <span className="font-bold text-[13px]">
                {operatorLogo.includes("bluechip") ? "BlueChip" : "Operator"}
              </span>
            </div>
          </div>
          <div className="w-[2px] h-[28px] bg-gray-400 -indent-9999">|</div>
          <div className="flex w-1/2 justify-end">
            <div className="flex flex-col pr-2 text-right">
              <span className="text-gray-400 text-[11px]">Created by</span>
              <span className="font-bold text-[13px] capitalize">
                {providerLogo.replace("/provider-", "").replace(".svg", "")}
              </span>
            </div>
            <Image
              src={providerLogo}
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
                  pathColor: "#18273b", // Make the stroke transparent
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
              <Image
                src={coldImage}
                alt="Cold Background"
                width="207"
                height="158"
                className="-z-1 absolute top-0 left-0 w-full h-full"
              />
            ) : (
              <Image
                src={hotImage}
                alt="Cold Background"
                width="207"
                height="158"
                className="-z-1 absolute top-0 left-0 w-full h-full"
              />
            )}

            <Image
              src={gameThumb}
              width="128"
              height="128"
              alt="Game Thumbnail"
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
        <div className="text-white text-4xl font-black">{gameRTP}%</div>

        {RTP >= 0 ? (
          <div className="text-base font-semibold text-red-500 flex">
            {" "}
            <Image
              src={hotFaceImage}
              width={17}
              height={17}
              alt="Hot Face Image"
              className="mr-1"
            />
            RTP {RTP}%
          </div>
        ) : (
          <div className="text-base font-semibold text-[#36FCF0] flex">
            <Image
              src={coldFaceImage}
              width={16}
              height={17}
              alt="Cold Face Image"
              className="mr-1"
            />
            RTP {RTP}%
          </div>
        )}

        <div
          className={`bg-[#0B1B32] text-white w-[85%] rounded-2xl p-5 mt-4 ${
            variant === "desktop" ? "" : "hidden"
          }`}
        >
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
            <span>{SRP}%</span>
          </div>
          <div className="flex justify-between">
            Game RTP<span>{gameRTP}%</span>
          </div>
          <div className="flex justify-between">
            Difference
            <span>
              {RTP >= 0 ? "+" : ""}
              {RTP}%
            </span>
          </div>
          <div className="border-t-2 border-gray-400 mt-2"></div>
          <div className="text-[#36FCF0] text-xs text-center pt-4 flex justify-center">
            <Image src={timerImage} width="16" height="16" alt="Timer Image" />
            <span className="pl-1">
              Last Update: 2 min ago based on 6990 Spins
            </span>
          </div>
        </div>
        <div
          className={`bg-[#0B1B32] text-white w-full rounded-b-2xl p-5 mt-4 capitalize ${
            variant === "desktop" ? "hidden" : "flex flex-col"
          }`}
        >
          <span className="font-bold text-sm">
            {gameThumb.replace("/slot-", "").replace(".svg", "")}
          </span>
          <span className="text-gray-400 text-sm">
            By {providerLogo.replace("/provider-", "").replace(".svg", "")}
          </span>
        </div>
        <button
          className={`bg-[#3736FA] rounded-4xl text-white my-4 p-4 w-[85%] font-bold text-base hover:bg-indigo-600 hover:cursor-pointer ${
            variant === "desktop" ? "" : "hidden"
          }`}
        >
          Play Now at Ice Casino
        </button>
      </div>
    </>
  );
};

export default ProgressBar;
