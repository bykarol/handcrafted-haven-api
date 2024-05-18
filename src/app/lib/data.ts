import { sql } from "@vercel/postgres";
import { Product, Category, CategoryCrafts, Artisan } from "./definitions";
import { formatCurrency } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchAllProducts() {
  try {
    const data = await sql<Product>`SELECT * FROM products p JOIN artisans a ON p.artisan_id = a.id JOIN categories c ON p.category_id = c.id;`;
    // console.log(data.rows)
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch products.');
  }

}