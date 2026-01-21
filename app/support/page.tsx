export default function SupportPage() {
  return (
    <main className="app-content">
      <div className="support-container">
        <header className="support-header">
          <h1 className="support-title">SUPPORT</h1>
          <p className="support-subtitle">
            Contact us for questions or assistance
          </p>
        </header>

        <section className="support-buttons">
          <a
            href="https://t.me/koropkorop"
            target="_blank"
            rel="noopener noreferrer"
            className="support-button"
          >
            Telegram
          </a>

          <a
            href="mailto:support@korop.io"
            className="support-button"
          >
            Email
          </a>
        </section>

        <footer className="support-footer">
          KOROP © 2026
        </footer>
      </div>
    </main>
  );
}
