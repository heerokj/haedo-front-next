import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link rel="stylesheet" href="/login" className="m-10">
        로그인 페이지로 이동
      </Link>
      <Link rel="stylesheet" href="/dashboard">
        메인 페이지로 이동
      </Link>
    </div>
  );
}
