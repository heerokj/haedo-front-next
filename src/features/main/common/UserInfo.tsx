import { Button, Flex } from "antd";
import styles from "./UserInfo.module.css";
import Link from "next/link";

export default function UserInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.infoBox}>
        <p className={styles.userName}>
          해도기획 님<span className={styles.grade}>FAMILY</span>
        </p>
        <p className={styles.points}>
          포인트 :<span className={styles.pointValue}>4,156,687 P</span>
        </p>
      </div>
      <Flex gap="small" justify="center">
        <Link href={"/login"}>
          <Button color="default" variant="solid">
            로그인
          </Button>
        </Link>
        <Button color="primary" variant="solid">
          회원가입
        </Button>
      </Flex>
    </div>
  );
}
