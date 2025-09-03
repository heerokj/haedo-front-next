import googleImg from "../../../../public/image/google_btn_circle.png";
import kakaoImg from "../../../../public/image/kakao_btn_square.png";
import naverImg from "../../../../public/image/naver_btn_circle.png";
import styles from "./SocialLoginButtons.module.css";
import Image from "next/image";

export default function SocialLoginButtons() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>SNS 계정 간편 로그인</p>
      <div className={styles.buttonWrapper}>
        <button className={styles.button}>
          <Image src={googleImg} alt="구글" height={50} width={50} />
        </button>
        <button className={styles.button}>
          <Image
            src={kakaoImg}
            alt="카카오"
            height={50}
            width={50}
            className={styles.kakaoImg}
          />
        </button>
        <button className={styles.button}>
          <Image src={naverImg} alt="네이버" height={50} width={50} />
        </button>
      </div>
    </div>
  );
}
