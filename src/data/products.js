import productData from "./products.json";

export const products = productData.products;
export const productMeta = {
  total: productData.total,
  skip: productData.skip,
  limit: productData.limit,
};

export function getProductById(productId) {
  return products.find((product) => product.id === Number(productId));
}

export function getCategories() {
  return ["all", ...new Set(products.map((product) => product.category))];
}
