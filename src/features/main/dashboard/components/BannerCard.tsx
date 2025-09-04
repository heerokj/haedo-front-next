import React from "react";
import Image from "next/image";

type Prop = {
  img: string;
  key: number;
};

export default function BannerCard({ img, key }: Prop) {
  return (
    <div
      key={key}
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
  );
}
