import { Product } from "@/app/lib/definitions";

export default async function ProductCard({ product }: { product: Product }) {
  return (
    <>
      <h3>{product.pname}</h3>
      <p>Price: ${product.price}</p>
      <p>Category ID: {product.category_id}</p>
      {product.categoryname &&
        <p>Category: {product.categoryname}</p>}
      <p>Artisan ID: {product.artisan_id}</p>
      {product.artisanfname && (
        <p>Artisan: {`${product.artisanfname} ${product.artisanlname}`}</p>
      )}
    </>
  );
};
