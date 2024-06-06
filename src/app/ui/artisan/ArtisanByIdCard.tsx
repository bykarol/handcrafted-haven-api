import { Artisan } from "@/app/lib/definitions";
import Image from "next/image";
import Link from "next/link";

export default async function ArtisanByIdCard({artisan}: {artisan:Artisan}) {
    return (
        < >
            
            <div className="font-bold">
                <p>{`${artisan.artisanfname} ${artisan.artisanlname}`}</p>
                <p>{`${artisan.artisanemail}`}</p>
                <p>{`${artisan.artisanphone}`}</p>
            

                <Image className="m-auto py-5"
                    width={160}
                    height={160}
                    src={`/artisans/${artisan.artisanfname}-${artisan.artisanlname}.png`}
                    alt={`Picture of ${artisan.artisanfname} ${artisan.artisanlname}`}
                    />
            </div>

            <p>{`${artisan.artisaninfo}`}</p>

        </>
    );
}