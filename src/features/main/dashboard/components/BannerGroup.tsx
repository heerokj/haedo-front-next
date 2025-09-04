import React from "react";
import BannerCard from "./BannerCard";

const ITEM = ["1", "2", "3", "4"];

export default function BannerGroup() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {ITEM.map((item, idx) => (
        <BannerCard img={item} key={idx} />
      ))}
    </div>
  );
}
