"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, CircleUserRound } from "lucide-react";
import Link from "next/link";

function ProfileDropDown({ session }) {
  const [isShowProfileDropdown, setIsShowProfileDropdown] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsShowProfileDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);

  const handleLogout = async () => {
    const res = await fetch("/api/auth/logout", {
      cache: "no-store",
    });
    const data = await res.json();

    if (data?.message) {
      location.replace("/");
    }
  };

  return (
    <div
      ref={wrapperRef}
      className="relative flex flex-col items-center justify-center px-4 py-1.5 sm:py-2 border border-primary rounded-lg hover:bg-gray-50 custom-transition"
    >
      <div
        onClick={() => setIsShowProfileDropdown((prev) => !prev)}
        dir="ltr"
        className="w-full max-w-28 flex items-center justify-center gap-2 text-icon cursor-pointer"
      >
        <span className="w-5 h-5 flex items-center justify-center">
          <CircleUserRound />
        </span>
        <span className="w-fit truncate">{session?.name}</span>
        <span className="w-4 h-4 flex items-center justify-center">
          <ChevronDown />
        </span>
      </div>

      {isShowProfileDropdown && (
        <div className="w-48 md:w-64 z-10 absolute left-0 top-10 sm:top-11 border border-stroke rounded-lg flex flex-col items-start justify-start bg-white shadow">
          <div className="w-full flex items-center justify-between gap-1 bg-primary rounded-t-lg p-2 text-background">
            <span>سلام 👋</span>
            <span>{session.name}</span>
          </div>

          <Link
            href="/dashboard"
            onClick={() => setIsShowProfileDropdown(false)}
            className="w-full p-2 border-b border-b-stroke hover:bg-gray-50 custom-transition"
          >
            <span className="w-full">داشبورد</span>
          </Link>

          <button
            onClick={handleLogout}
            className="w-full text-right cursor-pointer p-2 text-danger hover:bg-gray-50 custom-transition rounded-b-lg"
          >
            خروج
          </button>
        </div>
      )}
    </div>
  );
}

export default ProfileDropDown;
