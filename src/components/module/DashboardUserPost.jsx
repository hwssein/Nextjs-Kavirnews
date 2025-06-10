"use client";

import SectionTitle from "../elements/SectionTitle";
import UserPostCardButton from "../elements/UserPostCardButton";
import MiniNewsCard from "./MiniNewsCard";
import ShowError from "./ShowError";

function DashboardUserPost({ postData }) {
  return (
    <div className="w-full flex flex-col items-start justify-start gap-4">
      <SectionTitle text="خبر‌های من" />

      {!postData || postData.error || postData.length === 0 ? (
        <ShowError text="هنوز محتوایی اضافه نکرده‌اید." />
      ) : (
        <div className="w-full flex flex-col items-start justify-start gap-4">
          {postData.map((item) => (
            <div key={item?.id} className="w-full relative">
              <MiniNewsCard item={item} />
              <div className="w-fit absolute bottom-2 left-2 z-10">
                <UserPostCardButton postId={item?.id} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DashboardUserPost;
