'use client';

import { useEffect } from 'react';
import { toast } from 'sonner';

export function VersionNotifier() {
  useEffect(() => {
    const lastBuildTime = localStorage.getItem('lastBuildTime');
    const currentBuildTime = process.env.NEXT_PUBLIC_BUILD_TIME;

    if (lastBuildTime !== currentBuildTime) {
      if (lastBuildTime) { // Only show if previous build time exists
        toast.success('Website updated with new affirmations! 💖', {
          duration: 10000,
          position: 'top-center'
        });
      }
      localStorage.setItem('lastBuildTime', currentBuildTime);
    }
  }, []);

  return null;
}