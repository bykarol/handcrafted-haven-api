import Link from "next/link";
import Image from "next/image";
import { Artisan } from "@/app/lib/definitions";

export default async function ArtisanCard({artisan} : {artisan: Artisan}) {
    
    return ( 
        <>
            <div>
            <Image className="rounded shadow-lg"
                width={160}
                height={160}
                src={`/artisans/${artisan.artisanfname}-${artisan.artisanlname}.png`}
                alt={`Picture of ${artisan.artisanfname} ${artisan.artisanlname}`}
            />
            </div>

            <Link href={`/handcrafted-haven/artisans/${artisan.id}`}>
                <p className="font-bold p-2 text-center"> {`${artisan.artisanfname} ${artisan.artisanlname}`}</p>
            </Link>
        </>
    );
    
};