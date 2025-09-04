import React from "react";
import BannerCard from "./BannerCard";

const ITEM = [
  "/image/banner.png",
  "/image/banner.png",
  "/image/banner.png",
  "/image/banner.png",
];

export default function BannerGroup() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {ITEM.map((item, idx) => (
        <BannerCard img={item} key={idx} />
      ))}
    </div>
  );
}
