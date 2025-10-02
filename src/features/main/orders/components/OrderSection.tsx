import React, { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export default function OrderSection({ title, children }: Props) {
  return (
    <section
      style={{
        flex: "1",
        backgroundColor: "white",
        borderRadius: "18px",
      }}
    >
      <div style={{ margin: "12px" }}>
        <p
          style={{
            marginBottom: "10px",
            fontWeight: 700,
            fontSize: "17.8px",
          }}
        >
          {title}
        </p>
        {children}
      </div>
    </section>
  );
}
