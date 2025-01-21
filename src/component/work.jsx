import React, { useState } from 'react';
import { gsap } from 'gsap';

// Import images
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/n1.jpg';
import img6 from '../assets/6.jpg';
import img7 from '../assets/7.jpg';
import img10 from '../assets/d1.jpg';
import img11 from '../assets/g3.jpg';
import img12 from '../assets/m2.jpg';
import img13 from '../assets/a2.jpg';

const Work = ({ isVisible }) => {
  const portfolioImages = [img3, img4, img5, img6, img7, img10,img11,img12,img13];
  const [currentImage, setCurrentImage] = useState(null);

  const handleImageClick = (img) => {
    setCurrentImage(img);
    // GSAP animation for clicked image
    gsap.to('.image-popup', {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  return (
    <section
      className={`min-h-screen p-8 md:p-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ background: 'linear-gradient(to bottom, #000000, #000400)' }} // Black and Green gradient background
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolioImages.map((img, index) => (
            <div
              key={index}
              className="relative group overflow-hidden cursor-pointer"
              onClick={() => handleImageClick(img)}
            >
              <img
                src={img}
                alt={`Portfolio ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg">View Project</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image Popup */}
        {currentImage && (
          <div className="image-popup fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 scale-90 transition-all duration-500">
            <div className="relative max-w-3xl p-4 bg-white rounded-lg shadow-lg">
              <img src={currentImage} alt="Popup Image" className="w-full h-auto object-cover" />
              <button
                onClick={() => setCurrentImage(null)}
                className="absolute top-4 right-4 text-white text-3xl bg-black rounded-full p-2"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Work;
