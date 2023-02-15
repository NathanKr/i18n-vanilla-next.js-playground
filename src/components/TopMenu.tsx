import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface ILink {
  href: string;
  //   locale: string;
  //   text: string;
}

const TopMenu = () => {
  const router = useRouter();

  const links: ILink[] = [
    {
      href: "/",
    },
    {
      href: "/translated-page",
    },
  ];

  const elemMenu = links.map((it, i) => (
    <>
      <Link key={i} href={it.href} locale={router.locale}>
        Navigate to {it.href} with locale : {router.locale}
      </Link>
      <br />
    </>
  ));

  return (
    <div>
      {elemMenu}
      <br />
    </div>
  );
};

export default TopMenu;
