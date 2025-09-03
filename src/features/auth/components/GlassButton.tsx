import { Button } from "antd";
import styles from "./GlassButton.module.css";

type Props = {
  title: string;
  key: number;
};

export default function GlassButton({ title, key }: Props) {
  return (
    <Button
      key={key}
      type="default"
      shape="round"
      size="large"
      className={styles.glassButton}
    >
      {title}
    </Button>
  );
}
