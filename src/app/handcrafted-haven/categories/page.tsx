import ProductList from '@/app/ui/product/productList';
import { ProductsSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchProductPages } from '@/app/lib/data';
import Pagination from '@/app/ui/pagination';
import { CategoryList } from '@/app/ui/category/CategoryList';

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

  return (
    <main>
      {/* Search Results */}
      {query && (
        <div className='className="mb-8 mt-4'>
          <Suspense fallback={<ProductsSkeleton />}>
            <h2 className="text-xl font-bold">Search Results</h2>
            <ProductList query={query} currentPage={currentPage} />
          </Suspense>

          <div className="my-5 flex w-full justify-center">
            <Pagination totalPages={totalPages} />
          </div>
        </div>
      )}

      <div className="border-t-2 border-golden py-10">
        <h1 className='text-2xl py-5 font-bold'>Check out our products by categories</h1>
          <CategoryList />
      </div>
    </main>
  );
}
