import ProductList from '../ui/product/productList';
import { CategoryList } from '../ui/category/CategoryList';
import { primaryFont, secondaryFont } from '../ui/fonts';

export default function Page() {
  return (
    <main className='mx-20'>
      {/* <h1>Handcrafted page</h1> */}
      {/* Product List section */}
      <h2 className='text-xl py-5 font-bold'>Especially crafted for you</h2>
      <ProductList />

      {/* Category List section */}
      <h2 className="text-xl py-5 font-bold"> Shop by Category</h2>
      <CategoryList />
    </main>
  );
}
