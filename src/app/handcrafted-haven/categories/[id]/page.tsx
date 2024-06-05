import ProductCategoryList from "@/app/ui/category/ProductCategoryList";

export default function Page( {params}: { params: { id: number}} ) {

  return (
    <main>
      <ProductCategoryList categoryId = {params.id} />
    </main>
  );
}
