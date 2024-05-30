
import { fetchArtisanById, fetchProductByArtisanId } from "@/app/lib/data";
import ArtisanByIdCard from "./ArtisanByIdCard";
import ProductByArtisanCard from "./productByArtistCard";

export default async function ArtisanByIdList ({artisanId} : {artisanId:number}) {
const artisans = await fetchArtisanById(artisanId);
const products = await fetchProductByArtisanId(artisanId);
// console.log(artisans)
return (
<div>
    <ul>{artisans.map((artisan) => (
        <li key={artisan.id}> 
        <ArtisanByIdCard artisan = {artisan}/>
        </li>
        ))}
    </ul>
    <ul>
    {products.map((product) => (
        <li key={product.id}> 
        <ProductByArtisanCard product = {product}/>
        </li>
        ))}
    </ul>
</div>
);
}