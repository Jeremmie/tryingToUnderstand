import React, { useState, useRef } from "react";
import Lottie from "lottie-react";
import './style.css';
import testAnim from './assets/test_anim_logo.json';

export default function LottieAnimation() {
    const lottieRef = useRef();
    var animDirection = -1;

    function blackTheme() {
        var switchDarkMode = document.documentElement;
        switchDarkMode.classList.toggle('dark');
    }

    const playAnimationNow = () => {
        animDirection *= -1;
        lottieRef.current.setDirection(animDirection);
        lottieRef.current.play();
    }

    const handleLottieClick = () => {
        playAnimationNow();
        blackTheme();
    }

    return (
        <>
            <Lottie onClick={handleLottieClick} autoplay={false} lottieRef={lottieRef} className="w-28" animationData={testAnim} loop={false} />
        </>
    );
}
