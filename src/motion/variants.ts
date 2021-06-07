// These are for framer motion
// animated elements. First level
// properties need to pass "initial" or "animate"
// attribute which element is related with

export const card = {
  visible: {
    y: 0,
    opacity: 1,
  },
  hidden: {
    y: 50,
    opacity: 0,
  },
};

export const products = {
  visible: {
    transition: { staggerChildren: 0.075, delayChildren: 0.05 },
  },
};

export const productOverlayLink = {
  visible: {
    y: 0,
  },
  hidden: {
    y: 20,
  },
};

export const modal = {
  visible: {
    y: 0,
    opacity: 1,
  },
  hidden: {
    y: 25,
    opacity: 0,
  },
};

export const noitem = {
  visible: {
    y: 0,
    opacity: 1,
  },
  hidden: {
    y: 75,
    opacity: 0,
  },
};
