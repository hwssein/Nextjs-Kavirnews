import faFonts from "@/config/fonts";
import "./globals.css";
import Layout from "@/components/layouts/Layout";

export const metadata = {
  title: "خبرگزاری کویرنیوز",
  description: "بزرگ‌ترین خبرگزاری فیک خاورمیانه، مرجع اصلی خبر‌های ناموثق",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className={`${faFonts.className}`}>
      <body className="text-text text-base font-normal">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
