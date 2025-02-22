import React from "react";
import { useEffect, useState } from "react";

export default function Header() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
  <>
  <h1>header</h1>
  <div>{isClient ? "クライアント" : "サーバー"}</div>;
  </>
)
}