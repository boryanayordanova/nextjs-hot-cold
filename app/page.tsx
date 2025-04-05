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

      <h2 className="text-center text-2xl">
        Desktop examples with data based on the 4 images attached in the email:
      </h2>
      <div className="flex flex-wrap justify-evenly max-w-[90vw] mx-auto py-8">
        <ProgressBar
          operatorLogo="/operator-bluechip.svg"
          providerLogo="/provider-netent.svg"
          gameThumb="/slot-starburst.svg"
          RTP={2.0}
          SRP={94.5}
          gameRTP={96.5}
          variant="desktop"
        />
        <ProgressBar
          operatorLogo="/operator-bluechip.svg"
          providerLogo="/provider-netent.svg"
          gameThumb="/slot-starburst.svg"
          RTP={-10.0}
          SRP={96.5}
          gameRTP={86.5}
          variant="desktop"
        />
        <ProgressBar
          operatorLogo="/operator-bluechip.svg"
          providerLogo="/provider-netent.svg"
          gameThumb="/slot-starburst.svg"
          RTP={10.0}
          SRP={86.5}
          gameRTP={96.5}
          variant="desktop"
        />
        <ProgressBar
          operatorLogo="/operator-bluechip.svg"
          providerLogo="/provider-netent.svg"
          gameThumb="/slot-starburst.svg"
          RTP={-2.0}
          SRP={96.5}
          gameRTP={94.5}
          variant="desktop"
        />
      </div>

      <h2 className="text-center text-2xl">
        Desktop examples with data based on the 2 images attached in the design
        file:
      </h2>
      <div className="flex flex-wrap justify-evenly max-w-[90vw] mx-auto py-8">
        <ProgressBar
          operatorLogo="/operator-bluechip.svg"
          providerLogo="/provider-netent.svg"
          gameThumb="/slot-starburst.svg"
          RTP={-6.8}
          SRP={88.2}
          gameRTP={95.0}
          variant="desktop"
        />
        <ProgressBar
          operatorLogo="/operator-bluechip.svg"
          providerLogo="/provider-netent.svg"
          gameThumb="/slot-crap-trap.svg"
          RTP={13.6}
          SRP={108.2}
          gameRTP={95.0}
          variant="desktop"
        />
      </div>

      <h2 className="text-center text-2xl">
        Case below -10% stays at 100% progress examples:
      </h2>
      <div className="flex flex-wrap justify-evenly max-w-[90vw] mx-auto py-8">
        <ProgressBar
          operatorLogo="/operator-bluechip.svg"
          providerLogo="/provider-netent.svg"
          gameThumb="/slot-starburst.svg"
          RTP={-16.8}
          SRP={95.0}
          gameRTP={78.2}
          variant="desktop"
        />
        <ProgressBar
          operatorLogo="/operator-bluechip.svg"
          providerLogo="/provider-netent.svg"
          gameThumb="/slot-crap-trap.svg"
          RTP={13.6}
          SRP={108.2}
          gameRTP={95.0}
          variant="desktop"
        />
      </div>

      <h2 className="text-center text-2xl">Mobile examples:</h2>
      <div className="flex flex-wrap justify-between max-w-[90vw] mx-auto py-8">
        <ProgressBar
          operatorLogo="/operator-bluechip.svg"
          providerLogo="/provider-netent.svg"
          gameThumb="/slot-starburst.svg"
          RTP={-6.8}
          SRP={88.2}
          gameRTP={95.0}
          variant="mobile"
        />
        <ProgressBar
          operatorLogo="/operator-bluechip.svg"
          providerLogo="/provider-netent.svg"
          gameThumb="/slot-crap-trap.svg"
          RTP={13.6}
          SRP={108.2}
          gameRTP={95.0}
          variant="mobile"
        />
      </div>
    </>
  );
};
export default Home;
