import type { TargetAndTransition } from "framer-motion";

export const EASE_APPLE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function fadeUpVariants(reduceMotion: boolean): {
  hidden: TargetAndTransition;
  visible: TargetAndTransition;
} {
  return {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.8, ease: EASE_APPLE },
    },
  };
}
