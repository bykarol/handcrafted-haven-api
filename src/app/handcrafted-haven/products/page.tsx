import ProductList from '@/app/ui/product/productList';
import { ProductsSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchProductPages } from '@/app/lib/data';
import Pagination from '@/app/ui/pagination';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchProductPages(query);
  const totalGeneralPages = await fetchProductPages(); // Para la lista general de productos

  return (
    <main>
      {/* Search Results */}
      {query && (
        <div className="mb-8 mt-4">
          <Suspense fallback={<ProductsSkeleton />}>
            <h2 className="text-xl font-bold">Search Results</h2>
            <ProductList query={query} currentPage={currentPage} />
          </Suspense>

          <div className="mt-5 flex w-full justify-center">
            <Pagination totalPages={totalPages} />
          </div>
        </div>
      )}

      <p className="m-auto mt-20 mb-10 text-center p-10 md:text-xl text-mainTitles font-bold max-w-4xl ">
        Our collection features a variety of handmade products crafted with care
        and passion. From unique accessories to charming decor, each item tells
        its own story. Explore our selection and discover the beauty of handmade
        craftsmanship.{' '}
      </p>

      <div className="border-t-2 border-golden py-10">
        <Suspense fallback={<ProductsSkeleton />}>
          <ProductList currentPage={currentPage} />{' '}
          {/* Pasa currentPage aquí */}
        </Suspense>

        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalGeneralPages} />{' '}
          {/* Agrega la paginación aquí */}
        </div>
      </div>
    </main>
  );
}
