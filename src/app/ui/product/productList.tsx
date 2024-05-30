import ProductCard from './productCard';
import { fetchAllProducts } from '@/app/lib/data';
import { fetchFilteredProducts } from '@/app/lib/data';

interface ProductListProps {
  query?: string;
  currentPage?: number;
}

export default async function ProductList({
  query,
  currentPage,
}: ProductListProps) {
  let products;

  if (query) {
    products = await fetchFilteredProducts(query, currentPage || 1);
  } else {
    products = await fetchAllProducts();
  }
  console.log(products.length)

  return (
    <div>
      <ul className='flex flex-wrap justify-evenly gap-5'>
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}
