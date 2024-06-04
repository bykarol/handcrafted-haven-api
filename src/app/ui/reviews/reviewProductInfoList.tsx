import { fetchProductById } from "@/app/lib/data"
import ProductCard from "../product/productCard"

export default async function ReviewProductInfoList({ productId }: { productId: number }) {

    const product = await fetchProductById(productId)
    // console.log(product)
    return (
        <>

            < ProductCard product={product[0]} />

        </>
    )
}