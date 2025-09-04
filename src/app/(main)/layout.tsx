"use client";

import React, { useState, ReactNode } from "react";
import styles from "./layout.module.css";
import {
  DesktopOutlined,
  FileOutlined,
  CreditCardOutlined,
  CopyOutlined,
  SmileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
// import SidebarFooter from "@/features/main/common/SidebarFooter";
import SidebarLogo from "@/features/main/common/SidebarLogo";
import UserInfo from "@/features/main/common/UserInfo";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("대시보드", "1", <DesktopOutlined />),
  getItem("포인트 충전", "2", <CreditCardOutlined />),
  getItem("마이 페이지", "3", <SmileOutlined />),
  getItem("주문 내역", "4", <CopyOutlined />),
  // getItem("플레이스", "sub1", <UserOutlined />, [getItem("Tom", "3")]),
  // getItem("쇼핑", "sub2", <TeamOutlined />, [
  //   getItem("Team 1", "6"),
  //   getItem("Team 2", "8"),
  // ]),
  // getItem("플레이스", "sub3", <UserOutlined />, [getItem("Tom", "3")]),
];
export default function MainLayout({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className={styles.layout}>
      {/* 사이드바 */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={250}
        className={styles.sider}
      >
        <SidebarLogo />
        <UserInfo />
        <Menu
          theme="light"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
        {/* <SidebarFooter /> */}
      </Sider>

      {/* 오른쪽 컨텐츠 */}
      <Layout className={styles.contentLayout}>
        <Header className={styles.contentHeader}>
          <span>대시보드</span>
          <span>드롭다운</span>
        </Header>

        {/* 동적으로 바뀌는 컨텐츠 내용 */}
        <Content className={styles.content}>{children}</Content>

        <Footer className={styles.footer}>
          해도기획.com ©{new Date().getFullYear()} All rights reserved.
        </Footer>
      </Layout>
    </Layout>
  );
}
