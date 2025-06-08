"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Menu } from "lucide-react";
import { CircleX } from "lucide-react";

function MobileNav({ session, currentPath }) {
  const [isNavShow, setIsNavShow] = useState(false);

  return (
    <>
      <div className="w-fit">
        <button
          aria-label="باز کردن منو"
          onClick={() => setIsNavShow(true)}
          className="p-2 rounded-lg cursor-pointer text-primary border border-primary md:hidden"
        >
          <Menu />
        </button>

        {isNavShow && (
          <div className="w-full h-screen z-20 bg-background absolute top-0 right-0 p-2 flex flex-col items-start justify-start gap-8">
            <div className="w-full flex items-center justify-between gap-4">
              <button
                aria-label="بستن منو"
                onClick={() => setIsNavShow(false)}
                className="p-2 bg-surface rounded-lg cursor-pointer text-icon"
              >
                <CircleX />
              </button>

              <Image
                src="/images/logo.png"
                width={110}
                height={34}
                alt="logo"
                loading="lazy"
              />
            </div>

            <div className="w-full flex items-center justify-center">
              <p className="w-4/5 text-center  bg-secondary text-background py-2 px-4 rounded-lg">
                بروز‌ترین و بزرگترین مرجع رسمی اخبار بین‌الملل
              </p>
            </div>

            <ul className="w-full flex flex-col items-start justify-start gap-4 p-2">
              <li className="w-full flex items-center justify-start gap-2 cursor-pointer group">
                <span className="w-1 h-3 bg-primary inline-block rounded-lg custom-transition group-hover:bg-secondary"></span>
                <Link
                  href="/"
                  onClick={() => setIsNavShow(false)}
                  className={`w-full ${
                    currentPath === "/" ? "text-primary" : "text-icon"
                  }`}
                >
                  صفحه اصلی
                </Link>
              </li>

              {session?.id ? (
                <>
                  <li className="w-full flex items-center justify-start gap-2 cursor-pointer group">
                    <span className="w-1 h-3 bg-primary inline-block rounded-lg custom-transition group-hover:bg-secondary"></span>
                    <Link
                      onClick={() => setIsNavShow(false)}
                      href="/dashboard"
                      className={`w-full ${
                        currentPath === "/dashboard"
                          ? "text-primary"
                          : "text-icon"
                      }`}
                    >
                      داشبورد
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="w-full flex items-center justify-start gap-2 cursor-pointer group">
                    <span className="w-1 h-3 bg-primary inline-block rounded-lg custom-transition group-hover:bg-secondary"></span>
                    <Link
                      href="/signup"
                      onClick={() => setIsNavShow(false)}
                      className={`w-full ${
                        currentPath === "/signup" ? "text-primary" : "text-icon"
                      }`}
                    >
                      ثبت‌ نام
                    </Link>
                  </li>

                  <li className="w-full flex items-center justify-start gap-2 cursor-pointer group">
                    <span className="w-1 h-3 bg-primary inline-block rounded-lg custom-transition group-hover:bg-secondary"></span>
                    <Link
                      href="/signin"
                      onClick={() => setIsNavShow(false)}
                      className={`w-full ${
                        currentPath === "/signin" ? "text-primary" : "text-icon"
                      }`}
                    >
                      ورود
                    </Link>
                  </li>
                </>
              )}

              <li className="w-full flex items-center justify-start gap-2 cursor-pointer group">
                <span className="w-1 h-3 bg-primary inline-block rounded-lg custom-transition group-hover:bg-secondary"></span>
                <Link
                  href="/news"
                  onClick={() => setIsNavShow(false)}
                  className={`w-full ${
                    currentPath === "/news" ? "text-primary" : "text-icon"
                  }`}
                >
                  آخرین خبر
                </Link>
              </li>

              <li className="w-full flex items-center justify-start gap-2 cursor-pointer group">
                <span className="w-1 h-3 bg-primary inline-block rounded-lg custom-transition group-hover:bg-secondary"></span>
                <Link
                  href="/about-us"
                  onClick={() => setIsNavShow(false)}
                  className={`w-full ${
                    currentPath === "/about-us" ? "text-primary" : "text-icon"
                  }`}
                >
                  درباره ما
                </Link>
              </li>

              <li className="w-full flex items-center justify-start gap-2 cursor-pointer group">
                <span className="w-1 h-3 bg-primary inline-block rounded-lg custom-transition group-hover:bg-secondary"></span>
                <Link
                  href="/contact-us"
                  onClick={() => setIsNavShow(false)}
                  className={`w-full ${
                    currentPath === "/contact-us" ? "text-primary" : "text-icon"
                  }`}
                >
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default MobileNav;
