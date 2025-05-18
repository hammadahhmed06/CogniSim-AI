import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

/**
 * Hook that provides smooth animation transitions when theme changes
 * Use this for components that need special treatment during theme transition
 */
export function useAnimatedTheme() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // After mounting, we can safely show the UI that depends on the theme
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Add transition effect when theme changes
  useEffect(() => {
    if (mounted) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 400); // Match transition duration in CSS
      
      return () => clearTimeout(timer);
    }
  }, [theme, mounted]);
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  
  return {
    theme,
    isDark: theme === 'dark',
    isLight: theme === 'light',
    isTransitioning,
    mounted,
    toggleTheme,
  };
}

export default useAnimatedTheme; 