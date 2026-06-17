import React, { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track mouse to add subtle interaction
    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Particle types: 'gold', 'saffron', 'cardamom', 'clove'
    class Particle {
      constructor() {
        this.reset();
        // Stagger spawn heights on initialization
        this.y = Math.random() * height;
      }

      reset() {
        this.x = Math.random() * width;
        this.y = height + 20; // Spawn just offscreen bottom
        this.size = Math.random() * 3 + 1;
        this.speedY = -(Math.random() * 0.4 + 0.2); // Slow rise
        this.speedX = Math.random() * 0.3 - 0.15;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.01;
        
        // Determine type of particle
        const rand = Math.random();
        if (rand < 0.6) {
          this.type = 'gold'; // Gold dust
          this.color = `rgba(${212 + Math.random() * 40}, ${175 + Math.random() * 40}, 55, ${this.opacity})`;
          this.size = Math.random() * 2 + 0.8;
        } else if (rand < 0.8) {
          this.type = 'saffron'; // Red saffron thread
          this.color = `rgba(${180 + Math.random() * 75}, 30, 30, ${this.opacity * 1.2})`;
          this.length = Math.random() * 8 + 4;
          this.size = 1.2;
        } else {
          this.type = 'spice'; // Silhouetted cardamoms or cloves
          this.color = `rgba(46, 27, 18, ${this.opacity * 0.8})`; // Dark brown
          this.size = Math.random() * 3 + 2;
        }
      }

      update() {
        // Linear movement
        this.y += this.speedY;
        
        // Apply mouse inertia
        const dx = mouse.targetX - mouse.x;
        mouse.x += dx * 0.05;
        const dy = mouse.targetY - mouse.y;
        mouse.y += dy * 0.05;

        // Subtle wind drift based on mouse position
        const wind = (mouse.x - width / 2) / (width / 2) * 0.15;
        this.x += this.speedX + wind;

        // Rotate
        this.rotation += this.rotationSpeed;

        // Reset if offscreen
        if (this.y < -20 || this.x < -20 || this.x > width + 20) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.size;

        if (this.type === 'gold') {
          // Draw circular glowing speck
          ctx.shadowBlur = 4;
          ctx.shadowColor = 'rgba(212, 175, 55, 0.4)';
          ctx.beginPath();
          ctx.arc(0, 0, this.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (this.type === 'saffron') {
          // Draw thin curved stroke
          ctx.beginPath();
          ctx.moveTo(-this.length / 2, 0);
          ctx.quadraticCurveTo(0, this.length / 3, this.length / 2, 0);
          ctx.stroke();
        } else {
          // Draw tiny cardamom/clove seed shape (ellipse or cross)
          ctx.beginPath();
          ctx.ellipse(0, 0, this.size, this.size / 2, 0, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }
    }

    const maxParticles = Math.min(60, Math.floor((width * height) / 20000));
    const particles = Array.from({ length: maxParticles }, () => new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle warm base gradient
      const grad = ctx.createLinearGradient(0, height, 0, 0);
      grad.addColorStop(0, 'rgba(11, 11, 11, 0.95)');
      grad.addColorStop(0.3, 'rgba(11, 11, 11, 0.92)');
      grad.addColorStop(1, 'rgba(11, 11, 11, 0.96)');
      
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[1]"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
