"use client";

import { useState } from "react";

import { Menu } from "lucide-react";
import { CircleX } from "lucide-react";
import Image from "next/image";

function MobileNav() {
  const [isNavShow, setIsNavShow] = useState(false);

  return (
    <>
      <div className="w-fit">
        <button
          onClick={() => setIsNavShow(true)}
          className="p-2 bg-surface rounded-lg cursor-pointer text-icon"
        >
          <Menu />
        </button>

        {isNavShow && (
          <div className="w-full h-screen bg-background absolute top-0 right-0 p-2 flex flex-col items-start justify-start gap-8">
            <div className="w-full flex items-center justify-between gap-4">
              <button
                onClick={() => setIsNavShow(false)}
                className="p-2 bg-surface rounded-lg cursor-pointer text-icon"
              >
                <CircleX />
              </button>

              <Image
                src="/images/logo.png"
                width={100}
                height={64}
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
                <span>ثبت‌ نام</span>
              </li>

              <li className="w-full flex items-center justify-start gap-2 cursor-pointer group">
                <span className="w-1 h-3 bg-primary inline-block rounded-lg custom-transition group-hover:bg-secondary"></span>
                <span>ورود</span>
              </li>

              <li className="w-full flex items-center justify-start gap-2 cursor-pointer group">
                <span className="w-1 h-3 bg-primary inline-block rounded-lg custom-transition group-hover:bg-secondary"></span>
                <span>تماس با ما</span>
              </li>

              <li className="w-full flex items-center justify-start gap-2 cursor-pointer group">
                <span className="w-1 h-3 bg-primary inline-block rounded-lg custom-transition group-hover:bg-secondary"></span>
                <span>درباره ما</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default MobileNav;
