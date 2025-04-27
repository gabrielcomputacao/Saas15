export default async function Article({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang: string }>;
}) {
  // == Caso fosse uma client side page pegaria o param e search params atraves do use(params) e use(searchParams)

  const { articleId } = await params;
  const { lang } = await searchParams;

  return (
    <>
      <div className="p-10">
        <p>Esse é o parametro : {articleId}</p>
        <p>Esse é o parametro de busca ou searchParams : {lang}</p>
      </div>
    </>
  );
}
