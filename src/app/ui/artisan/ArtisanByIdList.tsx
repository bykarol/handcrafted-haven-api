
import { fetchArtisanById } from "@/app/lib/data";
import ArtisanByIdCard from "./ArtisanByIdCard";

export default async function ArtisanByIdList ({artisanId} : {artisanId:number}) {
const artisans = await fetchArtisanById(artisanId);
// console.log(artisans)
return (
<div>
    <ul>{artisans.map((artisan) => (
        <li key={artisan.id}> 
        <ArtisanByIdCard artisan = {artisan}/>
        </li>
        ))}
    </ul>
</div>
);
}