import { Image } from "lucide-react";

function ImageNewsCard() {
  return (
    <>
      <div className="w-full h-full relative flex items-center justify-center">
        <Image className=" text-icon absolute inset-0 w-full h-full" />
      </div>
    </>
  );
}

export default ImageNewsCard;
