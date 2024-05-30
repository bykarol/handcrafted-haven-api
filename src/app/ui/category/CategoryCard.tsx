import Link from "next/link"
import Image from "next/image"
import { fetchAllCategories } from "@/app/lib/data";

 
export async function CategoryCard() {
    const categories = await fetchAllCategories();

    return (
        <>
            <ul className="flex flex-wrap gap-5 md:justify-evenly">
                {categories.map((category) => (
                    <li key={category.id}> 
                        <Link href={`/handcrafted-haven/category/${category.id}`}>
                            <Image
                                className="rounded shadow-lg"
                                width={160}
                                height={160}
                                src={`/categories/${category.categoryname}.webp`}
                                alt={`Image for ${category.categoryname} category`}
                            />
                        </Link>
                        <Link href={`/handcrafted-haven/category/${category.id}`}>
                            <p className='text-center p-2 text-xl'>
                                {category.categoryname}
                            </p>
                        </Link>                     
                    </li>
                ))}
            </ul>
            
        </>
    );    
};