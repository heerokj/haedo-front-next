"use client";

import React from "react";
import PanelTitle from "../../common/PanelTitle";
import { List } from "antd";

//TODO -  임시 데이터 => 추후 실 데이터로 바꾸기
const data = [
  {
    tag: "필독",
    title: "임시 데이터 추후 실 데이터 변경 예정",
    date: "2025-09-04",
  },
  { tag: "필독", title: "맛집 키워드 로직 변경 안내", date: "2025-09-04" },
  {
    tag: "필독",
    title: "플레이스 유입 통계 수치 관련 안내",
    date: "2025-09-04",
  },
  { tag: "중요", title: "토스 주문 변경", date: "2025-09-04" },
];

export default function NoticeList() {
  return (
    <div className="min-h-[470px] min-w-[350px] bg-white rounded-md p-5 shadow-md">
      <PanelTitle title="공지사항" />
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item className="relative">
            <List.Item.Meta
              title={
                //TODO -  공지사항 링크 추가 예정
                <div className="flex flex-col">
                  <div key={index}>
                    <span
                      className={`border py-0.5 px-1.5 rounded-sm mr-4 ${
                        item.tag === "필독"
                          ? "text-red-600 border-[#FFCCC7] bg-[#FFF2F0]"
                          : "text-blue-600 border-[#c7e1ff] bg-[#f0f9ff]"
                      }`}
                    >
                      {item.tag}
                    </span>
                    {item.title}
                  </div>
                  <div className="text-[#626F86] text-[12px] absolute bottom-0 right-0">
                    {item.date}
                  </div>
                </div>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
}
