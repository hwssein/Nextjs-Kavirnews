"use client";

import { useState, useTransition } from "react";

import changeUserName from "@/serverAction/changeUserName";
import changeUserLevel from "@/serverAction/changeUserLevel";
import SectionTitle from "../elements/SectionTitle";
import DeleteUserModal from "../elements/DeleteUserModal";

import { Loader } from "lucide-react";

function DashboardEditUserProfile({
  session,
  setUserNameValueOptimistic,
  setToastMessage,
}) {
  const [userNameValue, setUserNameValue] = useState("");
  const [activeDeleteModal, setActiveDeleteModal] = useState(false);

  const [isUserPending, startUserTransition] = useTransition();
  const [isLevelPending, startLevelTransition] = useTransition();

  const handleSubmitUserName = async () => {
    if (!userNameValue) return;

    startUserTransition(async () => {
      setUserNameValueOptimistic(userNameValue);

      const res = await changeUserName(userNameValue, session?.id);

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

  const handleUserLevel = async () => {
    if (session?.role === "author" || session?.role === "administrator") {
      setToastMessage("شما مجاز به تغییر سطح نیستید.");
      return;
    }

    startLevelTransition(async () => {
      const userLevelRes = await changeUserLevel();

      if (userLevelRes.error) {
        setToastMessage(userLevelRes.error);
        return;
      }

      if (userLevelRes.message) {
        setToastMessage(userLevelRes.message);
      }
    });
  };

  return (
    <>
      <div className="w-full flex flex-col items-start justify-start gap-6">
        <SectionTitle text="ویرایش پروفایل" />

        <div className="w-full md:w-[70%] flex flex-col items-start justify-start gap-2">
          <label htmlFor="user-name">تغییر نام کاربری</label>
          <div className="w-full flex items-center justify-start gap-4">
            <input
              type="text"
              id="user-name"
              name="userName"
              value={userNameValue}
              onChange={(e) => setUserNameValue(e.target.value) || ""}
              className="w-full border border-stroke focus:border-primary custom-transition bg-surface px-2 py-1.5 md:py-2 rounded-lg"
            />

            <button
              onClick={handleSubmitUserName}
              disabled={isUserPending}
              className={`w-32 flex items-center justify-center border border-primary bg-primary ${
                isUserPending ? "brightness-90" : "brightness-100"
              } px-4 py-1.5 sm:py-2 rounded-md text-white hover:brightness-90 custom-transition cursor-pointer`}
            >
              {isUserPending ? <Loader /> : "ذخیره"}
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col items-start justify-start gap-44">
          <button
            onClick={handleUserLevel}
            className={`w-48 flex items-center justify-center border border-primary bg-primary ${
              isLevelPending ? "brightness-90" : "brightness-100"
            } px-4 py-1.5 sm:py-2 rounded-md text-white hover:brightness-90 custom-transition cursor-pointer`}
          >
            {isLevelPending ? <Loader /> : "تغییر سطح به نویسنده"}
          </button>

          <button
            onClick={() => setActiveDeleteModal(true)}
            className="w-48 flex items-center justify-center border border-danger bg-danger
            px-4 py-1.5 sm:py-2 rounded-md text-white hover:brightness-90 custom-transition cursor-pointer"
          >
            حذف حساب کاربری
          </button>
        </div>

        {activeDeleteModal && (
          <DeleteUserModal
            setActiveModal={setActiveDeleteModal}
            userId={session?.id}
            setToastMessage={setToastMessage}
          />
        )}
      </div>
    </>
  );
}

export default DashboardEditUserProfile;
