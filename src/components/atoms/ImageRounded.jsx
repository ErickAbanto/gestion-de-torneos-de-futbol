export const ImageRounded = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="w-full max-w-md rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
  />
);
