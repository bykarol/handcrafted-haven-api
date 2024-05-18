import ProductCard from './productCard';
import { fetchAllProducts } from '@/app/lib/data';


export default async function ProductList() {
  const products = await fetchAllProducts();
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};
