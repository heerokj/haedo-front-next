"use client";

import React from "react";
import PanelTitle from "../../common/PanelTitle";
import type { TableProps } from "antd";
import { Table } from "antd";

interface DataType {
  key: string;
  state: string;
  name: string;
  keyword: string;
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
    title: "캠페인 명",
    dataIndex: "name",
    key: "name",
    align: "center",
  },
  {
    title: "키워드",
    dataIndex: "keyword",
    key: "keyword",
    align: "center",
  },
  {
    title: "등록 일자",
    dataIndex: "date",
    key: "date",
    align: "center",
    // render: (text) => <a>{text}</a>,
  },
];

//TODO -  임시 데이터 => 추후 실 데이터로 바꾸기
const data: DataType[] = [
  {
    key: "1",
    state: "반려",
    name: "김명효 이비인후과",
    keyword: "이비인후과",
    date: "2025-07-20",
  },
  {
    key: "2",
    state: "반려",
    name: "김명효 이비인후과",
    keyword: "이비인후과",
    date: "2025-07-20",
  },
  {
    key: "3",
    state: "반려",
    name: "김명효 이비인후과",
    keyword: "이비인후과",
    date: "2025-07-20",
  },
  {
    key: "4",
    state: "완료",
    name: "김명효 이비인후과",
    keyword: "이비인후과",
    date: "2025-07-20",
  },
  {
    key: "5",
    state: "반려",
    name: "김명효 이비인후과",
    keyword: "이비인후과",
    date: "2025-07-20",
  },
];

export default function RejectedOrdersTable() {
  return (
    <div className="min-h-[230px] w-full bg-white rounded-md px-5 pt-5 pb-0 shadow-md">
      <PanelTitle title="반려 주문내역" />
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
