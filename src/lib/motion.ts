"use client";

import { type Transition, useReducedMotion } from "framer-motion";

/** Single hook per component; returns a function safe to use in any `transition` prop. */
export function useMotionTransition() {
  const reduce = useReducedMotion();
  return (transition: Transition): Transition =>
    reduce ? { duration: 0 } : transition;
}
