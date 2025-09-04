import React from "react";
import SummaryCard from "./SummaryCard";

export default function SummaryGroup() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <SummaryCard
        img="/image/growth-removebg-preview.png"
        tag="customer"
        title="현재 진행중인 주문건"
        data={3186}
      />
      <SummaryCard
        img="/image/trace-removebg-preview.png"
        tag="stores"
        title="현재 반려된 주문건"
        data={3621}
      />
      <SummaryCard
        img="/image/traffic-removebg-preview.png"
        tag="traffics"
        title="마케팅 커뮤니티"
        data={62280000}
      />
      <SummaryCard
        img="/image/review-removebg-preview.png"
        tag="reviews"
        title="무료 체험단 바로가기"
        data={800000}
      />
    </div>
  );
}
