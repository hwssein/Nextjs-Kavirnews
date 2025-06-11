"use client";

import { useTransition } from "react";

import deleteUser from "@/serverAction/deleteUser";

import { Loader } from "lucide-react";

function DeleteUserModal({ setActiveModal, userId, setToastMessage }) {
  const [isDeletePending, startDeleteTransition] = useTransition();

  const handleDeleteUser = async () => {
    try {
      startDeleteTransition(async () => {
        const deleteRes = await deleteUser(userId);

        if (deleteRes.error) {
          setToastMessage(deleteRes.error);
          setActiveModal(false);
          return;
        }

        if (deleteRes.message) location.replace("/");
      });
    } catch (error) {
      console.log(error);
      setActiveModal(false);
      setToastMessage("مشکلی پیش آمده است، دوباره امتحان کنید.");
    }
  };

  return (
    <>
      <div
        className="w-screen h-screen bg-transparent backdrop-blur-xl fixed inset-0 z-50 p-4 flex items-start
    justify-center"
      >
        <div className="w-full sm:w-3/4 md:w-1/2 mx-auto mt-[10%] flex flex-col items-start justify-start gap-8 bg-white px-4 py-8 sm:py-16 rounded-md border border-stroke">
          <span className="w-full flex items-center justify-center text-center font-bold text-lg">
            آیا از حذف حساب کاربری خود اطمینان دارید؟
          </span>

          <span className="w-full flex items-center justify-center text-right text-danger">
            * با حذف حساب کاربری خود تمام فعالیت‌های شما و محتوای تولید شده توسط
            شما در این سایت برای همیشه حذف خواهد شد.
          </span>

          <div className="w-full flex flex-wrap items-center justify-center gap-6">
            <button
              onClick={handleDeleteUser}
              className={`w-32 flex items-center justify-center border border-danger bg-danger ${
                isDeletePending ? "brightness-90" : "brightness-100"
              } p-2 rounded-md text-white hover:brightness-90 custom-transition cursor-pointer`}
            >
              {isDeletePending ? <Loader /> : "حذف حساب"}
            </button>

            <button
              onClick={() => setActiveModal(false)}
              className="w-36 p-2 border border-primary bg-primary hover:brightness-90 custom-transition rounded-md text-white cursor-pointer"
            >
              بازگشت
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeleteUserModal;
