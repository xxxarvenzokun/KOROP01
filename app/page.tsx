"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isSupportClosing, setIsSupportClosing] = useState(false);

  const closeSupport = () => {
    setIsSupportClosing(true);

    setTimeout(() => {
      setIsSupportOpen(false);
      setIsSupportClosing(false);
    }, 500);
  };

  return (
    <main className={styles.container}>
      {/* ===== HEADER ===== */}
      <header className={styles.header}>
        <div className={styles.logo}>KOROP</div>
        <div className={styles.subtitle}>
          Personal NFC Identity & Access System
        </div>
      </header>

      {/* ===== BUTTONS ===== */}
      <section className={styles.buttons}>
        <a className={styles.button} href="/scan">
          Scan NFC Chip
        </a>

        <a className={styles.button} href="/activate">
          Activate New Chip
        </a>

        {/* ✅ ИСПРАВЛЕНО */}
        <a className={styles.button} href="/shop">
          Products
        </a>

        <a className={styles.button} href="/news">
          News
        </a>

        {/* SUPPORT — модальное окно */}
        <button
          type="button"
          className={styles.button}
          onClick={() => {
            setIsSupportOpen(true);
            setIsSupportClosing(false);
          }}
        >
          Support
        </button>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className={styles.footer}>
        KOROP © 2026
      </footer>

      {/* ===== SUPPORT MODAL ===== */}
      {isSupportOpen && (
        <div
          className={`${styles.modalOverlay} ${
            isSupportClosing ? styles.closing : ""
          }`}
          onClick={closeSupport}
        >
          <div
            className={`${styles.modal} ${
              isSupportClosing ? styles.closing : ""
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.modalClose}
              onClick={closeSupport}
              aria-label="Close support window"
            >
              ✕
            </button>

            <h2 className={styles.modalTitle}>
              Contact us for questions or support
            </h2>

            <div className={styles.modalButtons}>
              <a
                href="https://t.me/koropkorop"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.modalButton}
              >
                Telegram
              </a>

              <a
                href="mailto:support@korop.io"
                className={styles.modalButton}
              >
                Email
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
