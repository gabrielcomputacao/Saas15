import { redirect } from "next/navigation";

export default async function ShirtPage({
  searchParams,
}: {
  searchParams: Promise<{ torre: string }>;
}) {
  // Não tem como passar eventos de interação para server components, como o onclick no button

  const { torre = "" } = await searchParams;

  if (torre === "fr") {
    redirect("/about");
  }

  return (
    <div className="p-10">
      <h1>Shirt page</h1>
      <button>Redirecionar</button>
    </div>
  );
}
