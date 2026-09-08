'use client';

import type { CSSProperties, ReactNode } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

/*
 * Reusable scroll-reveal system for VerifSafe.
 *
 * Every reveal shares one easing curve and duration so the site moves as a
 * single design system rather than a collection of ad-hoc effects.
 *
 * - Reveal: single element that fades / rises into view once.
 * - RevealGroup + RevealItem: a staggered set (cards, columns, list rows).
 *
 * prefers-reduced-motion is respected everywhere: content renders in its
 * final state with no transforms and no delays.
 */

export const REVEAL_DURATION = 0.6;
export const REVEAL_OFFSET = 24;
export const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

type RevealVariant = 'up' | 'up-sm' | 'fade';
type RevealAs = 'div' | 'li';

function hiddenState(variant: RevealVariant, offset: number) {
  switch (variant) {
    case 'fade':
      return { opacity: 0 };
    case 'up-sm':
      return { opacity: 0, y: 12 };
    default:
      return { opacity: 0, y: offset };
  }
}

function visibleTransition(duration: number, delay: number, reduce: boolean) {
  return reduce
    ? {}
    : { duration, delay, ease: EASE_OUT };
}

interface RevealProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  offset?: number;
  once?: boolean;
  amount?: number;
  margin?: string;
  as?: RevealAs;
}

export function Reveal({
  children,
  className,
  style,
  variant = 'up',
  delay = 0,
  duration = REVEAL_DURATION,
  offset = REVEAL_OFFSET,
  once = true,
  amount = 0.2,
  margin = '0px 0px -40px 0px',
  as = 'div',
}: RevealProps) {
  const reduce = useReducedMotion() ?? false;

  const variants: Variants = {
    hidden: reduce ? {} : hiddenState(variant, offset),
    visible: {
      opacity: 1,
      y: 0,
      transition: visibleTransition(duration, delay, reduce),
    },
  };

  const Component = as === 'li' ? motion.li : motion.div;

  return (
    <Component
      className={className}
      style={style}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin }}
    >
      {children}
    </Component>
  );
}

interface RevealGroupProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  once?: boolean;
  amount?: number;
  margin?: string;
  as?: 'div' | 'ol';
}

export function RevealGroup({
  children,
  className,
  stagger = 0.08,
  delayChildren = 0,
  once = true,
  amount = 0.2,
  margin = '0px 0px -40px 0px',
  as = 'div',
}: RevealGroupProps) {
  const reduce = useReducedMotion() ?? false;

  const variants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : stagger,
        delayChildren: reduce ? 0 : delayChildren,
      },
    },
  };

  const Component = as === 'ol' ? motion.ol : motion.div;

  return (
    <Component
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin }}
    >
      {children}
    </Component>
  );
}

interface RevealItemProps {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  offset?: number;
  duration?: number;
  as?: RevealAs;
}

export function RevealItem({
  children,
  className,
  variant = 'up',
  offset = REVEAL_OFFSET,
  duration = REVEAL_DURATION,
  as = 'div',
}: RevealItemProps) {
  const reduce = useReducedMotion() ?? false;

  const variants: Variants = {
    hidden: reduce ? {} : hiddenState(variant, offset),
    visible: {
      opacity: 1,
      y: 0,
      transition: visibleTransition(duration, 0, reduce),
    },
  };

  const Component = as === 'li' ? motion.li : motion.div;

  return (
    <Component className={className} variants={variants}>
      {children}
    </Component>
  );
}