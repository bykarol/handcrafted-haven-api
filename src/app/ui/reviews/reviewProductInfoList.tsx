import { fetchProductById } from "@/app/lib/data"
import ProductCard from "../product/productCard"

export default async function ReviewProductInfoList({ productId }: { productId: number }) {

    const product = await fetchProductById(productId)
    // console.log(product)
    return (
           <div className="flex flex-col gap-1 place-items-center">
                < ProductCard product={product[0]}/>
           </div>

    )
}