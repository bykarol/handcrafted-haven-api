import Image from "next/image"
import { randomNumbers } from "@/app/lib/utils";
import { fetchAllArtisan } from "@/app/lib/data";

export default async function FeaturedArtisan() {
    const artisansArray = await fetchAllArtisan();
    const artisanId = randomNumbers(artisansArray.length-1);
    const artisan = artisansArray[artisanId[1]];
    return(
      <div>
            <h2 className='text-xl py-5 font-bold'>Featured Artisan</h2>
            <div className="flex flex-row justify-evenly gap-10 md:gap-28 ">
                <div>
                <Image
                    src={`/artisans/${artisan.artisanfname}-${artisan.artisanlname}.png`}
                    alt={`Picture of ${artisan.artisanfname} ${artisan.artisanlname}`}
                    width={160}
                    height={160}
                />
                </div>
                <div>
                <p className="font-semibold p-2 text-center"> {`${artisan.artisanfname} ${artisan.artisanlname}`}</p>
                <p className="p-2 text-center"><b>Bio:</b> {`${artisan.artisaninfo}`}</p>
                </div>
            </div>  
        </div>
    )
}