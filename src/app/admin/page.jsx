import { redirect } from "next/navigation";
import { Suspense } from "react";

import getPost from "@/serverAction/getPost";
import getSession from "@/utils/getSession";

import { adminMetaData } from "@/config/metadata";
import AdminPage from "@/components/templates/AdminPage";

import ShowError from "@/components/module/ShowError";
import Loader from "@/components/elements/Loader";

export const dynamic = "force-dynamic";

export const metadata = adminMetaData;

async function Admin() {
  const session = await getSession();
  if (!session || session?.role !== "administrator") redirect("/");

  const posts = await getPost();

  if (!posts || posts.error) {
    return (
      <>
        <ShowError />
      </>
    );
  }

  return (
    <>
      <Suspense fallback={<Loader />}>
        <AdminPage data={posts?.data} />
      </Suspense>
    </>
  );
}

export default Admin;
