import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the bottom of the page
    window.scrollTo(0,0);
  }, [location]); // This will trigger whenever the route changes

  return null;
};

export default ScrollTop;
