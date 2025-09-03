import event from "../../../../public/image/login-event.png";
import styles from "./EventContent.module.css";
import Image from "next/image";

export default function EventContent() {
  return (
    <div className={styles.container}>
      <Image src={event} alt="event" height={50} width={298} />
    </div>
  );
}
