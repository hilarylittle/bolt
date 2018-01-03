// import { Preact, h } from '@bolt/core';
const Product = ({ color, size, ...otherProps }) => {
  color = color || 'currentColor';
  size = size || '24';
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" {...otherProps}>
      <title>Icon/How/Product</title>
      <path
        d="M15 23.5h2v-10h-2v10zm2.187-13.812c0 .333-.115.615-.343.843-.229.23-.51.344-.844.344-.334 0-.615-.114-.844-.344a1.148 1.148 0 0 1-.343-.843c0-.292.115-.563.343-.813A1.1 1.1 0 0 1 16 8.5a1.1 1.1 0 0 1 .844.375c.228.25.343.521.343.813zM30 16c0-3.875-1.365-7.177-4.094-9.906C23.178 3.365 19.875 2 16 2c-3.875 0-7.178 1.365-9.906 4.094C3.365 8.823 2 12.125 2 16c0 3.875 1.365 7.178 4.094 9.906C8.822 28.636 12.125 30 16 30c3.875 0 7.178-1.364 9.906-4.094C28.635 23.178 30 19.875 30 16zm2 0c0 4.417-1.563 8.188-4.688 11.313S20.416 32 16 32c-4.416 0-8.188-1.562-11.313-4.687S0 20.417 0 16c0-4.416 1.562-8.187 4.687-11.312S11.584 0 16 0s8.187 1.563 11.312 4.688S32 11.584 32 16z"
        fill="currentColor"
        fill-rule="evenodd"
      />
    </svg>
  );
};
export default Product;
