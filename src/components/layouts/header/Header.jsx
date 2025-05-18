"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import MobileNav from "./MobileNav";
import PrimaryButton from "@/components/elements/PrimaryButton";
import SecondaryButton from "@/components/elements/SecondaryButton";
import SearchInput from "@/components/elements/SearchInput";
import ProfileDropDown from "@/components/module/ProfileDropDown";

function Header({ session }) {
  const pathname = usePathname();

  if (pathname === "/signin" || pathname === "/signup") return null;

  return (
    <>
      <div className="w-full flex items-center justify-between gap-4 p-2 relative">
        <div className="w-fit flex items-center justify-start gap-2">
          <MobileNav session={session} />

          <Image
            src="/images/logo.png"
            width={110}
            height={34}
            alt="logo"
            priority={true}
          />
        </div>

        <div className="w-fit max-w-1/2 flex items-center justify-center gap-2">
          <span className="hidden md:flex">
            <SearchInput />
          </span>

          {session ? (
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
    </>
  );
}

export default Header;
