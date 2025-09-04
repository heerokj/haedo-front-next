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
      className="min-h-[78px] min-w-[380px] bg-white rounded-md relative overflow-hidden"
    >
      <Image src={img} alt="img" fill className="object-fill" />
    </div>
  );
}
