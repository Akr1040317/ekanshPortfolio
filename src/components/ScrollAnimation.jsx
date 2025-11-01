import React, { useEffect, useRef } from 'react';

const ScrollAnimation = ({ children, className = '' }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const currentElement = elementRef.current;
    if (currentElement) {
      currentElement.style.opacity = '0';
      currentElement.style.transform = 'translateY(30px)';
      currentElement.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollAnimation;

