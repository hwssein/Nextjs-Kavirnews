"use client";

import { User2 } from "lucide-react";
import Link from "next/link";

function DashboardSidebar({ activeView, setActiveView, session, userName }) {
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
    <>
      <div className="w-full md:w-[768px] lg:w-[320px] lg:mt-6 mx-auto flex flex-col items-start justify-start gap-8 bg-surface rounded-lg p-4 sm:p-6">
        <div className="w-full flex flex-col items-center justify-start gap-4">
          <span className="w-fit p-9 shadow-md rounded-full bg-white text-primary border-2 border-primary">
            <User2 className="w-8 h-8" />
          </span>

          <div className="w-fit flex items-center justify-start gap-2">
            <span className="text-xs">{session.email}</span>
          </div>
        </div>

        <div className="w-full flex flex-col items-start justify-start gap-4">
          <div className="w-full flex items-start justify-start lg:justify-center gap-2">
            <span className="w-fit font-semibold">نام کاربری:</span>
            <span className="w-fit text-icon">{userName}</span>
          </div>

          <div className="w-full flex items-start justify-start lg:justify-center gap-2">
            <span className="w-fit font-semibold">نقش:</span>
            <span className="w-fit text-icon">
              {session?.role === "administrator"
                ? "ادمین"
                : session?.role === "author"
                ? "نویسنده"
                : "کاربر"}
            </span>
          </div>
        </div>

        <div className="w-full flex flex-wrap items-center justify-center gap-6">
          <button
            onClick={() => setActiveView("add-news")}
            className={`w-32 lg:w-full p-2 border border-primary rounded-md ${
              activeView === "add-news" ? "bg-primary text-white" : "bg-white"
            } text-sm md:text-base cursor-pointer hover:brightness-90 custom-transition`}
          >
            افزودن خبر
          </button>

          <button
            onClick={() => setActiveView("my-news")}
            className={`w-32 lg:w-full p-2 border border-primary rounded-md ${
              activeView === "my-news" ? "bg-primary text-white" : "bg-white"
            } text-sm md:text-base cursor-pointer hover:brightness-90 custom-transition`}
          >
            خبر‌های من
          </button>

          <button
            onClick={() => setActiveView("edit-profile")}
            className={`w-32 lg:w-full p-2 border border-primary rounded-md ${
              activeView === "edit-profile"
                ? "bg-primary text-white"
                : "bg-white"
            } text-sm md:text-base cursor-pointer hover:brightness-90 custom-transition`}
          >
            ویرایش پروفایل
          </button>

          <Link href="/" className="hidden lg:flex w-full">
            <button className="w-32 lg:w-full p-2 border border-primary rounded-md text-sm md:text-base cursor-pointer bg-white hover:brightness-90 custom-transition">
              صفحه اصلی
            </button>
          </Link>

          <button
            onClick={handleLogout}
            className="w-32 lg:w-full p-2 border border-danger rounded-md text-sm md:text-base text-danger cursor-pointer bg-white hover:brightness-90 custom-transition"
          >
            خروج از حساب
          </button>

          {session?.role === "administrator" && (
            <Link href="/admin" className="w-32 lg:w-full">
              <button className="w-full p-2 border border-primary rounded-md text-sm md:text-base cursor-pointer bg-white hover:brightness-90 custom-transition">
                صفحه ادمین
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default DashboardSidebar;
