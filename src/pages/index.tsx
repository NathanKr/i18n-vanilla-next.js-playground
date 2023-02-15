import Lang from "@/types/e-lang";
import { getLangObject } from "logic/utils";
import { useRouter } from "next/router";

export default function Home() {
  const {locale} = useRouter();


  return (
    <main>
      <h1>{getLangObject(locale as Lang).titleMainPage}</h1>
    </main>
  );
}
