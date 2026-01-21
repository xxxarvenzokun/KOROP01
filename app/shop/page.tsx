"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { products } from "./products.data";

export default function ShopPage() {
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const increase = (id: string) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.min(999, (prev[id] ?? 1) + 1),
    }));
  };

  const decrease = (id: string) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] ?? 1) - 1),
    }));
  };

  return (
    <main className={styles.container}>
      {/* HEADER */}
      <header className={styles.header}>
        <h1 className={styles.title}>SHOP</h1>
        <p className={styles.subtitle}>
          Official KOROP NFC products and hardware
        </p>
      </header>

      {/* PRODUCTS */}
      <section className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            {/* IMAGE */}
            <div className={styles.imageWrapper}>
              <img
                src={product.image}
                alt={product.title}
                className={styles.image}
              />
            </div>

            {/* INFO */}
            <div className={styles.info}>
              <span className={styles.edition}>{product.edition}</span>
              <h2 className={styles.productTitle}>{product.title}</h2>

              <p className={styles.description}>
                {product.description}
              </p>

              <div className={styles.price}>
                {product.price} €
              </div>

              {/* ACTIONS */}
              <div className={styles.controls}>
                <div className={styles.counter}>
                  <button onClick={() => decrease(product.id)}>-</button>
                  <span>{quantities[product.id] ?? 1}</span>
                  <button onClick={() => increase(product.id)}>+</button>
                </div>

                <button className={styles.buyButton}>
                  Buy
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
