// // import React, { useEffect, useRef, useState } from "react";
// // import { gsap } from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // gsap.registerPlugin(ScrollTrigger);

// // const Header = () => {
// //   const textContainerRef = useRef(null);
// //   const subtitleRef = useRef(null);
// //   const [currentColors, setCurrentColors] = useState({});
// //   const colors = [
// //     "#FFD700", "#FF4500", "#32CD32", "#1E90FF", "#FF1493", "#FFA500", 
// //     "#00FFFF", "#FF6347", "#C71585",
// //   ];

// //   useEffect(() => {
// //     // GSAP subtitle animation
// //     gsap.fromTo(
// //       subtitleRef.current,
// //       { opacity: 0, scale: 0.8 },
// //       {
// //         opacity: 1,
// //         scale: 1,
// //         duration: 1.5,
// //         ease: "power3.out",
// //         delay: 0.5,
// //       }
// //     );

// //     // GSAP scrolling text animation
// //     const textTl = gsap.timeline({
// //       repeat: -1,
// //       defaults: { ease: "none" },
// //     });

// //     textTl.to(textContainerRef.current, {
// //       xPercent: -50,
// //       duration: 10,
// //     });

// //     // Reverse scroll animation when the title text moves out of the screen
// //     gsap.to(textContainerRef.current, {
// //       yPercent: -100, // Move text up and out of the screen
// //       duration: 10,
// //       ease: "none",
// //       scrollTrigger: {
// //         trigger: textContainerRef.current,
// //         start: "top top",
// //         end: "bottom top",
// //         scrub: true, // Allow the animation to scrub with the scroll position
// //         onLeave: () => {
// //           // Reverse the scrolling animation when text leaves
// //           gsap.to(textContainerRef.current, {
// //             yPercent: 0, // Reset the position back to the starting point
// //             duration: 10,
// //             ease: "none",
// //           });
// //         },
// //       },
// //     });
// //   }, []);

// //   // Handle clicking on individual words
// //   const handleClick = (word) => {
// //     // Assign a random color to the clicked word that doesn't repeat
// //     let availableColors = colors.filter((color) => !Object.values(currentColors).includes(color));
// //     const newColor = availableColors[Math.floor(Math.random() * availableColors.length)];

// //     setCurrentColors({
// //       ...currentColors,
// //       [word]: newColor,
// //     });

// //     // Scroll animation for the text container
// //     gsap.to(textContainerRef.current, {
// //       yPercent: -100,
// //       duration: 1.5,
// //       ease: "power2.inOut",
// //       onComplete: () => {
// //         gsap.to(textContainerRef.current, {
// //           yPercent: 0,
// //           duration: 0,
// //         });
// //       },
// //     });

// //     // Animate the clicked word itself
// //     gsap.to(word, {
// //       scale: 1.2,
// //       color: newColor,
// //       duration: 0.3,
// //       ease: "power2.out",
// //       yoyo: true,
// //       repeat: 1,
// //     });
// //   };

// //   // Hover effect for the text: Water-like animation
// //   const handleHover = (e) => {
// //     gsap.to(e.target, {
// //       scale: 1.1,
// //       duration: 0.3,
// //       ease: "power3.out",
// //       rotation: 10,
// //       transformOrigin: "center",
// //     });
// //   };

// //   const handleHoverOut = (e) => {
// //     gsap.to(e.target, {
// //       scale: 1,
// //       duration: 0.3,
// //       ease: "power3.out",
// //       rotation: 0,
// //     });
// //   };

// //   // Handle subtitle hover effect
// //   const handleSubtitleHover = (e) => {
// //     gsap.to(e.target, {
// //       scale: 1.1,
// //       duration: 0.3,
// //       ease: "power3.out",
// //       rotation: 10,
// //       transformOrigin: "center",
// //     });
// //   };

// //   const handleSubtitleHoverOut = (e) => {
// //     gsap.to(e.target, {
// //       scale: 1,
// //       duration: 0.3,
// //       ease: "power3.out",
// //       rotation: 0,
// //     });
// //   };

// //   return (
// //     <header className="relative h-screen overflow-hidden bg-black">
// //       {/* Background */}
// //       <div className="absolute inset-0 bg-gradient-to-b from-black to-green-900"></div>

// //       {/* Main content */}
// //       <div
// //         className="relative h-full flex flex-col items-center justify-center text-center"
// //         onClick={() => handleClick()}
// //       >
// //         {/* Scrolling content */}
// //         <div
// //           ref={textContainerRef}
// //           className="text-4xl md:text-6xl lg:text-7xl font-bold space-x-8"
// //           style={{ color: "white" }}
// //         >
// //           <div
// //             onClick={(e) => handleClick(e.target)}
// //             onMouseEnter={handleHover}
// //             onMouseLeave={handleHoverOut}
// //             className="inline-block cursor-pointer"
// //             style={{ color: currentColors["MAHEDI"] }}
// //           >
// //             MAHEDI
// //           </div>
// //           <div
// //             onClick={(e) => handleClick(e.target)}
// //             onMouseEnter={handleHover}
// //             onMouseLeave={handleHoverOut}
// //             className="inline-block cursor-pointer"
// //             style={{ color: currentColors["HASAN"] }}
// //           >
// //             HASAN
// //           </div>
// //           <div
// //             onClick={(e) => handleClick(e.target)}
// //             onMouseEnter={handleHover}
// //             onMouseLeave={handleHoverOut}
// //             className="inline-block cursor-pointer"
// //             style={{ color: currentColors["ANIK"] }}
// //           >
// //             ANIK
// //           </div>
// //           <br/>
// //           <div
// //             onClick={(e) => handleClick(e.target)}
// //             onMouseEnter={handleHover}
// //             onMouseLeave={handleHoverOut}
// //             className="inline-block cursor-pointer"
// //             style={{ color: currentColors["PHOTOGRAPHER"] }}
// //           >
// //           </div>
// //             <br/>
// //           <div
// //             onClick={(e) => handleClick(e.target)}
// //             onMouseEnter={handleHover}
// //             onMouseLeave={handleHoverOut}
// //             className="inline-block cursor-pointer"
// //             style={{ color: currentColors["PHOTOGRAPHER"] }}
// //           >
// //             PHOTOGRAPHER
// //           </div>
// //           <br/>
// //           <div
// //             onClick={(e) => handleClick(e.target)}
// //             onMouseEnter={handleHover}
// //             onMouseLeave={handleHoverOut}
// //             className="inline-block cursor-pointer"
// //             style={{ color: currentColors["PHOTOGRAPHER"] }}
// //           >
            
// //           </div>
// //             <br/>
// //           <div
// //             onClick={(e) => handleClick(e.target)}
// //             onMouseEnter={handleHover}
// //             onMouseLeave={handleHoverOut}
// //             className="inline-block cursor-pointer"
// //             style={{ color: currentColors["SOFTWARE DEVELOPER"] }}
// //           >
// //             SOFTWARE 
// //           </div>
// //           <div
// //             onClick={(e) => handleClick(e.target)}
// //             onMouseEnter={handleHover}
// //             onMouseLeave={handleHoverOut}
// //             className="inline-block cursor-pointer"
// //             style={{ color: currentColors["SOFTWARE DEVELOPER"] }}
// //           >
// //              DEVELOPER
// //           </div>
// //         </div>

// //         {/* Add space between the text divs */}
// //         <div className="mt-12"> {/* Margin for spacing between the text and subtitle */}
// //           <div
// //             ref={subtitleRef}
// //             className="mt-8 text-xl md:text-2xl text-white/80"
// //             onClick={(e) => handleClick(e.target)}
// //             onMouseEnter={handleSubtitleHover}
// //             onMouseLeave={handleSubtitleHoverOut}
// //             style={{ color: currentColors["subtitle"] }}
// //           >
// //             The Endless Journey Through Code and Lens
// //           </div>
// //         </div>
// //       </div>
// //     </header>
// //   );
// // };

// // export default Header;




// import React, { useRef, useEffect, useState } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, Stars, Text } from "@react-three/drei";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Header = () => {
//   const subtitleRef = useRef();
//   const textContainerRef = useRef();
//   const [currentColors, setCurrentColors] = useState({});

//   const colors = [
//     "#FFD700", "#FF4500", "#32CD32", "#1E90FF", "#FF1493", "#FFA500", 
//     "#00FFFF", "#FF6347", "#C71585",
//   ];

//   useEffect(() => {
//     // GSAP: Scroll-triggered subtitle animation
//     gsap.fromTo(
//       subtitleRef.current,
//       { opacity: 0, y: 50 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1.5,
//         scrollTrigger: {
//           trigger: subtitleRef.current,
//           start: "top 80%",
//         },
//       }
//     );

//     // GSAP: Infinite scrolling text animation
//     gsap.timeline({ repeat: -1 }).to(textContainerRef.current, {
//       xPercent: -50,
//       duration: 20,
//       ease: "none",
//     });
//   }, []);

//   const handleClick = (word) => {
//     const availableColors = colors.filter(
//       (color) => !Object.values(currentColors).includes(color)
//     );
//     const newColor = availableColors[Math.floor(Math.random() * availableColors.length)];

//     setCurrentColors((prev) => ({
//       ...prev,
//       [word]: newColor,
//     }));
//   };

//   return (
//     <header className="relative h-screen bg-black text-white">
//       {/* 3D Canvas */}
//       <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
//         {/* Ambient and Directional Lights */}
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[0, 5, 5]} intensity={1} />

//         {/* Orbit Controls */}
//         <OrbitControls enableZoom={false} />

//         {/* Stars Background */}
//         <Stars
//           radius={100} // Radius of the star field
//           depth={50} // Depth of the star field
//           count={5000} // Number of stars
//           factor={4} // Size factor of stars
//           saturation={0} // Star color saturation
//           fade // Enables fading effect for stars
//         />

//         {/* 3D Words */}
//         <Text
//           position={[-5, 2, 0]}
//           fontSize={1}
//           onClick={() => handleClick("MAHEDI")}
//           color={currentColors["MAHEDI"] || "white"}
//         >
//           MAHEDI
//         </Text>
//         <Text
//           position={[0, 2, 0]}
//           fontSize={1}
//           onClick={() => handleClick("HASAN")}
//           color={currentColors["HASAN"] || "white"}
//         >
//           HASAN
//         </Text>
//         <Text
//           position={[4, 2, 0]}
//           fontSize={1}
//           onClick={() => handleClick("ANIK")}
//           color={currentColors["ANIK"] || "white"}
//         >
//         ANIK
//         </Text>
//         <Text
//           position={[-5, 0, 0]}
//           fontSize={1}
//           onClick={() => handleClick("SOFTWARE")}
//           color={currentColors["SOFTWARE"] || "white"}
//         >
//           PHOTOGRAPHER
//         </Text>
//         <Text
//           position={[5, 0, 0]}
//           fontSize={1}
//           onClick={() => handleClick("DEVELOPER")}
//           color={currentColors["DEVELOPER"] || "white"}
//         >
//         VIDEOGRAPHER
//         </Text>
//       </Canvas>

//       {/* Scrolling Text */}
//       {/* <div
//         ref={textContainerRef}
//         className="absolute top-1/3 w-full text-center text-4xl font-bold overflow-hidden whitespace-nowrap"
//       >
//         <span className="inline-block px-8">CODE</span>
//         <span className="inline-block px-8">PHOTOGRAPHY</span>
//         <span className="inline-block px-8">CREATIVITY</span>
//       </div> */}

//       {/* Subtitle */}
//       {/* Subtitle */}
// <div
//   ref={subtitleRef}
//   className="absolute bottom-10 w-full text-center text-lg font-bold"
//   style={{
//     color: "linear-gradient(to right, #FFD700, #FF4500)",
//     textShadow: "0 4px 6px rgba(0, 0, 0, 0.6), 0 1px 3px rgba(255, 255, 255, 0.6)",
//     perspective: "1000px",
//   }}
// >
//   <span
//     className="3d-subtitle"
//     style={{
//       display: "inline-block",
//       transform: "rotateX(25deg) rotateY(15deg)",
//       transition: "transform 0.5s ease",
//     }}
//     onMouseEnter={(e) => (e.target.style.transform = "rotateX(0deg) rotateY(360deg)")}
//     onMouseLeave={(e) => (e.target.style.transform = "rotateX(0deg) rotateY(360deg)")}
//   >
//     The Endless Journey Through Code and Lens
//   </span>
// </div>

//     </header>
//   );
// };

// export default Header;


import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Text } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

const AnimatedCamera = () => {
  useFrame(({ clock, camera }) => {
    const t = clock.getElapsedTime();
    camera.position.x = Math.sin(t * 0.1) * 10;
    camera.position.y = Math.cos(t * 0.1) * 10;
    camera.position.z = Math.sin(t * 0.1) * 10 + 15;
    camera.lookAt(0, 0, 0);
  });

  return null;
};

const Header = () => {
  const subtitleRef = useRef();
  const textContainerRef = useRef();
  const [currentColors, setCurrentColors] = useState({});

  const colors = [
    "#FFD700", "#FF4500", "#32CD32", "#1E90FF", "#FF1493", "#FFA500", 
    "#00FFFF", "#FF6347", "#C71585",
  ];

  useEffect(() => {
    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.timeline({ repeat: -1 }).to(textContainerRef.current, {
      xPercent: -50,
      duration: 20,
      ease: "none",
    });
  }, []);

  const handleClick = (word) => {
    const availableColors = colors.filter(
      (color) => !Object.values(currentColors).includes(color)
    );
    const newColor = availableColors[Math.floor(Math.random() * availableColors.length)];

    setCurrentColors((prev) => ({
      ...prev,
      [word]: newColor,
    }));
  };

  return (
    <header className="relative h-screen bg-black text-white">
      <Canvas camera={{ position: [0, 0, 20], fov: 50 }}>
        <AnimatedCamera />
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} intensity={1} />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
        />
        <Text
          position={[-5, 2, 0]}
          fontSize={1}
          onClick={() => handleClick("MAHEDI")}
          color={currentColors["MAHEDI"] || "#F4D793"}
        >
          MAHEDI
        </Text>
        <Text
          position={[0, 2, 0]}
          fontSize={1}
          onClick={() => handleClick("HASAN")}
          color={currentColors["HASAN"] || "#F4D793"}
        >
          HASAN
        </Text>
        <Text
          position={[4, 2, 0]}
          fontSize={1}
          onClick={() => handleClick("ANIK")}
          color={currentColors["ANIK"] || "#F4D793"}
        >
          ANIK
        </Text>
        <Text
          position={[-5, 0, 0]}
          fontSize={1}
          onClick={() => handleClick("PHOTOGRAPHER")}
          color={currentColors["PHOTOGRAPHER"] || "#889E73"}
        >
          PHOTOGRAPHER
        </Text>
        <Text
          position={[5, 0, 0]}
          fontSize={1}
          onClick={() => handleClick("VIDEOGRAPHER")}
          color={currentColors["VIDEOGRAPHER"] || "#889E73"}
        >
          VIDEOGRAPHER
        </Text>
      </Canvas>

      <div
        ref={subtitleRef}
        className="absolute bottom-10 w-full text-center text-lg font-bold"
        style={{
          color: "linear-gradient(to right, #FFD700, #FF4500)",
          textShadow: "0 4px 6px rgba(0, 0, 0, 0.6), 0 1px 3px rgba(255, 255, 255, 0.6)",
          perspective: "1000px",
        }}
      >

      </div>
    </header>
  );
};

export default Header;
