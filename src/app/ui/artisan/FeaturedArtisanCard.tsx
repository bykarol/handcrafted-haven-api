import Image from "next/image"
import { Artisan } from "@/app/lib/definitions"

export default async function FeaturedArtisanCard({artisan} : {artisan: Artisan}) {

    return(
        <div className="flex flex-wrap gap-5 md:justify-evenly ">
            <Image
                className="rounded shadow-lg m-2"
                width={160}
                height={160}
                    src={`/artisans/${artisan.artisanfname}-${artisan.artisanlname}.png`}
                    alt={`Picture of ${artisan.artisanfname} ${artisan.artisanlname}`}
            />
            <div className="text-center">
            <p className="font-semibold m-4 text-xl"> {`${artisan.artisanfname} ${artisan.artisanlname}`}</p>
            <p className="">{`${artisan.artisaninfo}`}</p>
            </div>
        </div>  
    )
}