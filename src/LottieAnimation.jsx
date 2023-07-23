import React from "react";
import { useRef } from "react";
import Lottie from "lottie-react";
import './style.css';
import testAnim from './assets/test_anim_logo.json';

export default function LottieAnimation(){

    return <> 
    <Lottie className="w-16" animationData={testAnim} loop={false} autoPlay={true}/>;
    </>
}