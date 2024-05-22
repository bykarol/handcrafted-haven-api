import { fetchAllProductsByCategory } from "@/app/lib/data";
import { fetchAllCategories } from "@/app/lib/data";
import { fetchCategoryById } from "@/app/lib/data";
import ProductCard from "../product/productCard";
import Link from "next/link";


export default async function ProductCategoryList( {categoryId}: {categoryId: number} ) {

    const products = await fetchAllProductsByCategory(categoryId);
    const categories = await fetchAllCategories();
    const categoryName = await fetchCategoryById(categoryId);
    
    return (
        <>
            {/* Title - Type of Category */}
            <div className="text-center py-10 text-3xl font-bold">
                {categoryName.map((name) => (
                    <h2 key={name.id}> {name.categoryname} Craft</h2>
                ))}
            </div>


            <div className="flex flex-wrap gap-14 m-2">
                <div className="md:border-r border-x-mainTitles p-10">

                    {/* Order By */}
                    <h2 className="py-2 text-2xl">Order By</h2>



                    {/* List of categories */}
                    <h2 className="py-2 text-2xl">Categories</h2>
                    <ul className="flex flex-col items-start text-base font-normal ">
                        {categories.map((category) => (
                        <li key={category.id}>
                            <Link href={`/handcrafted-haven/category/${category.id}`}>
                                <p className='text-center p-4'>
                                    {category.categoryname}
                                </p>
                            </Link>
                        </li>
                        ))}
                    </ul>
                </div>
                
                
                <ul className='flex flex-row flex-wrap justify-evenly gap-16'>
                    {products.map((product) => (
                        <li key={product.id}>
                            <ProductCard product={product} />
                        </li>
                    ))}
                </ul>
            </div>
        </>

    )


}