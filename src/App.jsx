import React, { useEffect, useRef, useState } from 'react';
import Header from './component/header';
import About from './component/about';
import Work from './component/work';
import Contact from './component/contact';

const App = () => {
  const [isVisible, setIsVisible] = useState({
    about: false,
    work: false,
    contact: false
  });

  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.dataset.section]: true
          }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (workRef.current) observer.observe(workRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <div ref={aboutRef} data-section="about">
        <About isVisible={isVisible.about} />
      </div>
      <div ref={workRef} data-section="work">
        <Work isVisible={isVisible.work} />
      </div>
      <div ref={contactRef} data-section="contact">
        <Contact isVisible={isVisible.contact} />
      </div>
    </div>
  );
};

export default App;