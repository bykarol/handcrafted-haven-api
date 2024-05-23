import ArtisanCard from "./ArtisanCard";
import { fetchAllArtisan } from "@/app/lib/data";

export default async function ArtisanList() {
    const artisans = await fetchAllArtisan();
    console.log(artisans)
    return (
        <div>
            <ul className="flex flex-row flex-wrap justify-evenly gap-28">
                {artisans.map((artisan) => (
                <li key={artisan.id}>
            <ArtisanCard artisan={artisan} />
            </li>
            ))}
           </ul>
        </div>

    );

}