"use client";

import AnimatedContent from "@/components/AnimatedContent";
import TextType from "@/components/TextType";
import HeroStickers from "@/components/HeroStickers";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 px-4 relative overflow-hidden">
      {/* Interactive draggable stickers - randomly positioned in groups of 3 */}
      <HeroStickers />

      {/* Content */}
      <div className="text-center max-w-5xl mx-auto relative z-10">
        <TextType
          text="Julieta Habif"
          as="h1"
          className="text-6xl md:text-7xl font-bold mb-6"
          textStyle={{
            background: 'linear-gradient(to right, var(--william), var(--congo))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
          typingSpeed={100}
          loop={true}
          showCursor={true}
          cursorCharacter="|"
          initialDelay={500}
        />

        <AnimatedContent delay={2.5} distance={30} duration={0.6}>
          <p className="text-xl text-foreground/90 max-w-2xl mx-auto mb-8">
            Product Manager &amp; Developer
          </p>
        </AnimatedContent>

        <AnimatedContent delay={3} distance={30} duration={0.6}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={(event) => {

    // Hacer scroll a la sección About
    const element = document.querySelector('#about');
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }}
  className="
    px-8 py-3 rounded-full font-semibold text-white
    bg-primary/90
    bg-gradient-to-r from-primary/80 to-primary
    border border-white/10 backdrop-blur-md
    shadow-lg shadow-primary/10
    hover:scale-105 hover:shadow-primary/30
    transition-all duration-300
  "
            >
              Get to know me
            </button>
          
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
