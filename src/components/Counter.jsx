import { useState, useEffect, useRef, useCallback } from 'react';

const Counter = ({ end, duration = 2000, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  const animateCounter = useCallback(() => {
    const startTime = Date.now();
    const startValue = 0;
    const endValue = parseInt(end.toString().replace(/\D/g, ''));

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounter();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasAnimated, animateCounter]);

  const formatNumber = (num) => {
    if (end.toString().includes('+')) {
      return `${num}+`;
    }
    if (end.toString().includes('%')) {
      return `${num}%`;
    }
    return num;
  };

  return (
    <span ref={counterRef}>
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  );
};

export default Counter;

