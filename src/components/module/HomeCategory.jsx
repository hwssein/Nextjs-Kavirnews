import Image from "next/image";
import Link from "next/link";

function HomeCategory() {
  return (
    <>
      <div className="w-full flex flex-wrap items-center justify-evenly sm:justify-between gap-y-2 gap-x-4 p-2">
        <Link href="#" className="w-[90px] h-[45px] rounded-lg relative">
          <Image
            src="/images/social-category.jpg"
            width={150}
            height={75}
            alt="اجتماع"
            className="w-full h-full rounded-lg"
          />

          <span className="w-full h-full absolute top-0 right-0 flex items-center justify-center rounded-lg backdrop-blur-sm">
            <span className="w-full text-center text-sm text-background">
              #اجتماع
            </span>
          </span>
        </Link>

        <Link href="#" className="w-[90px] h-[45px] rounded-lg relative">
          <Image
            src="/images/economic-category.jpg"
            width={150}
            height={75}
            alt="اقتصاد"
            className="w-full h-full rounded-lg"
          />

          <span className="w-full h-full absolute top-0 right-0 flex items-center justify-center rounded-lg backdrop-blur-sm">
            <span className="w-full text-center text-sm text-background">
              #اقتصاد
            </span>
          </span>
        </Link>

        <Link href="#" className="w-[90px] h-[45px] rounded-lg relative">
          <Image
            src="/images/politic-category.jpg"
            width={150}
            height={75}
            alt="سیاست"
            className="w-full h-full rounded-lg"
          />

          <span className="w-full h-full absolute top-0 right-0 flex items-center justify-center rounded-lg backdrop-blur-sm">
            <span className="w-full text-center text-sm text-background">
              #سیاست
            </span>
          </span>
        </Link>

        <Link href="#" className="w-[90px] h-[45px] rounded-lg relative">
          <Image
            src="/images/technology-category.jpg"
            width={150}
            height={75}
            alt="تکنولوژی"
            className="w-full h-full rounded-lg"
          />

          <span className="w-full h-full absolute top-0 right-0 flex items-center justify-center rounded-lg backdrop-blur-sm">
            <span className="w-full text-center text-sm text-background">
              #تکنولوژی
            </span>
          </span>
        </Link>

        <Link href="#" className="w-[90px] h-[45px] rounded-lg relative">
          <Image
            src="/images/sport-category.jpg"
            width={150}
            height={75}
            alt="ورزش"
            className="w-full h-full rounded-lg"
          />

          <span className="w-full h-full absolute top-0 right-0 flex items-center justify-center rounded-lg backdrop-blur-sm">
            <span className="w-full text-center text-sm text-background">
              #ورزش
            </span>
          </span>
        </Link>
      </div>
    </>
  );
}

export default HomeCategory;
