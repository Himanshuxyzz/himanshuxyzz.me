"use client";

import { ReactLenis } from "lenis/react";

export const SmoothScroll = ({ children }) => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.075,
        duration: 1.2,
        smoothTouch: true,
        requestAnimationFrame: true,
      }}
    >
      {children}
    </ReactLenis>
  );
};
