import { useRef } from "react";
import { motion } from "framer-motion";
import { useTilt, useMousePosition, useReducedMotion } from "../hooks";

interface FrameDef {
  width: number;
  height: number;
  top: string;
  left?: string;
  right?: string;
  rotate: number;
  gradient: string;
  caption: string;
  delay: number;
  depth: number; // 0-1, mayor = más parallax
}

const FRAMES: FrameDef[] = [
  {
    width: 220,
    height: 280,
    top: "8%",
    right: "8%",
    rotate: -6,
    gradient: "linear-gradient(135deg, #F1CBBF 0%, #D8B0AB 50%, #3D7886 100%)",
    caption: "Boutique Mariposa",
    delay: 0.4,
    depth: 0.8,
  },
  {
    width: 180,
    height: 220,
    top: "42%",
    right: "32%",
    rotate: 4,
    gradient: "linear-gradient(160deg, #1C4058 0%, #3D7886 60%, #A0BDC1 100%)",
    caption: "Capital Verde",
    delay: 0.6,
    depth: 1,
  },
  {
    width: 160,
    height: 200,
    top: "58%",
    right: "4%",
    rotate: 8,
    gradient: "linear-gradient(135deg, #C9A961 0%, #A88944 60%, #1C4058 100%)",
    caption: "Sonrisa Pura",
    delay: 0.8,
    depth: 1.3,
  },
];

export function FloatingFrames() {
  const reduced = useReducedMotion();
  const mouse = useMousePosition();

  return (
    <div className="relative w-full h-[480px] md:h-[560px] hidden md:block">
      {FRAMES.map((f, i) => (
        <FrameItem key={i} frame={f} mouseNx={mouse.nx} mouseNy={mouse.ny} reduced={reduced} />
      ))}
    </div>
  );
}

interface ItemProps {
  frame: FrameDef;
  mouseNx: number;
  mouseNy: number;
  reduced: boolean;
}

function FrameItem({ frame, mouseNx, mouseNy, reduced }: ItemProps) {
  const tilt = useTilt<HTMLDivElement>(10, 14);
  const parallaxX = reduced ? 0 : mouseNx * frame.depth * -20;
  const parallaxY = reduced ? 0 : mouseNy * frame.depth * -14;

  return (
    <motion.div
      className="absolute"
      style={{
        width: frame.width,
        height: frame.height,
        top: frame.top,
        left: frame.left,
        right: frame.right,
        x: parallaxX,
        y: parallaxY,
        rotate: frame.rotate,
      }}
      initial={{ opacity: 0, y: 40, rotate: frame.rotate + 8 }}
      animate={{ opacity: 1, y: 0, rotate: frame.rotate }}
      transition={{ duration: 1.1, delay: frame.delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div
        ref={tilt.ref}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        className="museum-frame w-full h-full cursor-pointer"
      >
        <div
          className="w-full h-full relative overflow-hidden"
          style={{ background: frame.gradient }}
        >
          {/* Mini composición que evoca una landing dentro del marco */}
          <div className="absolute inset-3 flex flex-col gap-2">
            <div className="h-2 w-12 bg-white/30 rounded-sm" />
            <div className="h-1.5 w-20 bg-white/20 rounded-sm" />
            <div className="h-1.5 w-16 bg-white/20 rounded-sm" />
            <div className="mt-auto flex gap-1.5">
              <div className="h-4 w-12 bg-gold rounded-sm" />
              <div className="h-4 w-10 border border-white/40 rounded-sm" />
            </div>
          </div>
          <span className="absolute bottom-2 right-2 font-mono text-[8px] uppercase tracking-widest text-white/70">
            {frame.caption}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
