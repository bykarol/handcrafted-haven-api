import ProductRecomendationsList from '../ui/product/productRecomendationsList';
import ProductList from '../ui/product/productList';
import { CategoryList } from '../ui/category/CategoryList';
import { primaryFont, secondaryFont } from '../ui/fonts';
import Search from '@/app/ui/search';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

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
    <main className="mx-20">
      {/* Search Results */}
      <h2 className="text-xl py-5 font-bold">Search Results</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductList query={query} currentPage={currentPage} />
      </Suspense>

      {/* Product Recomendations List section */}
      <h2 className="text-xl py-5 font-bold">Product recommendations</h2>
      <ProductRecomendationsList />

      {/* Category List section */}
      <h2 className="text-xl py-5 font-bold"> Shop by Category</h2>
      <CategoryList />
    </main>
  );
}
