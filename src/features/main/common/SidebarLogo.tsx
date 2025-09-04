import logo from "../../../../public/image/haedo-logo.png";
import Image from "next/image";

export default function SidebarLogo() {
  return (
    <div
      style={{
        borderBottom: "1px solid #DEE2E6",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "20px 0px",
        }}
      >
        <Image width={130} height={36} alt="logo" src={logo} />
      </div>
    </div>
  );
}
