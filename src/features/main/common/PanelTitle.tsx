import React from "react";

export default function PanelTitle({ title }: { title: string }) {
  return (
    <p style={{ fontWeight: 600, fontSize: "15px", paddingBottom: "20px" }}>
      {title}
    </p>
  );
}
