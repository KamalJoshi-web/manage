export const fadeInAnimationVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6 } },
};
export const fadeInAnimationVariantTop = {
  initial: { opacity: 0, translateY: -50 },
  animate: { opacity: 1, translateY: 0, transition: { duration: 0.6 } },
};
export const fadeInAnimationVariantBottom = {
  initial: { opacity: 0, translateY: 50 },
  animate: { opacity: 1, translateY: 0, transition: { duration: 0.6 } },
};
export const fadeInAnimationVariantLeft = {
  initial: { opacity: 0, translateX: -50 },
  animate: { opacity: 1, translateX: 0, transition: { duration: 0.6 } },
};
export const fadeInAnimationVariantRight = {
  initial: { opacity: 0, translateX: 50 },
  animate: { opacity: 1, translateX: 0, transition: { duration: 0.6 } },
};
export const staggerAnimationVariant = {
  initial: { opacity: 0, translateX: -50, translateY: -50 },
  animate: (index) => ({
    opacity: 1,
    translateX: 0,
    translateY: 0,
    transition: { duration: 0.6, delay: index * 0.3 },
  }),
};
