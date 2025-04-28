"use client";
import Link from "next/link";
import { useState } from "react";

export default function AboutTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState("");

  return (
    <>
      <div className="p-10">
        <h4>ENvolta do template</h4>
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <div className="flex gap-4 justify-center">
          <h4>Links in About ==</h4>
          <Link href={"/about"}>About</Link>
          <Link href={"/about/code"}>Code</Link>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}
