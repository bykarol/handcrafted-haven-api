'use client';

import { createReview } from "@/app/lib/actions";

import { useRef } from "react";

export default function Review({ productId }: { productId: number }) {

    const formRef = useRef<HTMLFormElement>(null);

    return (
        <div className="flex items-center">
            <form
                ref={formRef}
                action={async FormData => {
                    const review = await createReview(FormData, productId);
                    // console.log({review});
                    formRef.current?.reset()
                }}>

                <div className="flex flex-col text-xl ">
                    <label htmlFor="descriptionLabel">Description </label>
                    <textarea name="reviewdescription" id="descriptionLabel"
                        className="border border-gray rounded-md p-2 mb-10 block"
                    />
                    <fieldset className="border border-1 p-5 rounded-md mb-10">
                        <legend className="px-2"> Ratings </legend>
                        <div className="flex gap-2">
                            <label htmlFor="one">1</label>
                            <input type="radio" name="reviewrating" value="1" id="one" />
                        </div>
                        <div className="flex gap-2">
                            <label htmlFor="two">2</label>
                            <input type="radio" name="reviewrating" value="2" id="two" />
                        </div>
                        <div className="flex gap-2">
                            <label htmlFor="three">3</label>
                            <input type="radio" name="reviewrating" value="3" id="three" />
                        </div>
                        <div className="flex gap-2">
                            <label htmlFor="four">4</label>
                            <input type="radio" name="reviewrating" value="4" id="four" />
                        </div>
                        <div className="flex gap-2">
                            <label htmlFor="five">5</label>
                            <input type="radio" name="reviewrating" value="5" id="five" />
                        </div>
                    </fieldset>

                    <label htmlFor="dateLabel">Date </label>
                    <input type="date" name="reviewdate" id="dateLabel"
                        className="border border-gray rounded-md p-2"
                    />
                </div>

                <button className="bg-golden rounded-md px-10 py-2 my-10" >
                    Save Review
                </button>
            </form>
        </div>
    )
}