import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './style.css'

const Main = () =>{

const videoContainerRef = useRef(null);
const playBtnRef = useRef(null);
const h1Ref = useRef(null);

useEffect(() => {
  const videoContainer = videoContainerRef.current;
  const playBtn = playBtnRef.current;


  const handleMouseEnter = () => {
    gsap.to(playBtn, {
      scale: 1,
      opacity: 1,
      duration: 0.3, // Animation duration in seconds
      ease: 'power3.inOut', // Easing function
    });
  };

  const handleMouseLeave = () => {
    gsap.to(playBtn, {
      scale: 0,
      opacity: 0,
      duration: 0.3, // Animation duration in seconds
      ease: 'power3.inOut', // Easing function
    });
  };

  const handleMouseMove = (dets) =>{
    gsap.to(playBtn,{
        left:dets.x-50,
        top:dets.y-60,
     
    })
  }

  const handleH1Animation = () =>{
    gsap.from(h1Ref.current,{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger:0.4
    })
  }
  const handleH1AnimationWrapper = () => {
    handleH1Animation();
  };
  videoContainer.addEventListener('mouseenter', handleMouseEnter);
  videoContainer.addEventListener('mouseleave', handleMouseLeave);
  videoContainer.addEventListener('mousemove', handleMouseMove);
  handleH1AnimationWrapper();

  return () => {
    // Clean up event listeners on component unmount
    videoContainer.removeEventListener('mouseenter', handleMouseEnter);
    videoContainer.removeEventListener('mouseleave', handleMouseLeave);
    videoContainer.addEventListener('mousemove', handleMouseMove);
   
  };
}, []);

return(
    <>
    <div id="main">
        <div id="page">
          <h1 ref={h1Ref}>Change <br/>the course.</h1>
        
          <div id="video-container" ref={videoContainerRef}>
            <div id="play" ref={playBtnRef}>PLAY</div>
            <video src='../media/videos/video.mp4' autoPlay muted loop/>
          </div>
        </div>
    </div>
    </>
)
}

export default Main;