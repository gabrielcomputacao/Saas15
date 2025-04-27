"use client";
import { useRouter } from "next/navigation";

export default function NextProduct() {
  const router = useRouter();

  return (
    <div className="p-10">
      <h1>Next product</h1>
      <button
        onClick={() => {
          console.log("cliquei");
          router.push("/docs/teste1");
        }}
      >
        CLicar
      </button>
    </div>
  );
}
