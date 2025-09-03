import React from "react";
import { Flex } from "antd";
import styles from "./AuthFooter.module.css";

export default function AuthFooter() {
  return (
    <div className={styles.container}>
      <Flex gap="10px">
        <span className={styles.text}>이용약관</span>
        <span className={styles.separator}>|</span>
        <span className={styles.text}>개인정보 취급방침</span>
        <span className={styles.separator}>|</span>
        <span className={styles.text}>저작권(라이센스)규정</span>
        <span className={styles.separator}>|</span>
        <span className={styles.text}>고객센터 FAQ</span>
      </Flex>
      <div className={styles.text}>© HAEDOCOMPANY.ALL RIGHTS RESERVED.</div>
    </div>
  );
}
