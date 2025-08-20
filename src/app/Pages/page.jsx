"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/hello")
      .then((res) => res.json())
      .then((data) => setMsg(data.message));
  }, []);

  return (
    <div>
      <h1>Frontend + Backend Connected </h1>
      <p>{msg}</p>
    </div>
  );
}
