import React, { useState } from 'react';
import Image from 'next/image';

import {
    CircularProgressbar,
    
    buildStyles
  } from "react-circular-progressbar";
  import 'react-circular-progressbar/dist/styles.css';

  
const ProgressBar: React.FC = () => {
    const percentage = 75;
    const RTP = -2;
    // const progress = 10; // Example static value for progress
    const coldImage = '/cold.svg'; // Use the correct path for the cold.svg image
    const hotImage = '/hot.svg'; // Use the correct path for the cold.svg image
    // const grayImage = '/gray.png'; // Use the correct path for the cold.svg image
    const snowImage = '/snow.svg'; // Use the correct path for the snow.svg image
    // const flameImage = '/flame.svg'; // Use the correct path for the snow.svg image
    // const [leftPosition, setLeftPosition] = useState(0);


    // const positionSnowTOP = progress ;
    // const positionSnowLEFT = ;
    // {percentage == 50 ? setLeftPosition(70) : setLeftPosition(0)}

    const radius = 94; // Adjust based on your CircularProgressbar size
    const centerX = 85; // Half of the width of the CircularProgressbar
    const centerY = 80; // Half of the height of the CircularProgressbar
    
    const angle = ((percentage*0.7+40) / 100) * 2 * Math.PI ; // Convert percentage to radians
    //const angle = 40/100 * 2 * Math.PI ;
    const bulletX = centerX + radius * Math.cos(angle) ; // Adjust for bullet size
    const bulletY = centerY + radius * Math.sin(angle) ; // Adjust for bullet size




    
    // console.log( "radius" + radius );
    // console.log( "centerX"+ centerX );
    // console.log( "centerY" + centerY );
    // console.log( "angle" +angle );
    // console.log( "bulletX"+bulletX );
    // console.log( "bulletY" +bulletY );


    return (
        // <div className='relative  w-200 h-200'>
        //     <div className='absolute top-0 left-0 w-[207px] h-[158px] z-1'  >
        //     {/* style={{ background: 'conic-gradient(from 0deg,rgba(94, 250, 203, 1) 0deg,rgba(53, 252, 240, 1) 28.8deg,rgba(1, 0, 255, 1) 100.8deg,rgba(1, 0, 200, 1) 183.6deg,rgba(1, 0, 199, 1) 216deg,rgba(1, 0, 255, 1) 270deg,rgba(89, 245, 226, 1) 345.6deg,rgba(94, 250, 203, 1) 360deg)' }} */}
        //         {RTP < 0 ?
                
        //         <Image src={hotImage} alt="Cold Background" width="207" height="158" style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, clipPath: `inset(0 ${100 - progress}% 0 0)` }}  />                        
        //         :
        //         <Image src={coldImage} alt="Cold Background" width="207" height="158" style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, clipPath: `inset(0 ${100 - progress}% 0 0)` }}  />                        
        //     }

        //     </div>
        //     <div className='absolute top-0 left-0 w-[35px] h-[40px] z-2'>
        //         <Image src={snowImage} alt="Snow Image" width="35" height="40" style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 80 }}  />                        
        //     </div>
        //     <div className='absolute top-0 left-0 -z-0' >

        //           <Image src={grayImage} alt="Cold Background" width="207" height="158"   />                        
        //     </div>
        // </div>




        <div style={{ position: 'relative', width: '207px', height: '158px'}} className="z-1 ">
            {percentage != 100 &&
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
            }
          <div style={{
            position: 'absolute',
            top: `${bulletY}px`,
            left: `${bulletX}px`,
            width: '36px',
            height: '41px',
            borderRadius: '50%',
            background: "url(/snow.svg)",
            // backgroundColor: 'red', // Change color as needed
            }} />
            
            {RTP < 0 ?            
                <>
                <Image src={coldImage} alt="Cold Background" width="207" height="158" className="-z-1 absolute top-0 left-0 w-full h-full" />                        
                {/* <Image src={snowImage} alt="Snow Image" width="36" height="41" className="w-[36px] h-[41px] absolute top-${bulletY}` left-[${bulletX}px]"  />                         */}
                </>
            :
                <Image src={hotImage} alt="Cold Background" width="207" height="158" className="-z-1 absolute top-0 left-0 w-full h-full" />                        
            }
        {/* <img src="/cold.svg" alt="Progress" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} className="-z-1"/> */}
      </div>
    );
};

export default ProgressBar;
