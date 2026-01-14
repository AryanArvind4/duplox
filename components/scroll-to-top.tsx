"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Multiple attempts to ensure scroll to top works after page render
    // Immediate scroll
    window.scrollTo(0, 0);
    
    // Delayed scroll to handle async content loading
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
    
    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}

