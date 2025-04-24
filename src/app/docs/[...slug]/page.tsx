export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const slugParams = await params;

  console.log(slugParams.slug);

  return <div className="p-10">slug page</div>;
}
