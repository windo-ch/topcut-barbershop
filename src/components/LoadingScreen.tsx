
import { useState, useEffect } from 'react';

export const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Set timeout to hide the loading screen after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center transition-opacity duration-500">
      <div className="animate-bounce mb-4">
        <img 
          src="/lovable-uploads/03f1b0f0-4ddd-43cd-89ff-ce39f163e621.png" 
          alt="Top Cut Barbershop" 
          className="h-32 md:h-40" 
        />
      </div>
      <div className="animate-pulse mt-8 text-white text-lg font-medium">
        Loading...
      </div>
    </div>
  );
};
