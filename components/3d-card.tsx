"use client";

import { useState, useRef } from "react";
import { motion, useSpring, MotionValue } from "framer-motion";

interface ThreeDCardProps {
  children: React.ReactNode;
  className?: string;
}

export function ThreeDCard({ children, className }: ThreeDCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const springConfig = { damping: 15, stiffness: 300 };
  const rotateXSpring: MotionValue<number> = useSpring(rotateX, springConfig);
  const rotateYSpring: MotionValue<number> = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const rotateXValue = ((mouseY - centerY) / (rect.height / 2)) * 5; // subtle rotation
    const rotateYValue = ((mouseX - centerX) / (rect.width / 2)) * 5;

    setRotateX(-rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        rotateX: rotateXSpring,
        rotateY: rotateYSpring,
        perspective: 1000,
      }}
    >
      {children}
    </motion.div>
  );
}
