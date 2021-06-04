export const getImageById = (id: string, size: "120" | "320") => {
  return `/assets/images/products/${size}/${id}.png`;
};
