import "./globals.css";
import Navbar from "./Navbar";

export const metadata = {
  title: "Campus Directory",
  description: "Simple student and department explorer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container">{children}</main>
        <footer className="footer">
          Campus Directory © Curriculum Year 2024–2025
        </footer>
      </body>
    </html>
  );
}
