import React from "react";

export function ModalIcons({
  iconReact,
  name,
}: {
  iconReact: React.ReactNode;
  name: string;
}) {
  return (
    <div>
      <div className="flex flex-col gap-4 justify-center items-center">
        <div>{iconReact}</div>
        <div>{name}</div>
      </div>
    </div>
  );
}
