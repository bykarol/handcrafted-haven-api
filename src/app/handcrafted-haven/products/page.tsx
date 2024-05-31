import ProductList from '@/app/ui/product/productList';
import { ProductsSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';

export default function Page() {
  return (
    <main>
      <p className="m-auto mt-20 mb-10 text-center border-b-2 border-golden p-10 md:text-xl text-mainTitles font-bold max-w-4xl ">
        Our collection features a variety of handmade products crafted with care
        and passion. From unique accessories to charming decor, each item tells
        its own story. Explore our selection and discover the beauty of handmade
        craftsmanship.{' '}
      </p>
      <Suspense fallback={<ProductsSkeleton />}>
      <ProductList />
      </Suspense>
    </main>
  );
}
