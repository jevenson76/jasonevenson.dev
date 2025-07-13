'use client';

import { useState, useEffect } from 'react';
import { Splash } from './Splash';

export const SplashWrapper = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  if (!showSplash) return null;

  return <Splash onComplete={handleSplashComplete} />;
};