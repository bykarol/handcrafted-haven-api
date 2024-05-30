import { fetchAllProductsByCategory } from "@/app/lib/data";
import { fetchAllCategories } from "@/app/lib/data";
import ProductCard from "../product/productCard";


export default async function ProductCategoryList( {categoryId}: {categoryId: number} ) {

    const orderBy = ['A-Z', 'Z-A', 'By Author', 'By Price'];
    const products = await fetchAllProductsByCategory(categoryId);
    const categories = await fetchAllCategories();
    const categoryName = categories[categoryId-1].categoryname;
    
    return (
        <>
            {/* Title - Type of Category */}
            <div className="text-center py-10 text-3xl font-bold">
                <h2> {categoryName} Craft</h2>
            </div>

            <div className="flex flex-wrap gap-20 m-2">

                <div className="flex md:flex-col gap-10">
                    <div>
                        {/* List of Order By */}
                        <button id="dropOrder" data-dropdown-toggle="dropdownOrder" className='text-xl inline-flex items-center hover:scale-125 font-bold' type='button'>
                            Order By &#9660;
                        </button>

                        <div id="dropdownOrder" className='hidden bg-lightGray rounded-lg shadow-lg shadow-gray w-44 '>
                            <ul className='py-2 text-lg' aria-labelledby='dropOrder'>
                            {orderBy.map((order) => (
                                <li className='' key={order}>
                                    <a href={'#'} className='block px-4 py-2 hover:bg-mainTitles hover:text-background'>
                                        {order}
                                    </a>
                                </li>
                            ))}
                            </ul>
                        </div>
                    </div>

                    <div>
                        {/* List of categories */}
                        <button id="dropCategories" data-dropdown-toggle="dropdown" className='text-xl inline-flex items-center hover:scale-125 font-bold' type='button'>
                            Categories &#9660;
                        </button>

                        <div id="dropdown" className='hidden bg-lightGray rounded-lg shadow-lg shadow-gray w-44 '>
                            <ul className='py-2 text-lg' aria-labelledby='dropCategories'>
                            {categories.map((category) => (
                                <li className='' key={category.id}>
                                    <a href={`/handcrafted-haven/category/${category.id}`} className='block px-4 py-2 hover:bg-mainTitles hover:text-background'>
                                        {category.categoryname}
                                    </a>
                                </li>
                            ))}
                            </ul>
                        </div>
                        <script src="https://unpkg.com/flowbite@1.5.1/dist/flowbite.js" async></script>
                    </div>
                </div>

              
                <ul className='flex flex-row flex-wrap sm:justify-evenly gap-16 md:border-l-2'>
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