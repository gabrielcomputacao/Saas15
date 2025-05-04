import { ListIcons } from "../utils";
import * as FaIcons from "react-icons/ai";

export default async function EspecificIcon({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const iconValue = ListIcons[Number(id)];
  const IconVisual = FaIcons[iconValue];

  return (
    <div className="p-10">
      <div>
        <h2> Esse é o icone {iconValue}</h2>
        <div>
          <p>Seu Icone é</p>
          <div>
            <IconVisual size={34} />
          </div>
        </div>
      </div>
    </div>
  );
}
