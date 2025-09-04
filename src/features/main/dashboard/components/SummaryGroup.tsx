import React from "react";

export default function SummaryGroup() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div
        style={{
          minHeight: 78,
          minWidth: 380,
          background: "#FFFFFF",
          borderRadius: "6px",
        }}
        className="flex justify-between items-center px-8"
      >
        <div>아이콘</div>
        <div>
          <span>customers</span>
          <p>현재 진행중인 주문건</p>
        </div>
        <div>3,186</div>
      </div>
      <div
        style={{
          minHeight: 78,
          minWidth: 380,
          background: "#FFFFFF",
          borderRadius: "6px",
        }}
      >
        {/* <Image src={img} alt="img" height={78} width={380} /> */}
        광고 베너 이미지
      </div>
      <div
        style={{
          minHeight: 78,
          minWidth: 380,
          background: "#FFFFFF",
          borderRadius: "6px",
        }}
      >
        {/* <Image src={img} alt="img" height={78} width={380} /> */}
        광고 베너 이미지
      </div>
      <div
        style={{
          minHeight: 78,
          minWidth: 380,
          background: "#FFFFFF",
          borderRadius: "6px",
        }}
      >
        {/* <Image src={img} alt="img" height={78} width={380} /> */}
        광고 베너 이미지
      </div>
    </div>
  );
}
