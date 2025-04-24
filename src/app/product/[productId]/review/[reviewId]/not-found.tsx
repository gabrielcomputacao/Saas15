"use client";

import { usePathname } from "next/navigation";

// Caso precise mostrar mensagens com base na rota, precisa tranformar o componente em client components para pegar o pathname
export default function NotFound() {
  const pathName = usePathname();

  const partsPathName = pathName.split("/");
  const partsPathName1 = partsPathName[2];
  const partsPathName2 = partsPathName[4];

  return (
    <div>
      <div className="p-10">
        <h1>
          Página erro personalizada review product {partsPathName1} e review{" "}
          {partsPathName2}
        </h1>
      </div>
    </div>
  );
}
