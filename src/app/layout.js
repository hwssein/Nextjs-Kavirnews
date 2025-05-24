import faFonts from "@/config/fonts";
import "./globals.css";
import Layout from "@/components/layouts/Layout";
import myMetaData from "@/config/metadata";

export const metadata = myMetaData;

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className={`${faFonts.className}`}>
      <body className="text-text text-base font-normal">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
