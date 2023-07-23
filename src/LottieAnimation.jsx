import React from "react";
import { useRef } from "react";
import Lottie from "lottie-react";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import './style.css';
import testAnim from './assets/test_anim_logo.json';

export default function LottieAnimation(){
    
    return <> 
        <div>
        {/* https://github.com/LottieFiles/lottie-react */}
        <Player
            onEvent={click => {
                if (click === 'play') console.log('play'); // check event type and do something
              }}
            src={testAnim}
            style={{ height: '300px', width: '300px' }}
>
        <Controls visible={true} buttons={['play', 'frame', 'debug']} />
        </Player>
        </div>
    </>
}