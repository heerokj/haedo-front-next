"use client";

import React from "react";
import PanelTitle from "../../common/PanelTitle";
import type { TableProps } from "antd";
import { Table } from "antd";

interface DataType {
  key: string;
  state: string;
  category: string;
  product: string;
  date: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "상태",
    dataIndex: "state",
    key: "state",
    align: "center",
    render: (text) => (
      <div className="flex items-center justify-center gap-2">
        <div
          className={`${
            text === "반려" ? "bg-red-600" : "bg-green-600"
          } rounded-full w-[10px] h-[10px]`}
        ></div>
        <span
          className={`${text === "반려" ? "text-red-600" : "text-green-600"}`}
        >
          {text}
        </span>
      </div>
    ),
  },
  {
    title: "카테고리",
    dataIndex: "category",
    key: "category",
    align: "center",
  },
  {
    title: "상품",
    dataIndex: "product",
    key: "product",
    align: "center",
  },
  {
    title: "등록 일자",
    dataIndex: "date",
    key: "date",
    align: "center",
  },
];

//TODO -  임시 데이터 => 추후 실 데이터로 바꾸기
const data: DataType[] = [
  {
    key: "1",
    state: "반려",
    category: "인스타그램",
    product: "인스타그램",
    date: "2025-07-20",
  },
  {
    key: "2",
    state: "완료",
    category: "인스타그램",
    product: "인스타그램",
    date: "2025-07-20",
  },
  {
    key: "3",
    state: "완료",
    category: "인스타그램",
    product: "인스타그램",
    date: "2025-07-20",
  },
  {
    key: "4",
    state: "반려",
    category: "인스타그램",
    product: "인스타그램",
    date: "2025-07-20",
  },
  {
    key: "5",
    state: "완료",
    category: "인스타그램",
    product: "인스타그램",
    date: "2025-07-20",
  },
  {
    key: "6",
    state: "반려",
    category: "인스타그램",
    product: "인스타그램",
    date: "2025-07-20",
  },
];

export default function RecentOrdersTable() {
  return (
    <div className="min-h-[230px] w-full bg-white rounded-md px-5 pt-5 pb-0 shadow-md">
      <PanelTitle title="최근 주문내역" />
      {/* <BlueButton title="바로가기" /> */}
      <Table<DataType>
        columns={columns}
        dataSource={data}
        size="small"
        pagination={{
          pageSize: 5,
        }}
      />
    </div>
  );
}
