import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const sentences = [
  "Hello Everyone!",
  "I'm Anik!",
  "An ardent visual storyteller and a code craftsman.",
  "Through the lens and beyond the code."
];

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
  const [currentSentence, setCurrentSentence] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [animationPhase, setAnimationPhase] = useState('typing');
  const stickyHeaderRef = useRef();

  useEffect(() => {
    let typingTimer;
    let phaseTimer;

    const fullText = sentences[currentSentence];
    let index = 0;

    typingTimer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingTimer);
        setAnimationPhase('waiting');

        phaseTimer = setTimeout(() => {
          setAnimationPhase('vanishing');

          setTimeout(() => {
            setDisplayText('');
            setCurrentSentence(prev => (prev + 1) % sentences.length);
            setAnimationPhase('typing');
          }, 500);
        }, 2000);
      }
    }, 100);

    return () => {
      clearInterval(typingTimer);
      clearTimeout(phaseTimer);
    };
  }, [currentSentence]);

  useEffect(() => {
    // Sticky header scroll effect
    gsap.to(stickyHeaderRef.current, {
      backgroundColor: "#000",
      color: "#FFD700",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
      scrollTrigger: {
        trigger: stickyHeaderRef.current,
        start: "top top",
        end: "+=300",
        scrub: true,
      },
    });
  }, []);

  const handleNavClick = (event, target) => {
    event.preventDefault();
    gsap.to(window, {
      duration: 1,
      scrollTo: target,
      ease: "power2.inOut",
    });

    // Add GSAP effect to the clicked link
    gsap.fromTo(
      event.target,
      { scale: 1 },
      {
        scale: 1.2,
        duration: 0.3,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
      }
    );
  };

  return (
    <>
      
      {/* Main Header Section */}
      <header id="home" className="relative h-screen bg-black text-white">
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
        </Canvas>

        {/* Animated Typography */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1
            className={`text-5xl font-extrabold text-transparent bg-clip-text 
            bg-gradient-to-r from-green-400 to-blue-500 text-center
            transition-all duration-500
            ${animationPhase === 'typing' ? 'opacity-100 translate-y-0' : 
              animationPhase === 'vanishing' ? 'opacity-0 -translate-y-10' : 
              'opacity-100'}`}
          >
            {displayText}
          </h1>
        </div>
      </header>
    </>
  );
};

export default Header;
