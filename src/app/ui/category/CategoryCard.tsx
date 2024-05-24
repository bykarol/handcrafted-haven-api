import { Category } from "@/app/lib/definitions"
import Link from "next/link"
import Image from "next/image"

export async function CategoryCard( {category}: {category: Category} ) {
    return (
        <>
            <Link href={`/handcrafted-haven/category/${category.id}`}>
                <Image
                    className="rounded-full"
                    src={`/categories/${category.categoryname}.webp`}
                    alt={`Image for ${category.categoryname} category`}
                    width={260}
                    height={260}
                />
            
            <p className='text-center p-3 text-xl'>
                {category.categoryname}
            </p>
            </Link>
        </>
    )    
}