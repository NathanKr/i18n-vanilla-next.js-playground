import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface ILink {
  href: string;
}

const TopMenu = () => {
  const router = useRouter();

  const links: ILink[] = [
    {
      href: "/",
    },
    {
      href: "/colors",
    },
  ];

  const elemMenu = links.map((it, i) => (
    <div key={i}>
      <Link href={it.href} locale={router.locale}>
        Navigate to {it.href} with locale : {router.locale}
      </Link>
      <br />
    </div>
  ));

  return (
    <div>
      {elemMenu}
      <br />
    </div>
  );
};

export default TopMenu;
