import { fetchReviewById } from "@/app/lib/data";
import EditReview from "@/app/ui/reviews/reviewEditForm";

export default async function Page( {params}: { params: {id: number}}) {
    const id = params.id;
    const review = await fetchReviewById(id);

    return (
        <div className='max-w-5xl m-auto md:shadow-2xl md:p-5'>
            <EditReview review={review} />
        </div>
        
    )
}