import ProductCard from './productCard';
import { fetchAllProducts } from '@/app/lib/data';


export default async function ProductList() {
  const products = await fetchAllProducts();
  
  return (
    <div>
      <ul className='flex flex-row flex-wrap justify-evenly gap-16'>
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};
