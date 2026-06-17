import React, { useEffect, useState } from 'react';

/**
 * MouseGlow component creates a subtle luxury gold glow that tracks the user's mouse.
 */
export default function MouseGlow() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setOpacity(1);
    };

    const handleMouseLeave = () => {
      setOpacity(0);
    };

    window.addEventListener('mousemove', updatePosition);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500"
      style={{
        opacity: opacity,
        background: `radial-gradient(500px at ${position.x}px ${position.y}px, rgba(212, 175, 55, 0.06), transparent 80%)`,
      }}
    />
  );
}
