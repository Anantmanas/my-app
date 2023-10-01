import React, { useEffect, useRef } from "react";
import "locomotive-scroll/dist/locomotive-scroll.min.css";
import LocomotiveScroll from "locomotive-scroll";

import gsap from "gsap";
import "./style.css";
import Header from "../Header/index";

const Main = () => {

  const divID1 = '#main'
  const divID2 = '#page1'
  const videoContainerRef = useRef(null);
  const playBtnRef = useRef(null);
 
  useEffect(() => {
    // Mousemove event listener
    document.addEventListener('mousemove', function (dets) {
      gsap.to('#cursor', {
        left: dets.x,
        top: dets.y,
      });
    });

    // Mouseenter event listener for #child1
    document.querySelector('#child1').addEventListener('mouseenter', function () {
      gsap.to('#cursor', {
        transform: 'translate(-50%, -50%) scale(1)',
        backgroundColor: '#D4D0D3',
      });
    });

    // Mouseleave event listener for #child1
    document.querySelector('#child1').addEventListener('mouseleave', function () {
      gsap.to('#cursor', {
        transform: 'translate(-50%, -50%) scale(0)',
      });
    });

       // Mouseenter event listener for #child2
       document.querySelector('#child2').addEventListener('mouseenter', function () {
        gsap.to('#cursor', {
          transform: 'translate(-50%, -50%) scale(1)',
          backgroundColor: '#E6DFD7',
        });
      });
  
      // Mouseleave event listener for #child2
      document.querySelector('#child2').addEventListener('mouseleave', function () {
        gsap.to('#cursor', {
          transform: 'translate(-50%, -50%) scale(0)',
        });
      });

      // Mouseenter event listener for #child3
      document.querySelector('#child3').addEventListener('mouseenter', function () {
        gsap.to('#cursor', {
          transform: 'translate(-50%, -50%) scale(1)',
          backgroundColor: '#E6DFD7',
        });
      });
  
      // Mouseleave event listener for #child3
      document.querySelector('#child3').addEventListener('mouseleave', function () {
        gsap.to('#cursor', {
          transform: 'translate(-50%, -50%) scale(0)',
        });
      });

      // Mouseenter event listener for #child4
      document.querySelector('#child4').addEventListener('mouseenter', function () {
        gsap.to('#cursor', {
          transform: 'translate(-50%, -50%) scale(1)',
          backgroundColor: '#B4D5B6',
        });
      });
  
      // Mouseleave event listener for #child4
      document.querySelector('#child4').addEventListener('mouseleave', function () {
        gsap.to('#cursor', {
          transform: 'translate(-50%, -50%) scale(0)',
        });
      });

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener('mousemove', function (dets) {
        gsap.to('#cursor', {
          left: dets.x,
          top: dets.y,
        });
      });

      document.querySelector('#child1').removeEventListener('mouseenter', function () {
        gsap.to('#cursor', {
          transform: 'translate(-50%, -50%) scale(1)',
          backgroundColor: '#D4D0D3',
        });
      });

      document.querySelector('#child1').removeEventListener('mouseleave', function () {
        gsap.to('#cursor', {
          transform: 'translate(-50%, -50%) scale(0)',
        });
      });
    };
  }, []);

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
        left: dets.x - 65,
        top: dets.y - 55,    
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
    <Header divID1={divID1} divID2={divID2}/>
    <div id="cursor"></div>
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
            <div data-scroll data-scroll-speed="-2" className="details">SHOP</div>
          </div>
          <div id="elem2" className="elem">
            <img
              data-scroll
              data-scroll-speed="1"
              src=" https://cdn.sanity.io/images/w8f1ak3c/production/90d06c39f74f1365c801ec2a063227969c5ef940-2560x3840.jpg/LucyTweed_Photo:KatieKarrs.jpg?rect=129,0,2303,3840&w=640&h=1067&fit=min&auto=format"
              alt=""
            />
            <div data-scroll data-scroll-speed="-2" className="details">PANTRY</div>
          </div>
          <div id="elem3" className="elem">
            <img
              data-scroll
              data-scroll-speed="1"
              src=" https://cdn.sanity.io/images/w8f1ak3c/production/d3151106849ff2494d66916cf554c68a0603444d-902x1500.png/Rectangle%20220.png?rect=1,0,900,1500&w=640&h=1067&fit=min&auto=format"
              alt=""
            />
            <div data-scroll data-scroll-speed="-2" className="details">BATH</div>
          </div>
        </div>
        <div id="page3">
          <div className="left">
            <h1 >
              WE BELIEVE IN PEOPLE, UNTIL THEY BELIEVE IN THEMSELVES AGAIN.
            </h1>
          </div>
          <div className="right">
            <p>
              Everything we do is designed to rebuild self worth and
              independence, in order to break free from the cycle of
              disadvantage.<br/> With every purchase you make with us, you're helping
              to change the course of someone's life; you're walking alongside
              vulnerable women as they find their way home again.
            </p>

            <div className="shop"><span>Shop to support</span></div>
          </div>
        </div>
        <id id="page4">
        <div className="child" id="child1"><img src="https://cdn.sanity.io/images/w8f1ak3c/production/d6a2a4be8e3063d64648773f57f5f447609a93ab-5000x5000.png/Love-Care-Pack-Expanded-Two-Good-Co.png?w=1024&h=1024&auto=format" alt="product"/></div>
        <div className="child" id="child2"><img src="https://cdn.sanity.io/images/w8f1ak3c/production/7a2007de38624a0b2935416bf51a4584889aa232-5000x5000.png/Website%20Products%20(12).png?w=1024&h=1024&auto=format" alt="product"/></div>
        <div className="child" id="child3"><img src="https://cdn.sanity.io/images/w8f1ak3c/production/99866b12faf44f7490e6037dc197947334ce0a72-1408x1408.png/Nourish%20&%20Soothe%20Hand%20Lotion%20Two%20Good%20Co.png?w=1024&h=1024&auto=format" alt="product"/></div>
        <div className="child" id="child4"><img src="https://cdn.sanity.io/images/w8f1ak3c/production/02240d01db2e8bdc5c630e9832ff7e0c7614f733-1876x1876.png/Cookbook-Two-Recipes-For-Resilience-Two-Good-Co.png?w=1024&h=1024&auto=format" alt="product"/></div>
        </id>
      </div>

    </>
  );
};

export default Main;
