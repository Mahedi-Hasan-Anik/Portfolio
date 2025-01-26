import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import images
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/n1.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img10 from "../assets/d1.jpg";
import img11 from "../assets/g3.jpg";
import img12 from "../assets/m2.jpg";
import img13 from "../assets/a2.jpg";
import img14 from "../assets/a6.jpg";
import img15 from "../assets/gg2.jpg";
import img16 from "../assets/5.jpg";
import img17 from "../assets/a5.jpg";




gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(null);

  const portfolioImages = [
    img3,
    img4,
    img15,
    img6,
    img7,
    img17,
    img11,
    img12,
    img13,
    img14,
    img5,
    img10,
    img16,
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;

    if (section && container) {
      const scrollTween = gsap.to(container, {
        x: () => -(container.scrollWidth - section.offsetWidth), // Scroll horizontally
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${container.scrollWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      return () => {
        scrollTween.kill();
      };
    }
  }, []);

  const handleImageClick = (img) => {
    setCurrentImage(img);
    gsap.to(".image-popup", {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden min-h-screen bg-gradient-to-r from-black to-gray-900"
    >
      <div
        ref={containerRef}
        className="flex h-full absolute top-0 left-0"
        style={{ gap: "0" }} // Ensures no gap between image containers
      >
        {portfolioImages.map((img, index) => (
          <div
            key={index}
            className="relative cursor-pointer flex-shrink-0"
            onClick={() => handleImageClick(img)}
            style={{
              width: "auto", // Dynamically fit the container width to the image
              height: "100%", // Ensure consistent height
            }}
          >
            <img
              src={img}
              alt={`Portfolio ${index + 1}`}
              className="w-full h-full object-contain transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Image Popup */}
      {currentImage && (
        <div className="image-popup fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 scale-90 transition-all duration-500">
          <div className="relative max-w-3xl p-4 bg-white rounded-lg shadow-lg">
            <img
              src={currentImage}
              alt="Popup Image"
              className="w-full h-auto object-contain"
            />
            <button
              onClick={() => setCurrentImage(null)}
              className="absolute top-4 right-4 text-white text-3xl bg-black rounded-full p-2"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
