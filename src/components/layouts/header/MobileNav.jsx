"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Menu } from "lucide-react";
import { CircleX } from "lucide-react";

function MobileNav({ session }) {
  const [isNavShow, setIsNavShow] = useState(false);

  return (
    <>
      <div className="w-fit">
        <button
          aria-label="باز کردن منو"
          onClick={() => setIsNavShow(true)}
          className="p-2 bg-surface rounded-lg cursor-pointer text-icon md:hidden"
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
              {session ? (
                <>
                  <li className="w-full flex items-center justify-start gap-2 cursor-pointer group">
                    <span className="w-1 h-3 bg-primary inline-block rounded-lg custom-transition group-hover:bg-secondary"></span>
                    <Link
                      onClick={() => setIsNavShow(false)}
                      href="/dashboard"
                      className="w-full"
                    >
                      داشبورد
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="w-full flex items-center justify-start gap-2 cursor-pointer group">
                    <span className="w-1 h-3 bg-primary inline-block rounded-lg custom-transition group-hover:bg-secondary"></span>
                    <Link href="/signup" className="w-full">
                      ثبت‌ نام
                    </Link>
                  </li>

                  <li className="w-full flex items-center justify-start gap-2 cursor-pointer group">
                    <span className="w-1 h-3 bg-primary inline-block rounded-lg custom-transition group-hover:bg-secondary"></span>
                    <Link href="/signin" className="w-full">
                      ورود
                    </Link>
                  </li>
                </>
              )}

              <li className="w-full flex items-center justify-start gap-2 cursor-pointer group">
                <span className="w-1 h-3 bg-primary inline-block rounded-lg custom-transition group-hover:bg-secondary"></span>
                <span className="w-full">تماس با ما</span>
              </li>

              <li className="w-full flex items-center justify-start gap-2 cursor-pointer group">
                <span className="w-1 h-3 bg-primary inline-block rounded-lg custom-transition group-hover:bg-secondary"></span>
                <span className="w-full">درباره ما</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default MobileNav;
