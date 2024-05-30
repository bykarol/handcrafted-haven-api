import ArtisanCard from "./ArtisanCard";
import { Suspense } from "react";
import { ArtisansSkeleton } from "../skeletons";

import FeaturedArtisan from "./FeaturedArtisanCard";

export default async function ArtisanList() {

    return (
        <>
        <div>
            <Suspense fallback={<ArtisansSkeleton />}>
                <ArtisanCard />
            </Suspense>
        </div>

        <div>
            <FeaturedArtisan />
        </div>
        </>
    );

}