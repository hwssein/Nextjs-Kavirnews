import ShowError from "@/components/module/ShowError";
import { aboutUsMetaData } from "@/config/metadata";

export const dynamic = "force-dynamic";

export const metadata = aboutUsMetaData;

function AboutUs() {
  return <ShowError />;
}

export default AboutUs;
