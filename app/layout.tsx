import "./globals.css";

export const metadata = {
  title: "KOROP",
  description: "Personal NFC Identity & Access System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* GLOBAL BACKGROUND */}
        <div className="background">
          <div className="light-spot" />
        </div>

        {/* APP CONTENT */}
        <div className="app-content">{children}</div>
      </body>
    </html>
  );
}
