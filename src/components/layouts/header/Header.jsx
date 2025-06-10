"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import PrimaryButton from "@/components/elements/PrimaryButton";
import SecondaryButton from "@/components/elements/SecondaryButton";

const MobileNav = dynamic(
  () => import("@/components/layouts/header/MobileNav"),
  { ssr: false }
);
const ProfileDropDown = dynamic(
  () => import("@/components/elements/ProfileDropDown"),
  {
    ssr: false,
  }
);

function Header({ session }) {
  const pathname = usePathname();

  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  if (pathname === "/signin" || pathname === "/signup") return null;

  return (
    <>
      <div className="w-full flex items-center justify-between gap-4 px-2 py-3 relative">
        <div className="w-fit flex items-center justify-start gap-2 md:gap-0">
          <MobileNav session={session} currentPath={currentPath} />

          <Link href="/" className="w-[110px] max-h-9 aspect-video relative">
            <Image
              src="/images/logo.png"
              sizes="110px"
              fill
              alt="logo"
              priority={true}
              className="w-full h-full object-contain object-center"
            />
          </Link>

          <div className="w-fit px-4 hidden md:flex items-center justify-start gap-4">
            <Link
              href="/"
              className={`w-fit p-1 ${
                currentPath === "/" ? "text-primary" : "text-icon"
              } `}
            >
              صفحه اصلی
            </Link>

            <Link
              href="/news"
              className={`w-fit p-1 ${
                currentPath === "/news" ? "text-primary" : "text-icon"
              } `}
            >
              آخرین خبر
            </Link>

            <Link
              href="/about-us"
              className={`w-fit p-1 ${
                currentPath === "/about-us" ? "text-primary" : "text-icon"
              } `}
            >
              درباره ما
            </Link>

            <Link
              href="/contact-us"
              className={`w-fit p-1 ${
                currentPath === "/contact-us" ? "text-primary" : "text-icon"
              } `}
            >
              تماس با ما
            </Link>
          </div>
        </div>

        <div className="w-fit max-w-1/2 flex items-center justify-center gap-2">
          {session?.id ? (
            <>
              <ProfileDropDown session={session} />
            </>
          ) : (
            <>
              <Link href="/signup" className="w-fit">
                <PrimaryButton text="ثبت نام" />
              </Link>

              <Link href="/signin" className="w-fit">
                <SecondaryButton text="ورود" />
              </Link>
            </>
          )}
        </div>
      </div>

      <span className="w-full h-px bg-stroke block mb-4"></span>
    </>
  );
}

export default Header;
