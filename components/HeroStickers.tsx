"use client";

import { useState, useEffect } from 'react';
import StickerPeel from '@/components/StickerPeel';

/**
 * HeroStickers component with responsive positions
 * - Hidden on mobile (< 768px)
 * - Tablet version (768px - 1023px): Reduced set with adjusted positions for narrower screens
 * - Desktop version (>= 1024px): Full set with original positions
 */
export default function HeroStickers() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render stickers on server-side to prevent FOUC
  if (!mounted) {
    return null;
  }

  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="relative w-full h-full pointer-events-auto">

        {/* TABLET VERSION (768px - 1023px) - Adjusted positions for narrower screens */}
        <div className="hidden md:block lg:hidden">
          {/* Left side - adjusted for tablet */}
          <StickerPeel
            imageSrc="/stickers/uade-full.svg"
            width={110}
            rotate={0}
            peelDirection={0}
            initialPosition={{ x: 60, y: 150 }}
          />
          <StickerPeel
            imageSrc="/stickers/pizza.svg"
            width={55}
            rotate={20}
            peelDirection={-50}
            initialPosition={{ x: 40, y: 280 }}
          />
          <StickerPeel
            imageSrc="/stickers/tailwindcss.svg"
            width={60}
            rotate={-15}
            peelDirection={-45}
            initialPosition={{ x: 80, y: 480 }}
          />

          {/* Right side - adjusted for tablet */}
          <StickerPeel
            imageSrc="/stickers/paisanos-full.svg"
            width={110}
            rotate={0}
            peelDirection={0}
            initialPosition={{ x: 600, y: 150 }}
          />
          <StickerPeel
            imageSrc="/stickers/laptop.svg"
            width={65}
            rotate={-10}
            peelDirection={-60}
            initialPosition={{ x: 680, y: 280 }}
          />
          <StickerPeel
            imageSrc="/stickers/gatitos.svg"
            width={60}
            rotate={8}
            peelDirection={55}
            initialPosition={{ x: 620, y: 480 }}
          />
        </div>

        {/* DESKTOP VERSION (>= 1024px) - Original full set */}
        <div className="hidden lg:block">
          {/* Left side - clustered on the left */}
          <StickerPeel
            imageSrc="/stickers/javascript.svg"
            width={70}
            rotate={15}
            peelDirection={-30}
            initialPosition={{ x: 80, y: 140 }}
          />
          <StickerPeel
            imageSrc="/stickers/pizza.svg"
            width={65}
            rotate={20}
            peelDirection={-50}
            initialPosition={{ x: 100, y: 260 }}
          />
          <StickerPeel
            imageSrc="/stickers/uade-full.svg"
            width={140}
            rotate={0}
            peelDirection={0}
            initialPosition={{ x: 160, y: 190 }}
          />
          <StickerPeel
            imageSrc="/stickers/taylorswift.svg"
            width={75}
            rotate={-10}
            peelDirection={-35}
            initialPosition={{ x: 120, y: 560 }}
          />
          <StickerPeel
            imageSrc="/stickers/pm-badge.svg"
            width={75}
            rotate={5}
            peelDirection={-40}
            initialPosition={{ x: 240, y: 520 }}
          />
          <StickerPeel
            imageSrc="/stickers/v0.svg"
            width={70}
            rotate={10}
            peelDirection={-50}
            initialPosition={{ x: 240, y: 600 }}
          />
          <StickerPeel
            imageSrc="/stickers/tailwindcss.svg"
            width={70}
            rotate={-15}
            peelDirection={-45}
            initialPosition={{ x: 200, y: 660 }}
          />

          {/* Right side - clustered on the right */}
          <StickerPeel
            imageSrc="/stickers/react-logo.svg"
            width={80}
            rotate={12}
            peelDirection={45}
            initialPosition={{ x: 1140, y: 170 }}
          />
          <StickerPeel
            imageSrc="/stickers/laptop.svg"
            width={80}
            rotate={-10}
            peelDirection={-60}
            initialPosition={{ x: 1240, y: 140 }}
          />
          <StickerPeel
            imageSrc="/stickers/paisanos-full.svg"
            width={140}
            rotate={0}
            peelDirection={0}
            initialPosition={{ x: 1160, y: 230 }}
          />
          <StickerPeel
            imageSrc="/stickers/nextjs-logo.svg"
            width={75}
            rotate={-8}
            peelDirection={60}
            initialPosition={{ x: 1120, y: 540 }}
          />
          <StickerPeel
            imageSrc="/stickers/figma.svg"
            width={70}
            rotate={-15}
            peelDirection={30}
            initialPosition={{ x: 1240, y: 570 }}
          />
          <StickerPeel
            imageSrc="/stickers/gatitos.svg"
            width={70}
            rotate={8}
            peelDirection={55}
            initialPosition={{ x: 1180, y: 650 }}
          />
        </div>
      </div>
    </div>
  );
}
