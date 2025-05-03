"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorReview({
  error,
  reset,
}: {
  error: Error;
  // a funcao reset tentara renderizar a pagina novamento do lado do client side
  reset: () => void;
}) {
  const rout = useRouter();
  const reload = () => {
    startTransition(() => {
      rout.refresh();
      reset();
    });
  };

  return (
    <div className="p-10">
      <h3>Error na página</h3>
      <br />
      <p>{error.message}</p>
      <button className="bg-white text-red-600" onClick={() => reload()}>
        Tyr again
      </button>
    </div>
  );
}
