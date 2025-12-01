"use client";

import { useRef, useState } from "react";

export default function AboutMe() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cardMousePosition, setCardMousePosition] = useState({ x: 0, y: 0 });
  const [isCardHovered, setIsCardHovered] = useState(false);

  // Track mouse in entire section for spotlight
  const handleSectionMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
  };

  // Track mouse on card for tilt effect
  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setCardMousePosition({ x, y });

    // Calculate tilt based on mouse position
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5; // Max 5deg tilt
    const rotateY = ((x - centerX) / centerX) * 5;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
  };

  const handleCardMouseLeave = () => {
    setIsCardHovered(false);
    if (cardRef.current) {
      cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)";
    }
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-labelledby="about-heading"
      className="min-h-screen flex items-center justify-center px-4 py-20 relative"
      onMouseMove={handleSectionMouseMove}
    >
      {/* Section-wide spotlight effect */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(62, 111, 99, 0.15), transparent 70%)`,
        }}
      />

      <div className="max-w-4xl w-full relative z-10">
        <h2 id="about-heading" className="text-4xl font-bold mb-12 text-center">
          About Me
        </h2>

        <div
          ref={cardRef}
          onMouseMove={handleCardMouseMove}
          onMouseEnter={() => setIsCardHovered(true)}
          onMouseLeave={handleCardMouseLeave}
          className="relative p-8 rounded-3xl overflow-hidden transition-all duration-300 ease-out bg-card border border-border"
          style={{
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          {/* Card-specific spotlight that intensifies on hover */}
          <div
            className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
            style={{
              opacity: isCardHovered ? 0.6 : 0,
              background: `radial-gradient(circle 300px at ${cardMousePosition.x}px ${cardMousePosition.y}px, rgba(62, 111, 99, 0.2), transparent 80%)`,
            }}
          />

          {/* Animated gradient border glow on hover */}
          <div
            className="absolute inset-0 rounded-3xl transition-opacity duration-300 pointer-events-none"
            style={{
              opacity: isCardHovered ? 1 : 0,
              background: `radial-gradient(circle 400px at ${cardMousePosition.x}px ${cardMousePosition.y}px, rgba(62, 111, 99, 0.3), transparent 60%)`,
              filter: "blur(20px)",
            }}
          />

          {/* Content */}
          <div className="relative z-10">
            <p className="text-lg text-foreground/90 leading-relaxed">
              I'm Juli, a Computer Engineer and Product Manager. I love thinking
              about products end-to-end — from strategy and user experience to
              the technical details that make everything run smoothly and
              elegantly. Even though I lead product today, I still have that tech
              mindset that pushes me to prototype, automate, and build solutions
              that truly solve real problems. I'm passionate about teaching,
              exploring new technologies, and using AI to power ideas that create
              meaningful impact. When I work, I look for clarity, creativity, and
              purpose. When I create, I want technology to feel human.
            </p>
          </div>

          {/* Subtle inner glow */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              boxShadow: "inset 0 0 60px rgba(62, 111, 99, 0.1)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
