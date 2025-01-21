// import React, { useState, useEffect } from 'react';
// import { Instagram, Twitter } from 'lucide-react';
// import { gsap } from 'gsap';

// // Import images
// import anik1 from '../assets/9.jpg';
// import anik2 from "../assets/15.jpg";
// import anik3 from "../assets/11.jpg";
// import anik4 from "../assets/12.jpg";
// import anik5 from "../assets/13.jpg";

// const About = ({ isVisible }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const images = [
//     anik1,
//     anik2,
//     anik3,
//     anik4,
//     anik5,
//   ];

//   const handleImageClick = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   useEffect(() => {
//     // GSAP animation for section visibility
//     gsap.fromTo(
//       '.about-section',
//       {
//         opacity: 0,
//         y: 50,
//       },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         ease: 'power2.out',
//         delay: 0.3,
//       }
//     );

//     // GSAP animation for images
//     gsap.fromTo(
//       '.image-box',
//       {
//         scale: 0.8,
//         opacity: 0,
//       },
//       {
//         scale: 1,
//         opacity: 1,
//         duration: 1.5,
//         ease: 'bounce.out',
//         delay: 0.5,
//       }
//     );

//     // GSAP text animation
//     gsap.fromTo(
//       '.about-text',
//       {
//         opacity: 0,
//         y: 50,
//       },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1.5,
//         ease: 'power2.out',
//         delay: 0.5,
//       }
//     );

//     // GSAP hover effect for About Me title
//     gsap.fromTo(
//       '.about-title',
//       {
//         color: '#fff',
//         scale: 1,
//       },
//       {
//         scale: 1.1,
//         color: '#00FF00',  // Green on hover
//         duration: 0.3,
//         ease: 'power2.out',
//         paused: true,
//         repeat: 0,
//       }
//     );

//     // GSAP hover effect for description paragraphs
//     gsap.fromTo(
//       '.about-paragraph',
//       {
//         color: '#fff',
//         scale: 1,
//       },
//       {
//         scale: 1.05,
//         color: '#FFD700',  // Gold on hover
//         duration: 0.3,
//         ease: 'power2.out',
//         paused: true,
//         repeat: 0,
//       }
//     );

//     // GSAP hover effect on social icons
//     gsap.to('.social-icons', {
//       scale: 1.3,
//       duration: 0.3,
//       ease: 'power2.out',
//       paused: true,
//       repeat: -1,
//       yoyo: true,
//     });
//   }, []);

//   return (
//     <section
//       className={`about-section min-h-screen p-8 md:p-16 transition-all duration-1000`}
//       style={{
//         background: 'linear-gradient(to bottom, #000000, #006400)', // Black-Green gradient background
//       }}
//     >
//       <div className="max-w-4xl mx-auto">
//         <h2 className="about-title text-4xl font-bold mb-8 text-white text-center">
//           About Me
//         </h2>
//         <div className="grid md:grid-cols-2 gap-8">
//           <div className="overflow-hidden rounded-lg image-box cursor-pointer" onClick={handleImageClick}>
//             <img
//               src={images[currentImageIndex]}
//               alt="Mahedi Hasan Anik"
//               className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
//             />
//           </div>
//           <div className="about-text text-white flex flex-col justify-center">
//             <p className="about-paragraph text-lg mb-4">
//               I am Mahedi Hasan Anik, a professional photographer specializing in capturing life's most precious moments. With over 5 years of experience, I bring creativity and technical expertise to every shoot.
//             </p>
//             <p className="about-paragraph text-lg mb-4">
//               My style combines contemporary techniques with timeless composition, ensuring each image tells a unique story.
//             </p>
//             <div className="flex items-center justify-center gap-4 mt-8 social-icons hover:scale-125">
//               <Instagram className="w-6 h-6 text-white" />
//               <Twitter className="w-6 h-6 text-white" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;



import React, { useState, useEffect } from 'react';
import { Instagram, Twitter } from 'lucide-react';
import { gsap } from 'gsap';

// Import images
import anik1 from '../assets/9.jpg';
import anik2 from "../assets/15.jpg";
import anik3 from "../assets/11.jpg";
import anik4 from "../assets/12.jpg";
import anik5 from "../assets/13.jpg";

const About = ({ isVisible }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    anik1,
    anik2,
    anik3,
    anik4,
    anik5,
  ];

  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    // GSAP animation for section visibility
    gsap.fromTo(
      '.about-section',
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power2.out',
        delay: 0.3,
      }
    );

    // GSAP animation for images
    gsap.fromTo(
      '.image-box',
      {
        scale: 0.8,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: 'bounce.out',
        delay: 0.5,
      }
    );

    // GSAP text animation
    gsap.fromTo(
      '.about-text',
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power2.out',
        delay: 0.5,
      }
    );

    // GSAP hover effect for About Me title
    gsap.fromTo(
      '.about-title',
      {
        color: '#fff',
        scale: 1,
      },
      {
        scale: 1.1,
        color: '#00FF00',  // Green on hover
        duration: 0.3,
        ease: 'power2.out',
        paused: true,
        repeat: 0,
      }
    );

    // GSAP hover effect for description paragraphs
    gsap.fromTo(
      '.about-paragraph',
      {
        color: '#fff',
        scale: 1,
      },
      {
        scale: 1.05,
        color: '#FFD700',  // Gold on hover
        duration: 0.3,
        ease: 'power2.out',
        paused: true,
        repeat: 0,
      }
    );

    // GSAP hover effect on social icons
    gsap.to('.social-icons', {
      scale: 1.3,
      duration: 0.3,
      ease: 'power2.out',
      paused: true,
      repeat: -1,
      yoyo: true,
    });

    // 3D Background animation using GSAP
    gsap.to('.background', {
      rotationY: 360,
      transformOrigin: 'center center',
      duration: 20,
      ease: 'none',
      repeat: -1,
    });

    // GSAP background color change animation
    gsap.fromTo(
      '.about-section',
      {
        background: 'linear-gradient(to bottom, #232526, #414345)', // Initial background
      },
      {
        background: 'linear-gradient(to bottom, #000000, #333333)', // Black gradient
        duration: 2,
        ease: 'power2.inOut',
      }
    );
  }, []);

  return (
    <section
      className={`about-section min-h-screen p-8 md:p-16 transition-all duration-1000 relative overflow-hidden`}
    >
      {/* 3D Background */}
      <div className="background absolute top-0 left-0 w-full h-full bg-black"></div>

      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="overflow-hidden rounded-lg image-box cursor-pointer" onClick={handleImageClick}>
            <img
              src={images[currentImageIndex]}
              alt="Mahedi Hasan Anik"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="about-text text-white flex flex-col justify-center">
            <p className="about-paragraph text-4xl text-yellow-50 mb-4">
              I am Mahedi Hasan Anik, a professional photographer specializing in capturing life's most precious moments. 
            </p>
            <p className="about-paragraph text-lg mb-4">
              My style combines contemporary techniques with timeless composition, ensuring each image tells a unique story.
            </p>
            <div className="flex items-center justify-center gap-4 mt-8 social-icons hover:scale-125">
              <Instagram className="w-6 h-6 text-white" />
              <Twitter className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
