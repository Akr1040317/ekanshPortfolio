import React, { useLayoutEffect, useRef } from 'react';

const ScrollAnimation = ({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  duration = 0.6,
  threshold = 0.15,
  once = true
}) => {
  const elementRef = useRef(null);

  useLayoutEffect(() => {
    const observerOptions = {
      threshold,
      rootMargin: '0px 0px -10% 0px'
    };

    const rafIds = new Map();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = window.requestAnimationFrame(() => {
            entry.target.classList.add('is-visible');
            if (once) {
              observer.unobserve(entry.target);
              rafIds.delete(entry.target);
            }
          });
          rafIds.set(entry.target, id);
        } else if (!once) {
          entry.target.classList.remove('is-visible');
        }
      });
    }, observerOptions);

    const currentElement = elementRef.current;
    if (currentElement) {
      currentElement.classList.add('scroll-reveal', `scroll-${animation}`);
      currentElement.style.setProperty('--scroll-delay', `${delay}s`);
      currentElement.style.setProperty('--scroll-duration', `${duration}s`);
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
        const scheduledId = rafIds.get(currentElement);
        if (scheduledId) {
          window.cancelAnimationFrame(scheduledId);
          rafIds.delete(currentElement);
        }
      }
    };
  }, [animation, delay, duration, once, threshold]);

  return (
    <div ref={elementRef} className={`${className} scroll-wrapper`.trim()}>
      {children}
    </div>
  );
};

export default ScrollAnimation;
