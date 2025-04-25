import { Metadata } from "next";
import { notFound } from "next/navigation";

// Cria uma funcao para retornar metadados dinamicos, sempre retornando o tipo metadata do next
export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}): Promise<Metadata> => {
  const prodId = (await params).productId;
  const revId = (await params).reviewId;

  return {
    title: `Product id ${prodId} and ${revId}`,
  };
};

export default async function ReviewId({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;

  // Caso os ids de review nao existam depois do 10, pega e msotrar uma pagina de erro personalizada
  if (parseInt(reviewId) > 10) {
    notFound();
  }

  return (
    <div>
      <div className="p-4">
        <p>ProductID : {productId}</p>
        <p>reviewID : {reviewId}</p>
      </div>
    </div>
  );
}
