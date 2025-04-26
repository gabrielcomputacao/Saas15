import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Texto que sobrescreve os textos dos filhos",
    absolute: "texto que vai junto com o do filho colocando %s | %s",
    template: "Texto que ignora o texto do pai e fica como sendo este",
  },
};

export default function About() {
  return (
    <>
      <div className="p-5">about</div>
    </>
  );
}
