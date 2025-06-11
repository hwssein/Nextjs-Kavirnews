"use client";

import { useOptimistic, useState } from "react";
import dynamic from "next/dynamic";

import DashboardSidebar from "../module/DashboardSidebar";

import Toast from "../module/Toast";
import Loader2 from "../elements/Loader2";

const DashboardUserForm = dynamic(
  () => import("@/components/module/DashboardUserForm"),
  { ssr: false, loading: () => <Loader2 /> }
);

const DashboardUserPost = dynamic(
  () => import("@/components/module/DashboardUserPost"),
  { ssr: false, loading: () => <Loader2 /> }
);

const DashboardEditUserProfile = dynamic(
  () => import("@/components/module/DashboardEditUserProfile"),
  { ssr: false, loading: () => <Loader2 /> }
);

function DashboardPage({ session, postData }) {
  const [activeView, setActiveView] = useState("add-news");
  const [toastMessage, setToastMessage] = useState("");

  const [userNameValueOptimistic, setUserNameValueOptimistic] = useOptimistic(
    session.name,
    (currentName, newName) => newName
  );

  return (
    <>
      <div className="w-full flex flex-col lg:flex-row items-start justify-start gap-8 p-2">
        <DashboardSidebar
          activeView={activeView}
          setActiveView={setActiveView}
          session={session}
          userName={userNameValueOptimistic}
        />

        {activeView === "add-news" && (
          <DashboardUserForm setToastMessage={setToastMessage} />
        )}

        {activeView === "my-news" && <DashboardUserPost postData={postData} />}

        {activeView === "edit-profile" && (
          <DashboardEditUserProfile
            session={session}
            setUserNameValueOptimistic={setUserNameValueOptimistic}
            userId={session?.id}
            setToastMessage={setToastMessage}
          />
        )}
      </div>

      <Toast message={toastMessage} onClose={() => setToastMessage("")} />
    </>
  );
}

export default DashboardPage;
