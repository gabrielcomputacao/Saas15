"use client";
import type { Metadata } from "next";

import Link from "next/link";
import { usePathname } from "next/navigation";

// ==> Só pode ter metadata em server components, client components nao pode ter metadata declarado na pagina
/* export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}; */

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const listLinks = [
    { name: "Login", href: "/login" },
    { name: "Register", href: "/register" },
    { name: "Product", href: "/product" },
  ];

  const pathname = usePathname();
  console.log(pathname);

  return (
    <html lang="en">
      <body>
        <div className="p-10 w-full flex gap-4">
          {listLinks.map((value) => {
            return (
              <div className="text-3xl" key={value.name}>
                <Link href={value.href}> {value.name} </Link>
              </div>
            );
          })}
        </div>
        {/* Replace substitui a página atual, nao criando um historico de stack de navegação */}
        <Link href={"/"} replace>
          {" "}
          Link com replace{" "}
        </Link>
        {children}
      </body>
    </html>
  );
}
