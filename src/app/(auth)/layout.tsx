import { ReactNode } from "react";
import introImg from "../../../public/image/intro-image.jpg";
import GlassButton from "@/features/auth/components/GlassButton";
import AuthFooter from "@/features/auth/components/AuthFooter";
import styles from "./layout.module.css";
import { Flex } from "antd";

const ButtonTitle = ["대시보드", "캠페인 생성", "캠페인 관리", "순위 추적"];

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Flex className={styles.loginSection}>
      {/* 왼쪽 폼 */}
      <Flex className={styles.leftPanel}>
        {children}
        <AuthFooter />
      </Flex>

      {/* 오른쪽 내용 */}
      <Flex
        className={styles.rightPanel}
        style={{
          backgroundImage: `url(${introImg.src})`,
        }}
      >
        <div className={styles.title}>
          <p>똑똑한 셀프 마케팅 파트너</p>
          <p>해도기획과 함께하세요</p>
        </div>
        <div className={styles.subTitle}>
          <p>자영업자, 광고 대행사를 위한 단 하나의 플랫폼</p>
          <p>캠페인 생성부터 현황 관리까지 간편하게</p>
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          {ButtonTitle.map((title, idx) => (
            <GlassButton title={title} key={idx} />
          ))}
        </div>
      </Flex>
    </Flex>
  );
}
