export const defaultLabels = {
  initial: "initial",
  animate: "animate",
  exit: "exit",
};

export const lazyOnceLabels = {
  initial: "initial",
  animate: false,
  exit: "exit",
  whileInView: "animate",
  viewport: {
    once: true,
  },
};

export const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

export const fadeInLeft = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    x: -100,
    opacity: 0,
  },
};

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
