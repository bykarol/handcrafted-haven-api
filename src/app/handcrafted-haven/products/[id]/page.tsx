import ProductDetailsList from "@/app/ui/product/productDetailsList";

export default function Page( {params}: {params: { id: number }}) {
  return (
    <main>
      <ProductDetailsList productId = {params.id} />
    </main>
  );
}
