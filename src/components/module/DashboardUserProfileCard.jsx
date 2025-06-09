"use client";

import Link from "next/link";
import { useOptimistic, useState, useTransition } from "react";

import changeUserName from "@/serverAction/changeUserName";
import changeUserLevel from "@/serverAction/changeUserLevel";
import PrimaryButton from "../elements/PrimaryButton";

import Toast from "./Toast";
import { Loader, User2 } from "lucide-react";

function DashboardUserProfileCard({ session }) {
  const [userNameValue, setUserNameValue] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  const [isTransitionPending, startTransition] = useTransition();
  const [userNameValueOptimistic, setUserNameValueOptimistic] = useOptimistic(
    session.name,
    (currentName, newName) => newName
  );

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
      <div className="w-full md:w-[768px] mx-auto flex flex-col items-start justify-start gap-8 bg-surface rounded-lg p-4 sm:p-6">
        <div className="w-full flex flex-col items-center justify-start gap-4">
          <span className="w-fit p-6 rounded-full bg-white text-primary border-2 border-primary">
            <User2 className="w-8 h-8" />
          </span>

          <div className="w-fit flex items-center justify-start gap-2">
            <span className="text-xs">{session.email}</span>
          </div>
        </div>

        <div className="w-full flex flex-col items-start justify-start gap-4">
          <div className="w-full flex items-start justify-start gap-2">
            <span className="w-fit text-primary">نام کاربری:</span>
            <span>{userNameValueOptimistic}</span>
          </div>

          <div className="w-full flex items-start justify-start gap-2">
            <span className="w-fit text-primary">نقش:</span>
            <span>
              {session?.role === "administrator"
                ? "ادمین"
                : session?.role === "author"
                ? "نویسنده"
                : "کاربر"}
            </span>
          </div>
        </div>

        <div className="w-full flex items-center justify-between gap-4">
          <span className="w-32">
            <PrimaryButton text="ویرایش پروفایل" />
          </span>

          <span className="w-32">
            <PrimaryButton text="پست‌های من" />
          </span>
        </div>
      </div>

      <Toast message={toastMessage} onClose={() => setToastMessage("")} />
    </>
  );
}

export default DashboardUserProfileCard;
