"use client";
import React from "react";
import { Modal } from "antd";
import { Dispatch, SetStateAction } from "react";
import { Button } from "antd";
import OrderSection from "./OrderSection";
import { useOrder } from "../hooks/useOrder";

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default function OrderModal({ isOpen, setIsOpen }: Props) {
  const orderMutation = useOrder();

  //주문
  const handleOrderClick = () => {
    orderMutation.mutate({
      cmd: "payrequest",
      goodname: "해도포인트",
      price: 1000,
      recvphone: "01041325619",
    });
  };

  return (
    <Modal
      centered
      open={isOpen}
      onOk={() => setIsOpen(false)}
      onCancel={() => setIsOpen(false)}
      width={1000}
      styles={{
        content: {
          backgroundColor: "#F8FBFE",
          borderRadius: "25px",
        },
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "24px",
          justifyContent: "space-between",
          margin: "32px 6px",
        }}
      >
        <OrderSection title="1. 매체사 선택">
          <div>
            <div>토스</div>
            <div>올스타</div>
            <div>네이버</div>
          </div>
        </OrderSection>

        <OrderSection title="2. 서비스 선택 및 정보">
          <div></div>
        </OrderSection>

        <OrderSection title="3. 캠페인 설정">
          <div></div>
          <Button type="primary" onClick={handleOrderClick}>
            주문 등록하기
          </Button>
        </OrderSection>
      </div>
    </Modal>
  );
}
