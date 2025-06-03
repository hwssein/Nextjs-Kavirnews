import ShowError from "@/components/module/ShowError";
import { contactUsMetaData } from "@/config/metadata";

export const dynamic = "force-dynamic";

export const metadata = contactUsMetaData;

function ContactUs() {
  return <ShowError />;
}

export default ContactUs;
