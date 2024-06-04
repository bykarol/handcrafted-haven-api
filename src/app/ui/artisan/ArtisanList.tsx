import ArtisanCard from "./ArtisanCard";
import { fetchAllArtisan } from "@/app/lib/data";

export default async function ArtisanList() {
    
    const artisans = await fetchAllArtisan();

    return (
        <>
            <div>
                <ul className="flex flex-wrap justify-evenly gap-5">
                    {artisans.map((artisan) => (
                        <li key={artisan.id}>
                            <ArtisanCard artisan = {artisan}/>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}