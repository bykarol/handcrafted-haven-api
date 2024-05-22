import { fetchAllCategories } from "@/app/lib/data";
import { CategoryCard } from "./CategoryCard";

export async function CategoryList() {

    const categories = await fetchAllCategories();
    
    return (
        <div>
            <ul className="flex flex-row flex-wrap justify-evenly gap-28">
                {categories.map((category) => (
                    <li key={category.id}>
                        <CategoryCard category={category}/>
                    </li>
                ))}
            </ul>
        </div>
    );
};