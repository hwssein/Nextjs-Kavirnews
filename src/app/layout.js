import faFonts from "@/config/fonts";
import "./globals.css";

export const metadata = {
  title: "خبرگزاری کویرنیوز",
  description: "بزرگ‌ترین خبرگزاری فیک خاورمیانه، مرجع اصلی خبر‌های ناموثق",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className={`${faFonts.className}`}>
      <body>{children}</body>
    </html>
  );
}
