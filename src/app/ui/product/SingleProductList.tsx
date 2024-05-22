import { fetchProductById } from "@/app/lib/data";
import SingleProductCard from "./SingleProductCard";

export default async function SingleProductList( {productId}: {productId: number} ) {
    
    const products = await fetchProductById(productId);

    return (
        <>
             <ul className='flex flex-row flex-wrap justify-evenly gap-16'>
                {products.map((product) => (
                    <li key={product.id}>
                        <SingleProductCard product={product} />
                    </li>
                ))}
            </ul>
        </>
    )
}