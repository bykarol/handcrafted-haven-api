require('dotenv').config();
const { db } = require('@vercel/postgres');
const { products, categories, categoryCrafts, artisans } = require('../app/lib/placeholder-data.js');

async function seedProducts(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.query(`
    CREATE TABLE IF NOT EXISTS products (
      id SERIAL PRIMARY KEY,
      pname VARCHAR(255) NOT NULL,
      price DECIMAL(10, 2) NOT NULL,
      category_id INT NOT NULL,
      artisan_id INT
    );
  `);


    console.log(`Created "products" table`);

    const insertedProducts = await Promise.all(
      products.map((product) => client.query(`
        INSERT INTO products (pname, price, category_id, artisan_id)
        VALUES ($1, $2, $3, $4)
        ON CONFLICT (id) DO NOTHING;
      `, [product.pname, product.price, product.category_id, product.artisan_id])),
    );

    console.log(`Seeded ${insertedProducts.length} products`);

    return {
      createTable,
      products: insertedProducts,
    };
  } catch (error) {
    console.error('Error seeding products:', error);
    throw error;
  }
}

async function seedCategories(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS categories (
      id SERIAL PRIMARY KEY,
      categoryname VARCHAR(255) NOT NULL,
      category_url VARCHAR(255) NOT NULL
  );  
    `;

    console.log(`Created "categories" table`);

    const insertedCategories = await Promise.all(
      categories.map((category) => client.sql`
        INSERT INTO categories (id, categoryname, category_url)
        VALUES (${category.id}, ${category.categoryname}, ${category.category_url})
        ON CONFLICT (id) DO NOTHING;
      `),
    );

    console.log(`Seeded ${insertedCategories.length} categories`);

    return {
      createTable,
      categories: insertedCategories,
    };
  } catch (error) {
    console.error('Error seeding categories:', error);
    throw error;
  }
}

async function seedCategoryCrafts(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS category_crafts (
      id SERIAL PRIMARY KEY,
      craftname VARCHAR(255) NOT NULL,
      ccdescription TEXT NOT NULL,
      ccprice DECIMAL(10, 2) NOT NULL,
      ccurl VARCHAR(255) NOT NULL,
      category_id INT NOT NULL
    );
  `;


    console.log(`Created "category_crafts" table`);

    const insertedCategoryCrafts = await Promise.all(
      categoryCrafts.map((craft) => client.sql`
        INSERT INTO category_crafts (id, craftname, ccdescription, ccprice, ccurl, category_id)
        VALUES (${craft.id}, ${craft.craftname}, ${craft.ccdescription}, ${craft.ccprice}, ${craft.ccurl}, ${craft.category_id})
        ON CONFLICT (id) DO NOTHING;
      `),
    );

    console.log(`Seeded ${insertedCategoryCrafts.length} category crafts`);

    return {
      createTable,
      categoryCrafts: insertedCategoryCrafts,
    };
  } catch (error) {
    console.error('Error seeding category crafts:', error);
    throw error;
  }
}

async function seedArtisans(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS artisans (
        id SERIAL PRIMARY KEY,
        artisanfname VARCHAR(255) NOT NULL,
        artisanlname VARCHAR(255) NOT NULL,
        artisanemail VARCHAR(255) NOT NULL,
        artisanphone VARCHAR(255) NOT NULL,
        artisaninfo TEXT NOT NULL
      );
    `;

    console.log(`Created "artisans" table`);

    const insertedArtisans = await Promise.all(
      artisans.map((artisan) => client.sql`
        INSERT INTO artisans (id, artisanfname, artisanlname, artisanemail, artisanphone, artisaninfo)
        VALUES (${artisan.id}, ${artisan.artisanfname}, ${artisan.artisanlname}, ${artisan.artisanemail}, ${artisan.artisanphone}, ${artisan.artisaninfo})
        ON CONFLICT (id) DO NOTHING;
      `),
    );

    console.log(`Seeded ${insertedArtisans.length} artisans`);

    return {
      createTable,
      artisans: insertedArtisans,
    };
  } catch (error) {
    console.error('Error seeding artisans:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedProducts(client);
  await seedCategories(client);
  await seedCategoryCrafts(client);
  await seedArtisans(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
