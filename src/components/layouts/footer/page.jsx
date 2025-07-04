"use client";

import categoriesConstant from "@/constant/categories";
import { Github, Instagram, Mail, Send, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Footer() {
  const pathname = usePathname();

  const hidePaths = ["/signup", "/signin"];
  if (hidePaths.includes(pathname) || pathname.startsWith("/dashboard"))
    return null;

  return (
    <div className="w-screen mt-10 relative bg-surface rounded-t-4xl right-[calc(50%-50vw)]">
      <div className="w-full max-w-[1440px] mx-auto overflow-hidden py-8 px-4 2xl:px-2 flex flex-col items-start justify-start gap-8">
        <div className="w-full flex flex-col md:flex-row items-start justify-start gap-6">
          <div className="w-full flex flex-col items-start justify-start gap-4">
            <div className="w-fit flex items-center justify-start gap-2 group">
              <span className="w-2 h-4 bg-primary rounded-lg group-hover:bg-secondary custom-transition"></span>
              <Link href="/" className="w-fit font-semibold text-lg">
                کویرنیوز
              </Link>
            </div>

            <div className="w-full flex items-start justify-start gap-2 group">
              <span className="w-2 h-4 bg-primary rounded-lg group-hover:bg-secondary custom-transition"></span>
              <p className="w-full">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                کتابهای زیادی در شصت و سه درصد گذشته.
              </p>
            </div>

            <div className="w-full flex flex-col items-start justify-start group">
              <div className="w-fit flex items-center justify-start gap-2">
                <span className="w-2 h-4 bg-primary rounded-lg group-hover:bg-secondary custom-transition"></span>
                <span className="w-fit font-semibold text-lg">دسته بندی</span>
              </div>

              <ul className="w-fit flex flex-col md:flex-row items-start justify-start px-2">
                {categoriesConstant.map((item, index) => (
                  <li
                    key={index}
                    className="w-fit px-2 py-1 hover:text-primary custom-transition"
                  >
                    <Link href={item.slug}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full flex flex-col items-start justify-start gap-4">
            <div className="w-full px-4 md:pl-0 md:pr-1">
              <div className="w-full bg-background rounded-lg flex items-center justify-between p-2">
                <input
                  type="email"
                  placeholder="نظرات و پشنهادات"
                  className="w-full placeholder:text-icon"
                />

                <span className="w-fit cursor-pointer">
                  <Mail className="w-5 h-5 text-icon " />
                </span>
              </div>
            </div>

            <div className="w-full flex flex-col items-center justify-center gap-2">
              <div className="w-full flex items-center justify-center gap-2">
                <div className="w-fit cursor-pointer p-2 rounded-lg text-background flex items-center justify-center bg-gradient-to-r from-[#000000] to-[#1a1a1a]">
                  <X />
                </div>

                <div className="w-fit cursor-pointer px-8 py-2 rounded-lg text-background flex items-center justify-center gap-2 bg-gradient-to-r from-[#d62976] to-[#bf4fd5]">
                  <span>Instagram</span>
                  <Instagram />
                </div>
              </div>

              <div className="w-full flex items-center justify-center gap-2">
                <div className="w-fit cursor-pointer px-8 py-2 rounded-lg text-background flex items-center justify-center gap-2 bg-gradient-to-r from-[#0088cc] to-[#30c6f0]">
                  <span>Telegram</span>
                  <Send />
                </div>

                <Link
                  aria-label="گیت هاب"
                  href="https://github.com/hwssein/Nextjs-Kavirnews"
                  target="_blank"
                  className="w-fit cursor-pointer p-2 rounded-lg text-background flex items-center justify-center bg-gradient-to-r from-[#000000] to-[#1a1a1a]"
                >
                  <Github />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-2/3 flex items-center justify-center mx-auto">
          <Link
            href="https://github.com/hwssein"
            target="_blank"
            className="w-full p-4 bg-background rounded-lg text-center font-semibold"
          >
            توسعه داده شده با ❤ توسط hwssein
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
