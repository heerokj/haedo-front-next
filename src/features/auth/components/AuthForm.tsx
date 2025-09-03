"use client";
import { Button, Checkbox, Form, Input, Flex } from "antd";
import logo from "../../../../public/image/haedo-logo.png";
import SocialLoginButtons from "./SocialLoginButtons";
import EventContent from "./EventContent";
import styles from "./AuthForm.module.css";
import Image from "next/image";

export default function AuthForm({ mode }: { mode: string }) {
  return (
    <Form
      name="login"
      initialValues={{ remember: true }}
      className={styles.form}
    >
      {/* 로고 */}
      <div className={styles.logoWrapper}>
        <Image src={logo} alt="logo" height={46} width={159} />
      </div>

      {/* 아이디 */}
      <Form.Item
        name="username"
        rules={[{ required: true, message: "이메일을 입력해주세요" }]}
        style={{ marginBottom: "12px" }}
      >
        <Input
          placeholder="ex) haedo_company@naver.com"
          className={styles.input}
        />
      </Form.Item>

      {/* 비밀번호 */}
      <Form.Item
        name="password"
        rules={[{ required: true, message: "비밀번호를 입력해주세요" }]}
        style={{ marginBottom: "6px" }}
      >
        <Input
          type="password"
          placeholder="비밀번호 입력"
          className={styles.input}
        />
      </Form.Item>

      {/* 아이디 저장 + 회원가입/비밀번호 찾기 */}
      <Form.Item style={{ width: "320px", marginBottom: "20px" }}>
        <Flex justify="space-between" style={{ width: "100%" }}>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox className={styles.idRemember}>아이디 저장</Checkbox>
          </Form.Item>
          <Flex gap="8px">
            <a href="" className={styles.link}>
              회원가입
            </a>
            <span className={styles.separator}>|</span>
            <a href="" className={styles.link}>
              비밀번호 찾기
            </a>
          </Flex>
        </Flex>
      </Form.Item>

      {/* 로그인 버튼 */}
      <Form.Item>
        <Button
          block
          type="primary"
          htmlType="submit"
          className={styles.loginButton}
        >
          로그인
        </Button>
      </Form.Item>

      {/* 소셜 로그인 + 이벤트 */}
      <SocialLoginButtons />
      <EventContent />
    </Form>
  );
}
