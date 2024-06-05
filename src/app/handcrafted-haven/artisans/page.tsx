import ArtisanList from '@/app/ui/artisan/ArtisanList';
import FeaturedArtisanList from '@/app/ui/artisan/FeaturedArtisanList';
import { Suspense } from 'react';
import { ArtisansSkeleton } from '@/app/ui/skeletons';
import { fetchProductPages } from '@/app/lib/data';
import { ProductsSkeleton } from '@/app/ui/skeletons';
import ProductList from '@/app/ui/product/productList';
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

  return (
    <main>
      {/* Search Results */}
      {query && (
        <div className='className="mb-8 mt-4'>
          <Suspense fallback={<ProductsSkeleton />}>
            <h2 className="text-xl font-bold">Search Results</h2>
            <ProductList query={query} currentPage={currentPage} />
          </Suspense>

          <div className="mt-5 flex w-full justify-center">
            <Pagination totalPages={totalPages} />
          </div>
        </div>
      )}

      <h1 className="text-xl py-5 font-bold">Artisans page</h1>
        <ArtisanList />

      <h2 className="text-xl my-10 p-5 font-bold border-t-2 border-golden ">
        Featured Artisan
      </h2>
      <FeaturedArtisanList />
    </main>
  );
}
