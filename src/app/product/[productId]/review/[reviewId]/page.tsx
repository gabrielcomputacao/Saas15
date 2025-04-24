import { useEffect, useState } from "react";

export default async function ReviewId({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;

  return (
    <div>
      <div className="p-4">
        <p>ProductID : {productId}</p>
        <p>reviewID : {reviewId}</p>
      </div>
    </div>
  );
}
