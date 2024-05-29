import { CategoryCard } from "./CategoryCard";
import { Suspense } from "react";
import { CategoriesSkeleton } from "../skeletons";

export async function CategoryList() {
  
    return (
        <div>
            <Suspense fallback={<CategoriesSkeleton />} >
                <CategoryCard />
            </Suspense>
        </div>
    );
}; 