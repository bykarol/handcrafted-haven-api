require('dotenv').config();
const { db } = require('@vercel/postgres');
const { products, categories, artisans, customers, reviews } = require('../app/lib/placeholder-data.js');

async function seedProducts(client) {
  try {

    // await client.sql`DROP TABLE IF EXISTS products`;
    // await client.sql`DROP TABLE IF EXISTS categories`;
    // await client.sql`DROP TABLE IF EXISTS artisans`;
    // await client.sql`DROP TABLE IF EXISTS customers`;
    // await client.sql`DROP TABLE IF EXISTS reviews`;


    const createTable = await client.query(`
    CREATE TABLE IF NOT EXISTS products (
      id SERIAL PRIMARY KEY,
      pname VARCHAR(255) NOT NULL,
      price DECIMAL(10, 2) NOT NULL,
      category_id INT NOT NULL,
      artisan_id INT,
      quantity INT,
      product_description TEXT,
      FOREIGN KEY (artisan_id) REFERENCES artisans(id) ON DELETE CASCADE,
      FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
    );
  `);


    console.log(`Created "products" table`);

    const insertedProducts = await Promise.all(
      products.map((product) => client.sql`
        INSERT INTO products (id, pname, price, category_id, artisan_id, quantity, product_description)
        VALUES (${product.id}, ${product.pname}, ${product.price}, ${product.category_id}, ${product.artisan_id}, ${product.quantity}, ${product.product_description})
        ON CONFLICT (id) DO NOTHING;
      `),
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

    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS categories (
      id SERIAL PRIMARY KEY,
      categoryname VARCHAR(255) NOT NULL
  );  
    `;

    console.log(`Created "categories" table`);

    const insertedCategories = await Promise.all(
      categories.map((category) => client.sql`
        INSERT INTO categories (id, categoryname)
        VALUES (${category.id}, ${category.categoryname})
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

async function seedArtisans(client) {
  try {

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

async function seedCustomers(client) {
  try {

    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS buyers (
        id SERIAL PRIMARY KEY,
        customerfname VARCHAR(60) NOT NULL,
        customerlname VARCHAR(60) NOT NULL,
        customeremail VARCHAR(100) NOT NULL,
        customeraddress VARCHAR(255) NOT NULL,
        customercity VARCHAR(60) NOT NULL,
        customerstate VARCHAR(60) NOT NULL,
        customerzip VARCHAR(50)
      );
    `;

    console.log(`Created "buyers" table`);

    const insertedCustomers = await Promise.all(
      customers.map((customer) => client.sql`
        INSERT INTO buyers (id,
          customerfname,
          customerlname,
          customeremail,
          customeraddress,
          customercity,
          customerstate,
          customerzip)
        VALUES (${customer.id}, ${customer.customerfname}, ${customer.customerlname}, ${customer.customeremail}, ${customer.customeraddress}, ${customer.customercity}, ${customer.customerstate}, ${customer.customerzip})
        ON CONFLICT (id) DO NOTHING;
      `),
    );

    console.log(`Seeded ${insertedCustomers.length} buyers`);

    return {
      createTable,
      buyers: insertedCustomers,
    };
  } catch (error) {
    console.error('Error seeding buyers:', error);
    throw error;
  }
}

async function seedReviews(client) {
  try {
    await client.query(`
    DO $$ BEGIN
      IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'review_rating') THEN
        CREATE TYPE review_rating AS ENUM ('1', '2', '3', '4', '5');
      END IF;
    END $$;
  `);

    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS reviews (
        id SERIAL PRIMARY KEY,
        product_id INT,
        reviewdescription TEXT,
        reviewrating review_rating NOT NULL,
        reviewdate CHAR(10) NOT NULL,
        buyer_id INT,
        FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
        FOREIGN KEY (buyer_id) REFERENCES buyers(id) ON DELETE CASCADE
      );
    `;

    console.log(`Created "reviews" table`);

    const insertedReviews = await Promise.all(
      reviews.map((review) => client.sql`
        INSERT INTO reviews (id,
          product_id,
          reviewdescription,
          reviewrating,
          reviewdate,
          buyer_id )
        VALUES (${review.id}, ${review.product_id}, ${review.reviewdescription},${review.reviewrating}, ${review.reviewdate}, ${review.buyer_id})
        ON CONFLICT (id) DO NOTHING;
      `),
    );

    console.log(`Seeded ${insertedReviews.length} reviews table`);

    return {
      createTable,
      customers: insertedReviews,
    };
  } catch (error) {
    console.error('Error seeding reviews:', error);
    throw error;
  }
}



async function main() {
  const client = await db.connect();

  await seedArtisans(client);
  await seedCategories(client);
  await seedProducts(client);
  await seedCustomers(client);
  await seedReviews(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
