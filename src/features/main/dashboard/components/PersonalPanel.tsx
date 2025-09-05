import React from "react";
import PanelTitle from "../../common/PanelTitle";

export default function PersonalPanel() {
  return (
    <div className="min-h-[470px] w-full bg-white rounded-md p-5 shadow-md">
      <PanelTitle title="개인알림" />
      {/* 구현 예정 */}
      <p className="text-[#212529] border-b border-[#DEE2E6] py-2.5 text-[12px]">
        아직 알람이 없습니다.
      </p>
    </div>
  );
}
