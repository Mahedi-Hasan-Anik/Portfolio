import React, { useState, useEffect, useRef } from "react"; 
import { Instagram, Twitter } from "lucide-react";
import { gsap } from "gsap";

// Import images
import anik1 from "../assets/9.jpg";
import anik2 from "../assets/15.jpg";
import anik3 from "../assets/11.jpg";
import anik4 from "../assets/aaanik2.jpg";
import anik5 from "../assets/13.jpg";
import anik6 from "../assets/anik.jpg";

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  const images = [anik1, anik6, anik3, anik4];
  const texts = [
    "Photography is the art of capturing life’s fleeting moments, freezing them into memories that remind us to appreciate the beauty in every detail.",
    "Life is a collection of moments, and photography lets us pause and reflect on the stories they tell.",
    "Through the lens of a camera, we see the world not just as it is, but as it could be full of wonder, possibility, and beauty.",
    "Photography is life’s way of whispering, 'Don’t forget to notice the small things, for they carry the greatest meaning.'"
  ];

  useEffect(() => {
    // Text animation
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
    );

    // Image animation
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }
    );
  }, [currentImageIndex]);

  useEffect(() => {
    // Change image and text every 3 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex items-center justify-center overflow-hidden">
      <div className="flex flex-col md:flex-row items-center max-w-5xl w-full px-4 gap-12">
        {/* Image Section - Reduced size */}
        <div
          ref={imageRef}
          className="w-full md:w-2/5 h-64 md:h-[350px] overflow-hidden rounded-lg shadow-lg relative"
        >
          <img
            src={images[currentImageIndex]}
            alt="Anik"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Text Section - Increased size */}
        <div className="flex flex-col text-center md:text-left gap-6 w-full md:w-3/5">
          <div ref={textRef}>
            <p className="text-lg md:text-xl text-yellow-400 font-semibold">
              {texts[currentImageIndex]}
            </p>
          </div>

          {/* Social Icons */}
          {/* <div className="flex justify-center md:justify-start gap-6 mt-6">
            <Instagram className="w-6 h-6 text-yellow-400 hover:scale-125 transition-transform duration-300 cursor-pointer" />
            <Twitter className="w-6 h-6 text-yellow-400 hover:scale-125 transition-transform duration-300 cursor-pointer" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
