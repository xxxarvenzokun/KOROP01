import styles from "./page.module.css";
import { products } from "./products.data";

export default function ShopPage() {
  return (
    <main className={styles.shop}>
      <h1 className={styles.title}>Shop</h1>

      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <img
              src={product.image}
              alt={product.title}
              className={styles.image}
            />

            <h2>{product.edition}</h2>
            <p>{product.description}</p>

            <div className={styles.price}>
              {product.price} €
            </div>

            <button className={styles.button}>
              Buy
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
