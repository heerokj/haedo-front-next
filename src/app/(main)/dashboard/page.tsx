import React from "react";
import BannerGroup from "@/features/main/dashboard/components/BannerGroup";
import SummaryGroup from "@/features/main/dashboard/components/SummaryGroup";
import RejectedOrdersTable from "@/features/main/dashboard/components/RejectedOrdersTable";
import RecentOrdersTable from "@/features/main/dashboard/components/RecentOrdersTable";
import PlaceChart from "@/features/main/dashboard/components/PlaceChart";
import NoticeList from "@/features/main/dashboard/components/NoticeList";
import PersonalPanel from "@/features/main/dashboard/components/PersonalPanel";

export default function DashBoardPage() {
  return (
    <div className="flex flex-col gap-4">
      <BannerGroup />
      <SummaryGroup />
      <div className="grid grid-cols-2 gap-4">
        <RejectedOrdersTable />
        <RecentOrdersTable />
      </div>
      <div className="grid grid-cols-4 gap-4">
        <PlaceChart />
        <NoticeList />
        <PersonalPanel />
      </div>
    </div>
  );
}
