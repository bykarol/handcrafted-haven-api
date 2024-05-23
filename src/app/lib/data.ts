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



export async function fetchAllProductsByCategory(categoryId: number) {
  try {
    const data = await sql<Product>`SELECT * FROM products p JOIN artisans a ON p.artisan_id = a.id WHERE ${categoryId} = category_id`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch products.');
  }
}



export async function fetchAllCategories() {
  try {
    const data = await sql<Category> `SELECT * FROM categories`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch categories.');
  }
}



export async function fetchCategoryById(categoryId: number) {
  try {
    const data = await sql<Category> `SELECT * FROM categories WHERE id = ${categoryId}`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch categories.');
  }
}

export async function fetchAllArtisan() {
  try {
    const data = await sql<Artisan> `SELECT * FROM artisans`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch categories.');
  }
}

export async function fetchArtisanById(artisanId : number) {
  try {
    const data = await sql<Artisan> `SELECT * FROM artisans WHERE ${artisanId} = id`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch categories.');
  }
}