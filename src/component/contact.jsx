// import React, { useEffect,useRef } from 'react';
// import { Mail, Phone, MapPin } from 'lucide-react';
// import { gsap } from 'gsap';
// import emailjs from '@emailjs/browser';

// const Contact = ({ isVisible }) => {
//   const form = useRef();
//   const publicKey="AZwFZDs-mFNsnZSoQ";
//   const serviceId="service_sepz9uo";
//   const templateId="template_naphlwq";



//   const sendEmail = (e) => {
//     e.preventDefault();
//   emailjs
//   .sendForm(serviceId, templateId, form.current, {
//     publicKey: publicKey,
//   })
//   .then(
//     () => {
//       console.log('SUCCESS!');
//     },
//     (error) => {
//       console.log('FAILED...', error.text);
//     },
//   );
// };





//   // GSAP animations for section appearance
//   useEffect(() => {
//     if (isVisible) {
//       gsap.from('.contact-title', {
//         opacity: 0,
//         y: -50,
//         duration: 1,
//         ease: 'power2.out',
//       });

//       gsap.from('.contact-item', {
//         opacity: 0,
//         y: 20,
//         stagger: 0.2,
//         duration: 1,
//         ease: 'power2.out',
//       });

//       gsap.from('.contact-form input, .contact-form textarea, .contact-form button', {
//         opacity: 0,
//         x: -50,
//         stagger: 0.1,
//         duration: 1,
//         ease: 'power2.out',
//       });
//     }
//   }, [isVisible]);

//   return (
//     <section
//       className={`min-h-screen p-8 md:p-16 transition-all duration-1000 ${
//         isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//       }`}
//       style={{
//         background: 'linear-gradient(135deg, #00b140, #006400, #000000)', // Vibrant green to dark green to black gradient
//       }}
//     >
//       <div className="max-w-4xl mx-auto">
//         <h2 className="contact-title text-4xl font-bold mb-8 text-white">Contact Me</h2>
//         <div className="grid md:grid-cols-2 gap-8">
//           <div>
//             <h3 className="text-2xl mb-4 text-white">Get in Touch</h3>
//             <div className="space-y-4">
//               <div className="contact-item flex items-center gap-2 text-white">
//                 <Mail className="w-5 h-5" />
//                 <p>anikmahedihasan5@gmail.com</p>
//               </div>
//               <div className="contact-item flex items-center gap-2 text-white">
//                 <Phone className="w-5 h-5" />
//                 <p>+8801637221561</p>
//               </div>
//               <div className="contact-item flex items-center gap-2 text-white">
//                 <MapPin className="w-5 h-5" />
//                 <p>Dhaka, Bangladesh</p>
//               </div>
//             </div>
//           </div>
//           <form ref={form} onSubmit={sendEmail} className="contact-form space-y-4" >
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="w-full p-2 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="w-full p-2 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//             <textarea
//               placeholder="Your Message"
//               rows={4}
//               className="w-full p-2 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//             <button className="bg-green-600 px-6 py-2 rounded hover:bg-green-700 transition-colors">
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { gsap } from 'gsap';
import emailjs from '@emailjs/browser';

const Contact = ({ isVisible }) => {
  const form = useRef();
  const [message, setMessage] = useState(""); // State for feedback message
  const publicKey = "AZwFZDs-mFNsnZSoQ";
  const serviceId = "service_sepz9uo";
  const templateId = "template_naphlwq";

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        () => {
          setMessage("Your message has been sent successfully!"); // Success message
          form.current.reset(); // Clear the form fields
        },
        (error) => {
          setMessage("Failed to send the message. Please try again."); // Error message
          console.error('EmailJS error:', error.text);
        }
      );
  };

  // GSAP animations for section appearance
  useEffect(() => {
    if (isVisible) {
      gsap.from('.contact-title', {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: 'power2.out',
      });

      gsap.from('.contact-item', {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        duration: 1,
        ease: 'power2.out',
      });

      gsap.from('.contact-form input, .contact-form textarea, .contact-form button', {
        opacity: 0,
        x: -50,
        stagger: 0.1,
        duration: 1,
        ease: 'power2.out',
      });
    }
  }, [isVisible]);

  return (
    <section
      className={`min-h-screen p-8 md:p-16 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{
        background: 'linear-gradient(180deg, #000000, #1a1a1a)', // Gradient background
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="contact-title text-4xl font-bold mb-8 text-white">Contact Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl mb-4 text-white">Get in Touch</h3>
            <div className="space-y-4">
              <div className="contact-item flex items-center gap-2 text-white">
                <Mail className="w-5 h-5" />
                <p>anikmahedihasan5@gmail.com</p>
              </div>
              <div className="contact-item flex items-center gap-2 text-white">
                <Phone className="w-5 h-5" />
                <p>+8801637221561</p>
              </div>
              <div className="contact-item flex items-center gap-2 text-white">
                <MapPin className="w-5 h-5" />
                <p>Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail} className="contact-form space-y-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full p-2 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full p-2 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              className="w-full p-2 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded hover:bg-green-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        {message && (
          <p className="mt-4 text-center text-white">{message}</p> // Feedback message
        )}
      </div>
    </section>
  );
};

export default Contact;
