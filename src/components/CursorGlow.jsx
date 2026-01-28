import React, { useEffect, useRef } from "react";

const CursorGlow = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const lastMouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle class
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 4 + 2;
        this.speedX = (Math.random() - 0.5) * 2;
        this.speedY = (Math.random() - 0.5) * 2;
        this.life = 1;
        this.decay = Math.random() * 0.02 + 0.015;

        // Bioluminescence colors - cyan, purple, pink, blue
        const colors = [
          { r: 0, g: 245, b: 255 }, // cyan
          { r: 139, g: 92, b: 246 }, // purple
          { r: 255, g: 0, b: 110 }, // pink
          { r: 59, g: 130, b: 246 }, // blue
          { r: 0, g: 255, b: 200 }, // teal
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= this.decay;
        this.size *= 0.98;
      }

      draw(ctx) {
        if (this.life <= 0) return;

        const alpha = this.life * 0.8;

        // Glow effect
        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.size * 3,
        );
        gradient.addColorStop(
          0,
          `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${alpha})`,
        );
        gradient.addColorStop(
          0.4,
          `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${alpha * 0.4})`,
        );
        gradient.addColorStop(
          1,
          `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`,
        );

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core bright point
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.9})`;
        ctx.fill();
      }
    }

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      // Calculate movement distance
      const dx = mouseRef.current.x - lastMouseRef.current.x;
      const dy = mouseRef.current.y - lastMouseRef.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Only create particles if moving fast enough
      if (distance > 2) {
        // Create particles based on movement speed
        const particleCount = Math.min(Math.floor(distance / 3), 5);
        for (let i = 0; i < particleCount; i++) {
          const offsetX = (Math.random() - 0.5) * 10;
          const offsetY = (Math.random() - 0.5) * 10;
          particlesRef.current.push(
            new Particle(
              mouseRef.current.x + offsetX,
              mouseRef.current.y + offsetY,
            ),
          );
        }

        // Limit particles
        if (particlesRef.current.length > 150) {
          particlesRef.current = particlesRef.current.slice(-150);
        }
      }

      lastMouseRef.current = { x: mouseRef.current.x, y: mouseRef.current.y };
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    let animationId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.update();
        particle.draw(ctx);
        return particle.life > 0;
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
};

export default CursorGlow;
