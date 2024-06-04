import Review from "@/app/ui/reviews/reviewForm";
import ReviewProductInfoList from "@/app/ui/reviews/reviewProductInfoList";

export default function Page ({params}: { params: { id: number}} ) {

    return (
      <main className="flex flex-col">
        <h2 className="text-center text-2xl	p-20 font-bold">
          Thank you for choosing to leave a review!
        </h2>

        <div className="flex m-auto gap-40">
          <ReviewProductInfoList productId = {params.id} />
          <Review productId = {params.id} />
        </div>
      </main>
    );
  }
  