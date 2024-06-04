import { fetchAllArtisan } from "@/app/lib/data";
import { randomNumbers } from "@/app/lib/utils";
import FeaturedArtisanCard from "./FeaturedArtisanCard";

export default async function FeaturedArtisanList() {

    const artisansArray = await fetchAllArtisan();
    const artisanId = randomNumbers(artisansArray.length-1);
    const artisan = artisansArray[artisanId[1]];
    
    return (
        <>
            <div className="md:w-3/5 m-auto shadow-2xl p-5">
                <FeaturedArtisanCard artisan = {artisan}/>
            </div>
        </>
    );
}