import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
        <div className="background">
          <div className="light-spot" />
        </div>

        <div className="app-content">{children}</div>
      </body>
    </html>
  );
}