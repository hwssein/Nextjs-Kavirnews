import { AlertTriangle } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-16">
      <AlertTriangle className="w-20 h-20 text-secondary mb-6" />

      <h1 className="text-8xl font-extrabold text-primary tracking-wider">
        404
      </h1>

      <h2 className="mt-4 text-3xl font-bold text-text">
        صفحه مورد نظر یافت نشد
      </h2>

      <p className="mt-4 text-lg text-icon max-w-md">
        متاسفانه صفحه‌ای که به دنبال آن بودید وجود ندارد، ممکن است حذف شده یا
        آدرس آن تغییر کرده باشد.
      </p>

      <Link href="/" className="mt-10">
        <button className="px-8 py-3 text-lg border border-primary bg-primary text-white rounded-lg hover:brightness-90 custom-transition cursor-pointer">
          بازگشت به صفحه اصلی
        </button>
      </Link>
    </div>
  );
}

export default NotFound;
