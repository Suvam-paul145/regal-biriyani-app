import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register plugins once
gsap.registerPlugin(ScrollTrigger);

/**
 * React hook to safely register GSAP animations within a gsap.context
 * @param {Function} effectCallback - Callback containing GSAP animations
 * @param {Array} dependencies - Hook dependency array
 */
export default function useGSAP(effectCallback, dependencies = []) {
  useEffect(() => {
    const ctx = gsap.context(effectCallback);
    return () => ctx.revert(); // Automatically reverts all animations and kills ScrollTriggers created during the effect
  }, dependencies);
}
