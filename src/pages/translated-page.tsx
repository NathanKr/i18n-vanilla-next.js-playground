import { useRouter } from "next/router";
import en from "data/locales/en";
import he from "data/locales/he";
import Lang from "@/types/e-lang";
import { ILang } from "@/types/i-lang";

const TranslatedPage = () => {
  const { locale } = useRouter();
  const curLang: ILang = locale == Lang.Heb ? he : en;

  return (
    <div>
      <h1>Page : TranslatedPage </h1>
      <p>locale : {locale}</p>
      <h2>Colors</h2>
      <ul>
        <li>{curLang.red}</li>
        <li>{curLang.green}</li>
        <li>{curLang.blue}</li>
      </ul>
    </div>
  );
};

export default TranslatedPage;
