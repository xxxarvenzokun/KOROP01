import styles from "./page.module.css";
import { newsData } from "./news.data";

export default function NewsPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>NEWS</h1>
        <p className={styles.subtitle}>
          Official updates and announcements from KOROP
        </p>
      </header>

      <section className={styles.list}>
        {newsData.map((item) => (
          <article key={item.id} className={styles.card}>
            <time className={styles.date}>{item.date}</time>
            <h2 className={styles.cardTitle}>{item.title}</h2>
            <p className={styles.text}>{item.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
