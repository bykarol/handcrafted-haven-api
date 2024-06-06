
import { fetchArtisanById, fetchProductByArtisanId } from "@/app/lib/data";
import ArtisanByIdCard from "./ArtisanByIdCard";
import ProductByArtisanCard from "./productByArtistCard";
import Link from "next/link";

export default async function ArtisanByIdList ({artisanId} : {artisanId:number}) {
    const artisans = await fetchArtisanById(artisanId);
    const products = await fetchProductByArtisanId(artisanId);
    // console.log(artisans)
    return (
        <div>
            <div className="flex flex-col md:flex-row max-w-3xl m-auto text-center items-center gap-20 mb-10">
                <ArtisanByIdCard artisan = {artisans}/>
            </div>
            
            <Link href={`/handcrafted-haven/artisans/${artisanId}/edit`} className="bg-golden text-textButtons font-bold rounded-md px-10 py-2 m-10 hover:bg-[#F7BE38]/60 ">
                Edit Bio
            </Link>

            <h2 className="text-xl font-bold border-t-2 mt-10 p-5">{`The Expanded Collection from ${artisans.artisanfname}`}</h2>

            <ul className="flex flex-wrap justify-evenly gap-20 mt-5 p-5">
                {products.map((product) => (
                    <li key={product.id}> 
                        <ProductByArtisanCard product = {product}/>
                    </li>
                ))}
            </ul>

            

        </div>
    );
}