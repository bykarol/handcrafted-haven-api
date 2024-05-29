import Link from "next/link"
import Image from "next/image"
import { fetchAllCategories } from "@/app/lib/data";

 
export async function CategoryCard() {
    const categories = await fetchAllCategories();

    return (
        <>
            <ul className="flex flex-row flex-wrap justify-evenly gap-28">
                {categories.map((category) => (
                    <li key={category.id}> 
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
                    </li>
                ))}
            </ul>
            
        </>
    );    
};