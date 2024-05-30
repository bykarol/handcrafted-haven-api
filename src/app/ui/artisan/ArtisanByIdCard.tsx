import { Artisan } from "@/app/lib/definitions";
import Image from "next/image";

export default async function ArtisanByIdCard({artisan}: {artisan:Artisan}) {
    return (
        <div className="flex flex-col-reverse md:items-center md:flex-row gap-5 max-w-xl">
            <div className="flex-1">
                <h3 className="py-3"><strong>Personal Information</strong></h3>
                <p>Name: {`${artisan.artisanfname} ${artisan.artisanlname}`}</p>
                <p>Email: {`${artisan.artisanemail}`}</p>
                <p>Phone: {`${artisan.artisanphone}`}</p>
                <p>Bio: {`${artisan.artisaninfo}`}</p>
            </div>
                     
                <Image className="rounded shadow-lg"
                width={160}
                height={160}
                    src={`/artisans/${artisan.artisanfname}-${artisan.artisanlname}.png`}
                    alt={`Picture of ${artisan.artisanfname} ${artisan.artisanlname}`}
                    />
           
        </div>
    );
}