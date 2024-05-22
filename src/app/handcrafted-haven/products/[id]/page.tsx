import SingleProductList from "@/app/ui/product/SingleProductList";

export default function Page( {params}: {params: { id: number }}) {
  return (
    <main>
      <SingleProductList productId = {params.id} />
    </main>
  );
}
