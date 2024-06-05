'use client';
import { Product } from "@/app/lib/definitions";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Cart() {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem('cartProducts');
    if (storedProducts) {
      const parsedProducts: Product[] = JSON.parse(storedProducts);
      const uniqueProducts = parsedProducts.reduce((acc: Product[], product: Product) => {
        const existingProductIndex = acc.findIndex(p => p.id === product.id);
        if (existingProductIndex !== -1) {
          acc[existingProductIndex].quantity++;
        } else {
          product.quantity = 1;
          acc.push(product);
        }
        return acc;
      }, []);
      setCartProducts(uniqueProducts);
    }
  }, []);

  const removeFromCart = (productId: number) => {
    const updatedCart = cartProducts.filter(product => product.id !== productId);
    setCartProducts(updatedCart);
    localStorage.setItem('cartProducts', JSON.stringify(updatedCart));
  };

  return (
    <main>
      <div className="container mx-auto py5">
        <h1 className="text-3xl font-bold mb-4">Cart</h1>
        {cartProducts.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cartProducts.map((product, index) => (
              <div key={index} className="rounded-md p-4 shadow-md relative">
                {product.artisanfname && (
                  <p className="font-bold">Made by {`${product.artisanfname} ${product.artisanlname}`}</p>
                )}
                <Link href={`/handcrafted-haven/products/${product.id}`}>
                  <Image
                    width={160}
                    height={160}
                    src={`/categories/${product.categoryname}/Product-${product.id}.webp`}
                    alt={`Image for ${product.artisan_id}`} />
                </Link>

                <div>
                  <Link href={`/handcrafted-haven/products/${product.id}`}>
                    <h3 className="font-semibold">{product.pname}</h3>
                  </Link>
                  <p>Unit Price: ${product.price}</p>
                  <p>Quantity: {product.quantity}</p>
                  <p>Total Amount: ${(product.price * product.quantity).toFixed(2)}</p>
                </div>
                <button
                  className="absolute top-2 right-2 text-red-600"
                  onClick={() => removeFromCart(product.id)}
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
