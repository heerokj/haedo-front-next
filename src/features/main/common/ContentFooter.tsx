import React from "react";
import { Layout } from "antd";
const { Footer } = Layout;

export default function ContentFooter() {
  return (
    <Footer className="text-right text-[#626f86]">
      해도기획.com ©{new Date().getFullYear()} All rights reserved.
    </Footer>
  );
}
