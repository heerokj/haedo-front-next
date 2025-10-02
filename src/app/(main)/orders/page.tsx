"use client";

import React, { useState } from "react";
import OrderModal from "@/features/main/orders/components/OrderModal";

export default function OrderPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setIsModalOpen(!isModalOpen);
        }}
      >
        주문 등록
      </button>
      <OrderModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
}
