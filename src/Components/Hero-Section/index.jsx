import React, { useEffect, useRef } from "react";
import "locomotive-scroll/dist/locomotive-scroll.min.css";
import LocomotiveScroll from "locomotive-scroll";

import gsap from "gsap";
import "./style.css";

const Main = () => {
  const videoContainerRef = useRef(null);
  const playBtnRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });
  }, []);

  useEffect(() => {
    const videoContainer = videoContainerRef.current;
    const playBtn = playBtnRef.current;

    const handleMouseEnter = () => {
      gsap.to(playBtn, {
        scale: 1,
        opacity: 1,
        duration: 0.3, // Animation duration in seconds
        ease: "power3.inOut", // Easing function
      });
    };

    const handleMouseLeave = () => {
      gsap.to(playBtn, {
        scale: 0,
        opacity: 0,
        duration: 0.3, // Animation duration in seconds
        ease: "power3.inOut", // Easing function
      });
    };

    const handleMouseMove = (dets) => {
      gsap.to(playBtn, {
        left: dets.x - 50,
        top: dets.y - 40,
        ease: "power3.inOut",
      });
    };

    videoContainer.addEventListener("mouseenter", handleMouseEnter);
    videoContainer.addEventListener("mouseleave", handleMouseLeave);
    videoContainer.addEventListener("mousemove", handleMouseMove);

    return () => {
      // Clean up event listeners on component unmount
      videoContainer.removeEventListener("mouseenter", handleMouseEnter);
      videoContainer.removeEventListener("mouseleave", handleMouseLeave);
      videoContainer.addEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div id="main">
        <div id="page1">
          <h1 data-scroll>
            Change <br />
            the course.
          </h1>
          <div id="video-container" ref={videoContainerRef}>
            <div id="play" ref={playBtnRef}>
              PLAY
            </div>
            <video src="../media/videos/video.mp4" autoPlay muted loop />
          </div>
        </div>

        <div id="page2">
          <div id="elem1" className="elem">
            <img
              data-scroll
              data-scroll-speed="1"
              src="https://cdn.sanity.io/images/w8f1ak3c/production/f445a3d15e318fd217579e88ec2c6d0140246403-3574x4467.jpg/DSC0078_Dexter%20Kim.jpg?rect=448,0,2679,4467&w=640&h=1067&fit=min&auto=format"
              alt=""
            />
            <div className="details"></div>

          </div>
          <div id="elem2" className="elem">
            <img
              data-scroll
              data-scroll-speed="1"
              src=" https://cdn.sanity.io/images/w8f1ak3c/production/90d06c39f74f1365c801ec2a063227969c5ef940-2560x3840.jpg/LucyTweed_Photo:KatieKarrs.jpg?rect=129,0,2303,3840&w=640&h=1067&fit=min&auto=format"
              alt=""
            />
            <div className="details"></div>
          </div>
          <div id="elem3" className="elem">
            <img
              data-scroll
              data-scroll-speed="1"
              src=" https://cdn.sanity.io/images/w8f1ak3c/production/d3151106849ff2494d66916cf554c68a0603444d-902x1500.png/Rectangle%20220.png?rect=1,0,900,1500&w=640&h=1067&fit=min&auto=format"
              alt=""
            />
            <div className="details"></div>
          </div>
        </div>

        <h1 data-scroll>Hey</h1>
        <p data-scroll>👋</p>
      </div>
    </>
  );
};

export default Main;
