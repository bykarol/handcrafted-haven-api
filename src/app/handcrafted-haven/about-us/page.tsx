import { fetchProductPages } from '@/app/lib/data';
import { Suspense } from 'react';
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
      <h1 className="font-bold p-2 text-center">About us page</h1>

      <p className="p-2 mxy-10 text-center">
        Welcome to Handcrafted Haven, where creativity meets craftsmanship! We
        are passionate artisans dedicated to curating and showcasing the finest
        handcrafted goods from around the world. At Handcrafted Haven, we
        believe that every piece tells a story. Each creation is infused with
        the love, dedication, and unique vision of the talented artisans behind
        it. From intricately designed jewelry to exquisitely crafted home decor,
        our platform is a celebration of artisanal mastery and creativity.
      </p>

      <h2 className="font-semibold p-2 text-center">Our Mission</h2>

      <div className="flex flex-col p-2 mx-10 text-center">
        <p>
          Our mission is simple: to connect discerning buyers with exceptional
          artisans and their extraordinary creations. By bridging the gap
          between creators and consumers, we strive to support independent
          artisans and preserve traditional craftsmanship in an increasingly
          digital world.
        </p>

        <p>
          What sets us apart is our commitment to authenticity, quality, and
          sustainability. We carefully vet each artisan and product to ensure
          that only the highest standards of craftsmanship and ethical practices
          are met. When you shop with us, you can trust that you are not just
          purchasing a product, but investing in a piece of artistry and
          culture.
        </p>

        <p>
          Whether you are searching for a unique statement piece to adorn
          yourself or a heartfelt gift for a loved one, Handcrafted Haven offers
          a curated selection of handcrafted treasures to suit every taste and
          occasion. Join us in celebrating the art of handmade and discover the
          beauty of craftsmanship with every purchase.
        </p>

        <p>
          Thank you for supporting independent artisans and choosing Handcrafted
          Haven for all your handcrafted needs. Happy shopping!
        </p>
      </div>
    </main>
  );
}
