import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ScrollAnimation = ({ children, className = '', delay = 0, direction = 'up' }) => {
  const [ref, isVisible] = useScrollAnimation({ once: true });

  const getAnimationClass = () => {
    if (!isVisible) {
      return direction === 'up' 
        ? 'opacity-0 translate-y-10' 
        : direction === 'down'
        ? 'opacity-0 -translate-y-10'
        : direction === 'left'
        ? 'opacity-0 translate-x-10'
        : 'opacity-0 -translate-x-10';
    }
    return 'opacity-100 translate-y-0 translate-x-0';
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${getAnimationClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;

