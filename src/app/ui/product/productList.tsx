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

  return (
    <div>
      <p className="m-auto mt-20 mb-10 text-center border-b-2 border-golden p-10 md:text-xl text-mainTitles font-bold max-w-4xl ">
        Our collection features a variety of handmade products crafted with care
        and passion. From unique accessories to charming decor, each item tells
        its own story. Explore our selection and discover the beauty of handmade
        craftsmanship.{' '}
      </p>
      <ul className="flex flex-row flex-wrap justify-evenly gap-40 md:m-40">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}
