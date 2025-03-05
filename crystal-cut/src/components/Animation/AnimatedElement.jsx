import React, { useState, useEffect, useRef } from 'react';

const AnimatedElement = ({ children, animationClass, setAnimationStarted }) => {
    // animationClass, provide the class name you have created.
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setAnimationStarted(true)
          observer.unobserve(elementRef.current); // Stop observing once animated
        }
      },
      {
        root: null, // Use the browser viewport as the root
        rootMargin: '0px', // No margin around the root
        threshold: 0.3, // 50% of the element must be visible to trigger
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current); // Clean up on unmount
      }
    };
  }, []); // Empty dependency array ensures this runs only once on mount and unmount

  return (
    <div
      ref={elementRef}
      className={` ${isVisible ? animationClass : ''}`}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;
