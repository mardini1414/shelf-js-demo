import { useEffect, useState } from 'react';

const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0;

export default function useDevice() {
  const [width, setWidth] = useState(window.innerWidth);
  const [isTouch, setIsTouch] = useState(isTouchDevice);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setIsTouch(isTouchDevice);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { width, isTouch };
}
