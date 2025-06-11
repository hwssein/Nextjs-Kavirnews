import { ArrowRightToLineIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function DashboardLayout({ children }) {
  return (
    <>
      <header className="w-full flex items-center justify-between lg:justify-center gap-4 px-2 py-3 relative">
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

        <Link
          href="/"
          className="w-fit text-icon p-2 flex items-center gap-2 lg:hidden"
        >
          <ArrowRightToLineIcon className="w-5 h-5 mt-px" /> صفحه اصلی
        </Link>
      </header>

      <main>{children}</main>
    </>
  );
}

export default DashboardLayout;
