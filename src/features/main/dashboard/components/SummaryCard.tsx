import { formatNumber } from "@/shared/utils/FormatNumber";
import React from "react";
import Image from "next/image";

type Props = {
  img: string;
  title: string;
  tag: string;
  data: number;
};

export default function SummaryCard({ img, title, tag, data }: Props) {
  return (
    <div className="min-h-[78px] w-full bg-white rounded-md flex gap-4 px-8 items-center">
      <div className="flex-[0.2]">
        <Image src={img} width={55} height={55} alt="img" />
      </div>
      <div className="flex-[0.8] flex justify-between items-center gap-4">
        <div>
          <span className="text-[#626F86] text-[12px]">{tag}</span>
          <p style={{ fontWeight: 600, fontSize: "15px" }}>{title}</p>
        </div>
        <div className="text-3xl font-bold pt-2">{formatNumber(data)}</div>
      </div>
    </div>
  );
}
