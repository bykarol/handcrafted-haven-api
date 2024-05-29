import ArtisanCard from "./ArtisanCard";
import { Suspense } from "react";
import { ArtisansSkeleton } from "../skeletons";

export default async function ArtisanList() {

    return (
        <div>
            <Suspense fallback={<ArtisansSkeleton />}>
                <ArtisanCard />
            </Suspense>
        </div>

    );

}