import { Artisan } from "@/app/lib/definitions";
import Image from "next/image";

export default async function ArtisanByIdCard({artisan}: {artisan:Artisan}) {
    return (
        <div className="flex flex-col-reverse md:flex-row justify-center md:justify-evenly gap-5">
            <div className="">
                <h3 className="py-3"><b>Personal Information</b></h3>
                <p><b>Name:</b> {`${artisan.artisanfname} ${artisan.artisanlname}`}</p>
                <p><b>Email:</b> {`${artisan.artisanemail}`}</p>
                <p><b>Phone:</b> {`${artisan.artisanphone}`}</p>
                <p><b>Bio:</b> {`${artisan.artisaninfo}`}</p>
           </div>
            <div className="self-center	">
                <Image
                    src={`/artisans/${artisan.artisanfname}-${artisan.artisanlname}.png`}
                    alt={`Picture of ${artisan.artisanfname} ${artisan.artisanlname}`}
                    width={160}
                    height={160}
                />
            </div>
        </div>
    );
}