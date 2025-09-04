import React from "react";

type Props = {
  title: string;
  onclick?: React.MouseEventHandler<HTMLDivElement>;
};

export default function BlueButton({ title, onclick }: Props) {
  return (
    <div
      onClick={onclick}
      className="flex items-center justify-center text-white text-[12px] font-bold bg-[#5DBAF4B2] w-[62px] h-[21px] rounded-xl"
    >
      {title}
    </div>
  );
}
