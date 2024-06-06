'use client';

import { updateReview } from "@/app/lib/actions";
import { useRef } from "react";
import { actualDate, formatDateToLocal } from "@/app/lib/utils";
import { useSession } from 'next-auth/react';
import { Reviews } from "@/app/lib/definitions";

export default function EditReview({ review }: { review: Reviews }) {
    const { data: session } = useSession();
    const formRef = useRef<HTMLFormElement>(null);
    const currentDate = actualDate();
    console.log({review});

    return (
        <>
            {session?.user?.name &&
                 <div >
                    <form
                        ref={formRef}
                        action={async FormData => {
                            const review = await updateReview(FormData);
                            // console.log({review});
                            formRef.current?.reset()
                        }}>

                        <div className='flex flex-col gap-5 p-5 my-5'>
                            <div>
                                <label htmlFor="descriptionLabel">Description </label>
                                <textarea name="reviewdescription" rows={5} id="descriptionLabel" defaultValue={review.reviewdescription} className="w-full border border-gray rounded-md px-2 py-3 mb-10 block" />
                            </div>
                            

                            <h2 className="">Rating <span className="text-golden">&#9733;&#9733;&#9733;&#9733;&#9733;</span> </h2>
                            <fieldset className="px-10">
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
                                    <input type="radio" name="reviewrating" value="3" id="three"  />
                                </div>
                                <div className="flex flex-row-reverse justify-end gap-2">
                                    <label htmlFor="two">2 &rarr; Satisfactory</label>
                                    <input type="radio" name="reviewrating" value="2" id="two" />
                                </div>
                                <div className="flex flex-row-reverse justify-end gap-2">
                                    <label htmlFor="one">1 &rarr; Acceptable  </label>
                                    <input type="radio" name="reviewrating" value="1" id="one" />
                                </div>

                                <input type="hidden" name='id' value={review.id} />
                                <input type="hidden" name='product_id' value={review.product_id} /> 
                                <input type="hidden" name="reviewdate" value={currentDate} />
                            </fieldset>
                        </div>

                        <button className="bg-golden text-textButtons font-bold rounded-md px-10 py-2 mt-10 hover:bg-[#F7BE38]/60" >
                            Update Review
                        </button>
                    </form>
                 </div > 
             }  
        </>
    )
}