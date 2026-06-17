import React from 'react';
import useLenis from '../hooks/useLenis';

/**
 * SmoothScroll component wraps the application and initializes Lenis smooth scrolling.
 */
export default function SmoothScroll({ children }) {
  useLenis();
  return <div className="lenis-viewport">{children}</div>;
}
