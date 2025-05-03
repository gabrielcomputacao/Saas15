import Link from "next/link";

export default function F1() {
  return (
    <div className="p-10">
      <h1>F1 Page</h1> <br />
      <br />
      <Link href={"/f1/f2"}> Page F2</Link> <br />
      <br />
      <Link href={"/f3"}> Page F3</Link> <br />
      <br />
    </div>
  );
}
