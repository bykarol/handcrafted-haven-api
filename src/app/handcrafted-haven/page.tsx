import ProductList from "../ui/product/productList";
import { primaryFont, secondaryFont } from "../ui/fonts";

export default function Page() {
  return (
    <main>
      <h1>Handcrafted page</h1>
      {/* Product List section */}
      <h2>Especially crafted for you</h2>
      <ProductList />
    </main>
  );
}
