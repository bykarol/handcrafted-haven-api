import Link from "next/link";
import Image from "next/image";
import { fetchAllArtisan } from "@/app/lib/data";

export default async function ArtisanCard() {
    const artisans = await fetchAllArtisan();
    
    return ( 
        <ul className="flex flex-wrap justify-evenly gap-5">
            {artisans.map((artisan) => (
                <li key={artisan.id}>

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
    
                </li>
            ))}
        </ul>
    );
};