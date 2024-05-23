import { Artisan } from "@/app/lib/definitions";
import Link from "next/link";
import Image from "next/image";

export default async function ArtisanCard({ artisan } : {artisan: Artisan}) {
    // console.log(artisan.id)
    
    return (
    <>
    <div>
    <Image
        src={`/artisans/${artisan.artisanfname}-${artisan.artisanlname}.png`}
        alt={`Picture of ${artisan.artisanfname} ${artisan.artisanlname}`}
        width={160}
        height={160}
    />
    </div>
    <Link href={`/handcrafted-haven/artisans/${artisan.id}`}>
        <p className="font-semibold p-2 text-center"> {`${artisan.artisanfname} ${artisan.artisanlname}`}</p>
    </Link>
    
    
    </>

 );
};