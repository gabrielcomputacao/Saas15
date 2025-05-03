import Link from "next/link";

export default function Notifications() {
  return (
    <div className="flex gap-5">
      <h2>Notifications</h2>
      <Link href={"/complex-dashboard/archived"}>Archied Link</Link>
    </div>
  );
}
