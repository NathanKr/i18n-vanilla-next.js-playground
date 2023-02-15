import Lang from "@/types/e-lang";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const locale = Lang.Heb

  const changeLanguage = (e: any) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <main>
      <Link href="/translated-page" locale={Lang.Heb}>
        Navigate to hebrew translated page
      </Link>
      <br />
      <br />
      <Link href="/translated-page" locale={Lang.Eng}>
        Navigate to english translated page
      </Link>
      <br />
      <br />
      <select onChange={changeLanguage} defaultValue={locale}>
        <option value={Lang.Eng}>EN</option>
        <option value={Lang.Heb}>HE</option>
      </select>
    </main>
  );
}
