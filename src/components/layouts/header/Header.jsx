"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import PrimaryButton from "@/components/elements/PrimaryButton";
import SecondaryButton from "@/components/elements/SecondaryButton";
import SearchInput from "@/components/elements/SearchInput";

const MobileNav = dynamic(
  () => import("@/components/layouts/header/MobileNav"),
  { ssr: false }
);
const ProfileDropDown = dynamic(
  () => import("@/components/module/ProfileDropDown"),
  {
    ssr: false,
  }
);

function Header() {
  const pathname = usePathname();
  const [session, setSession] = useState(undefined);

  useEffect(() => {
    if (session === undefined) {
      fetchSessionData();
    }
  }, [session]);

  const fetchSessionData = async () => {
    const sessionRes = await fetch("/api/auth/verify", {
      cache: "default",
    });
    const sessionData = await sessionRes.json();

    if (sessionData.error) {
      setSession(null);
      return;
    }

    setSession(sessionData?.userData);
  };

  if (pathname === "/signin" || pathname === "/signup") return null;

  return (
    <>
      <div className="w-full flex items-center justify-between gap-4 p-2 relative">
        <div className="w-fit flex items-center justify-start gap-2">
          <MobileNav session={session} />

          <Link href="/">
            <Image
              src="/images/logo.png"
              width={110}
              height={34}
              alt="logo"
              priority={true}
            />
          </Link>
        </div>

        <div className="w-fit max-w-1/2 flex items-center justify-center gap-2">
          <span className="hidden md:flex">
            <SearchInput />
          </span>

          {session === undefined ? null : session ? (
            <>
              <ProfileDropDown session={session} setSession={setSession} />
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
