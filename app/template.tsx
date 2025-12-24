"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Define your colors
  const primary = "#ffb400"; // Your Primary Color
  const secondary = "#2b2a2a"; // Your Secondary Color

  // Configuration for the transition
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const transitionProps: any = {
    duration: 1.3,
    ease: [0.76, 0, 0.24, 1], // The "Milner" smooth curve
  };

  const layers = [
    { color: primary, zIndex: 100, delay: 0 },
    { color: secondary, zIndex: 90, delay: 0.1 },
    { color: primary, zIndex: 80, delay: 0.2 },
    { color: secondary, zIndex: 70, delay: 0.3 },
    { color: primary, zIndex: 60, delay: 0.4 },
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        {/* Five Transition Layers */}
        {layers.map((layer, index) => (
          <motion.div
            key={index}
            className="fixed top-0 left-0 w-full h-screen pointer-events-none"
            style={{ backgroundColor: layer.color, zIndex: layer.zIndex }}
            initial={{ translateY: "-100%" }}
            animate={{ translateY: "100%" }}
            transition={{ ...transitionProps, delay: layer.delay }}
          />
        ))}

        {/* Content Fade In */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
