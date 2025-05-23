import faFonts from "@/config/fonts";
import "./globals.css";
import Layout from "@/components/layouts/Layout";

export const metadata = {
  title: "خبرگزاری کویرنیوز | KavirNews Agency ",
  description:
    "The largest fake news agency in the Middle East, the main source of unreliable news",
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
