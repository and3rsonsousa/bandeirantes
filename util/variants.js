const container = {
  enter: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  initial: {
    opacity: 0,
    y: 50,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      easings: "circOut",
    },
  },
  exit: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 0.3,
      easings: "circIn",
    },
  },
};
const fadeInDown = {
  initial: {
    opacity: 0,
    y: -50,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      easings: "circOut",
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 0.3,
      easings: "circIn",
    },
  },
};

export { container, fadeInUp, fadeInDown };
