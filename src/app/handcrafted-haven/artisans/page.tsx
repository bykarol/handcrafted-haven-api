import ArtisanList from "@/app/ui/artisan/ArtisanList";
import FeaturedArtisanList from "@/app/ui/artisan/FeaturedArtisanList";
import { Suspense } from "react";
import { ArtisansSkeleton } from "@/app/ui/skeletons";

export default function Page() {
  return (
    <main>

      <h1 className='text-xl py-5 font-bold'>Artisans page</h1>
        <Suspense fallback={<ArtisansSkeleton />}>
          <ArtisanList />
        </Suspense>

      <h2 className='text-xl my-10 p-5 font-bold border-t-2 border-golden '>Featured Artisan</h2>
        <FeaturedArtisanList />

    </main>
  );
}
