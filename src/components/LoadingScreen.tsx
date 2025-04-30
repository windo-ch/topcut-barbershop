
import { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

export const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const isMobile = useIsMobile();

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
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center transition-opacity duration-500">
      <div className="animate-pulse">
        <img 
          src="/lovable-uploads/85a8bb7a-af46-4339-8a71-659b6f5fa52c.png" 
          alt="Top Cut Barbershop" 
          className={isMobile ? "w-full px-4" : "h-64 md:h-80"} 
        />
      </div>
    </div>
  );
};
