"use client";

import React, { ReactNode } from "react";
import styles from "./layout.module.css";
import {
  DesktopOutlined,
  CreditCardOutlined,
  CopyOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import SidebarLogo from "@/features/main/common/SidebarLogo";
import UserInfo from "@/features/main/common/UserInfo";
import { useRouter } from "next/navigation";
import ContentFooter from "@/features/main/common/ContentFooter";

const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode, //실제 사이드바에 보이는 텍스트
  key: React.Key, //메뉴 아이템 고유값
  icon?: React.ReactNode, //아이콘 (선택)
  children?: MenuItem[] // 서브 메뉴 (선택)
): MenuItem {
  return {
    label,
    key,
    icon,
    children,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("대시보드", "/dashboard", <DesktopOutlined />),
  getItem("포인트 충전", "/points", <CreditCardOutlined />),
  getItem("마이 페이지", "/profile", <SmileOutlined />),
  getItem("주문 내역", "/orders", <CopyOutlined />),
  // getItem("플레이스", "sub1", <UserOutlined />, [getItem("Tom", "3")]),
  // getItem("쇼핑", "sub2", <TeamOutlined />, [
  //   getItem("Team 1", "6"),
  //   getItem("Team 2", "8"),
  // ]),
  // getItem("플레이스", "sub3", <UserOutlined />, [getItem("Tom", "3")]),
];
export default function MainLayout({ children }: { children: ReactNode }) {
  const router = useRouter();

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    router.push(e.key);
  };

  return (
    <Layout className={styles.layout}>
      {/* 사이드바 */}
      <Sider width={250} className={styles.sider}>
        <SidebarLogo />
        <UserInfo />
        <Menu
          theme="light"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onClick={handleMenuClick}
        />
        {/* <SidebarFooter /> */}
      </Sider>

      {/* 오른쪽 컨텐츠 */}
      <Layout className={styles.contentLayout}>
        <Header className={styles.contentHeader}>
          <span className={styles.headerTitle}>대시보드</span>
          <span>드롭다운</span>
        </Header>
        {/* 동적으로 바뀌는 컨텐츠 내용 */}
        <Content className={styles.content}>{children}</Content>
        <ContentFooter />
      </Layout>
    </Layout>
  );
}
