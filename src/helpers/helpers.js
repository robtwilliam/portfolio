import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const getImageUrl = (imageName) => {
    return new URL(`/src/assets/images/${imageName}`, import.meta.url).href;
}


export const useClickjackingProtection = () => {
  useEffect(() => {
    if (window.top !== window.self) {
      // If the app is embedded in an iframe, redirect to a safe page
      window.top.location = window.location.href;
    }
  }, []);
};


export const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
};


export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0
    });
  }, [pathname]);

  return null;
}