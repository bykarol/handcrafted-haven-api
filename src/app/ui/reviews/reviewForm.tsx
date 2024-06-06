'use client';

import { createReview } from "@/app/lib/actions";
import { useRef } from "react";
import { actualDate, formatDateToLocal } from "@/app/lib/utils";
import { useSession } from 'next-auth/react';

export default function Review({ productId, nextReview }: { productId: number, nextReview: number }) {
    const { data: session } = useSession();
    const formRef = useRef<HTMLFormElement>(null);
    const currentDate = actualDate();
    // console.log({nextReview});

    return (
        <>
            {session?.user?.name &&
                < div className="flex items-center" >
                    <form
                        ref={formRef}
                        action={async FormData => {
                            const review = await createReview(FormData);
                            // console.log({review});
                            formRef.current?.reset()
                        }}>

                        <div className="flex flex-col text-lg border border-1 border-golden rounded-md p-4 m-4 shadow-2xl">
                            <label htmlFor="descriptionLabel">Description </label>
                            <textarea name="reviewdescription" cols={25} rows={5} id="descriptionLabel"
                                className="border border-golden rounded-md p-4 block"
                            />

                            <h2 className="mt-5">Rating <span className="text-golden">&#9733;&#9733;&#9733;&#9733;&#9733;</span> </h2>
                            <fieldset className="border border-1 border-golden p-4 rounded-md">
                                <div className="flex flex-row-reverse justify-end gap-2">
                                    <label htmlFor="five">5 &rarr; Exceptional</label>
                                    <input type="radio" name="reviewrating" value="5" id="five" />
                                </div>
                                <div className="flex flex-row-reverse justify-end gap-2">
                                    <label htmlFor="four">4 &rarr; Excellent </label>
                                    <input type="radio" name="reviewrating" value="4" id="four" />
                                </div>
                                <div className="flex flex-row-reverse justify-end gap-2">
                                    <label htmlFor="three">3 &rarr; Good</label>
                                    <input type="radio" name="reviewrating" value="3" id="three" />
                                </div>
                                <div className="flex flex-row-reverse justify-end gap-2">
                                    <label htmlFor="two">2 &rarr; Satisfactory</label>
                                    <input type="radio" name="reviewrating" value="2" id="two" />
                                </div>
                                <div className="flex flex-row-reverse justify-end gap-2">
                                    <label htmlFor="one">1 &rarr; Acceptable  </label>
                                    <input type="radio" name="reviewrating" value="1" id="one" />
                                </div>

                                <input type="hidden" name='id' value={nextReview} />
                                <input type="hidden" name='product_id' value={productId} />
                                <input type="hidden" name="reviewdate" value={currentDate} />

                            </fieldset>

                            <button className="bg-golden text-textButtons font-bold rounded-md px-10 py-2 mt-10 hover:bg-[#F7BE38]/60" >
                                Save Review
                            </button>

                        </div>
                    </form>
                </div >

             } 
        </>
    )
}