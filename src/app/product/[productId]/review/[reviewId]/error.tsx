"use client";
export default function ErrorReview({ error }: { error: Error }) {
  return (
    <div className="p-10">
      <h3>Error na página</h3>
      <br />
      <p>{error.message}</p>
    </div>
  );
}
