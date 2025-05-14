import Image from "next/image";
import MobileNav from "./MobileNav";
import PrimaryButton from "@/components/elements/PrimaryButton";
import SecondaryButton from "@/components/elements/SecondaryButton";
import SearchInput from "@/components/elements/SearchInput";

function Header() {
  return (
    <>
      <div className="w-full flex items-center justify-between gap-4 p-2 relative">
        <div className="w-fit flex items-center justify-start gap-2">
          <MobileNav />

          <Image
            src="/images/logo.png"
            width={100}
            height={64}
            alt="logo"
            priority={true}
          />
        </div>

        <div className="w-fit max-w-1/2 flex items-center justify-center gap-2">
          <span className="hidden md:flex">
            <SearchInput />
          </span>

          <PrimaryButton text="ثبت نام" />
          <SecondaryButton text="ورود" />
        </div>
      </div>
    </>
  );
}

export default Header;
