import { randomNumbers } from "@/app/lib/utils";
import { fetchAllProducts, fetchProductById } from "@/app/lib/data";
import ProductCard from "./productCard";
import { Product } from "@/app/lib/definitions";

export default async function ProductRecomendationsList() {
    const products = await fetchAllProducts();
    const randomNumber = randomNumbers(products.length);

    let productList: Array<Product> = []
    
    for (let i=0; i<4; i++) {
        let id =  randomNumber[i];
        productList = productList.concat(products[id]);
    }


    return (
        <>
            <div>
                <ul className='flex flex-row flex-wrap justify-evenly gap-16'>
                    {productList.map((product) => (
                    <li key={product.id}>
                        <ProductCard product={product} />
                    </li>
                    ))}
                </ul>
            </div>
        </>
    );

}