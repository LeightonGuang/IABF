import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="p-4">
          <div className="h-[calc(100dvh-36px)]">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
