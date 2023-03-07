import Lang from "@/types/e-lang";
import { getLangObject } from "@/logic/utils";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const { locale } = useRouter();
  useEffect(() => console.log("App mount"), []);

  return (
    <main>
      <h1>{getLangObject(locale as Lang).titleMainPage}</h1>
    </main>
  );
}
