"use client";

import {
  useEffect,
  useOptimistic,
  useRef,
  useState,
  useTransition,
} from "react";
import changeUserName from "@/serverAction/changeUserName";

import PrimaryButton from "../elements/PrimaryButton";
import Toast from "./Toast";

import { Loader, User2, UserPen } from "lucide-react";
import changeUserLevel from "@/serverAction/changeUserLevel";
import Link from "next/link";

function DashboardUserProfileCard({ session }) {
  const [userNameValue, setUserNameValue] = useState("");
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const dropdownRef = useRef(null);

  const [isTransitionPending, startTransition] = useTransition();
  const [userNameValueOptimistic, setUserNameValueOptimistic] = useOptimistic(
    session.name,
    (currentName, newName) => newName
  );

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, [dropdownRef]);

  const handleSubmitUserName = async (event) => {
    event.stopPropagation();
    event.preventDefault();

    if (!userNameValue) return;

    startTransition(async () => {
      setUserNameValueOptimistic(userNameValue);

      const res = await changeUserName(userNameValue, session.id);

      if (res.error) {
        setToastMessage(res.error);
        return;
      }

      if (res.message) {
        setToastMessage(res.message);
        setUserNameValue("");
      }
    });
  };

  const handleUserLevel = async (event) => {
    event.stopPropagation();
    event.preventDefault();

    if (session.role === "author" || session.role === "administrator") {
      setToastMessage("شما مجاز به تغییر سطح نیستید.");
      return;
    }

    const userLevelRes = await changeUserLevel();

    if (userLevelRes.error) {
      setToastMessage(userLevelRes.error);
      return;
    }

    if (userLevelRes.message) {
      setToastMessage(userLevelRes.message);
    }
  };

  return (
    <>
      <div
        ref={dropdownRef}
        className="w-full md:w-1/2 flex flex-col items-start justify-start bg-surface rounded-lg p-2"
      >
        <div className="w-full flex items-center justify-start gap-2">
          <div className="w-fit p-4 border border-stroke rounded-lg bg-primary text-background">
            <User2 />
          </div>

          <div className="w-full flex items-center justify-between">
            <div className="w-full flex flex-col items-start justify-start gap-2">
              <div className="w-full flex items-center justify-start gap-1">
                <span>کاربر:</span>
                <span className="bg-secondary text-background px-2 rounded-sm">
                  {userNameValueOptimistic} (
                  {`${
                    session.role === "author"
                      ? "نویسنده"
                      : session.role === "administrator"
                      ? "مدیر"
                      : "عضو"
                  }`}
                  )
                </span>
              </div>

              <div className="w-full flex items-center justify-start gap-2">
                <span className="text-xs">{session.email}</span>
              </div>
            </div>

            <span
              onClick={() => setIsShowDropdown((prev) => !prev)}
              className="w-8 h-8 border border-primary text-primary p-1 rounded-lg cursor-pointer custom-transition hover:bg-primary hover:text-background"
            >
              <UserPen className="w-full h-full" />
            </span>
          </div>
        </div>

        <div
          className={`w-full overflow-hidden custom-transition flex items-center justify-between gap-2 ${
            isShowDropdown ? " max-h-32 mt-4" : "max-h-0"
          }`}
        >
          <div className="w-full flex flex-col items-start justify-start gap-4">
            <div className="w-full flex items-center justify-start gap-2">
              <input
                type="text"
                value={userNameValue}
                onChange={(e) => setUserNameValue(e.target.value)}
                placeholder="نام کاربری جدید خود را  وارد کنید"
                className="w-full border border-stroke px-2 py-1.5 sm:py-2 rounded-lg"
              />

              {isTransitionPending ? (
                <button
                  disabled
                  className="w-fit text-nowrap border border-primary bg-primary px-4 py-1.5 sm:py-2 rounded-lg text-white brightness-90 custom-transition cursor-pointer"
                >
                  <Loader />
                </button>
              ) : (
                <span onClick={handleSubmitUserName}>
                  <PrimaryButton text="ذخیره" />
                </span>
              )}
            </div>

            {session?.role === "administrator" ? (
              <Link href="/admin">
                <PrimaryButton text="صفحه ادمین" />
              </Link>
            ) : (
              <span onClick={handleUserLevel}>
                <PrimaryButton text="ارتقا سطح به نویسنده" />
              </span>
            )}
          </div>
        </div>
      </div>

      <Toast message={toastMessage} onClose={() => setToastMessage("")} />
    </>
  );
}

export default DashboardUserProfileCard;
