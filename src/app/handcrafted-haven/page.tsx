import ProductRecomendationsList from '../ui/product/productRecomendationsList';
import ProductList from '../ui/product/productList';
import { CategoryList } from '../ui/category/CategoryList';
import { primaryFont, secondaryFont } from '../ui/fonts';
import Search from '@/app/ui/search';
import { Suspense } from 'react';
import { ProductsSkeleton } from '../ui/skeletons';
import FeaturedArtisanList from '../ui/artisan/FeaturedArtisanList';

export default function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  //const totalPages = await fetchInvoicesPages(query);

  return (
    <main className="container box-content p-3 mx-auto">
      <div className='flex flex-col'>

        {/* Search Results */}
        {query && (
          <div className='className="mb-8 mt-4'>
            <Suspense fallback={<ProductsSkeleton />}>
              <h2 className="text-xl font-bold">Search Results</h2>
              <ProductList query={query} currentPage={currentPage} />
            </Suspense>
          </div>
        )}


        <div className="mb-8 mt-4">
          <h2 className="text-xl py-5 font-bold">Product recommendations</h2>
          <ProductRecomendationsList />
        </div>


        <div className="my-8">
          <h2 className='text-xl py-5 font-bold'>Featured Artisan</h2>
          <FeaturedArtisanList />
        </div>


        <div className="my-8">
          <h2 className="text-xl py-5 font-bold">Shop by Category</h2>
          <CategoryList />        
        </div>

      </div>
    </main>
  );
}
