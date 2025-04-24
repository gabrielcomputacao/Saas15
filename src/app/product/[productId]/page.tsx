export default async function ProductId({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;

  return (
    <div className="p-4">
      <p>Product dinamic {productId} </p>
    </div>
  );
}
