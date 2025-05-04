import * as FaIcons from "react-icons/ai";
import { ListIcons } from "./utils";
import { ModalIcons } from "@/components/modalCustom/Modal";
import Link from "next/link";

export default function PhotoFeed() {
  return (
    <div className="p-10">
      <p>Photo Feed</p>
      <div className="flex gap-10 mt-10">
        {ListIcons.map((value: any, index) => {
          const IconComponent = FaIcons[value];
          return (
            <Link href={`/photo-feed/${index}`} key={index}>
              <ModalIcons iconReact={<IconComponent />} name={value} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
