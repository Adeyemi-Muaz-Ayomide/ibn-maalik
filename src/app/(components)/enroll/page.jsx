// src/app/(components)/enroll/page.jsx
"use client";
import dynamic from "next/dynamic";

const EnrollModal = dynamic(() => import("./EnrollModal"), { ssr: false });

export default function Page() {
  return <EnrollModal />;
}
