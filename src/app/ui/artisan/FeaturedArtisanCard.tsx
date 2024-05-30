import Image from "next/image"
import { randomNumbers } from "@/app/lib/utils";
import { fetchAllArtisan } from "@/app/lib/data";

export default async function FeaturedArtisan() {
    const artisansArray = await fetchAllArtisan();
    const artisanId = randomNumbers(artisansArray.length-1);
    const artisan = artisansArray[artisanId[1]];
    return(
            <div className="flex flex-wrap gap-5 md:justify-evenly">
                <Image
                className="rounded shadow-lg"
                width={160}
                height={160}
                    src={`/artisans/${artisan.artisanfname}-${artisan.artisanlname}.png`}
                    alt={`Picture of ${artisan.artisanfname} ${artisan.artisanlname}`}
                />
                <div className="text-center">
                <p className="font-semibold"> {`${artisan.artisanfname} ${artisan.artisanlname}`}</p>
                <p className=""><b>Bio:</b> {`${artisan.artisaninfo}`}</p>
                </div>
            </div>  
    )
}