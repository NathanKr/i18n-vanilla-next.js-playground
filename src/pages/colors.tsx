import { useRouter } from "next/router";
import Lang from "@/types/e-lang";
import { ILang } from "@/types/i-lang";
import { getLangObject } from "@/logic/utils";

const Colors = () => {
  const { locale } = useRouter();
  const curLang: ILang = getLangObject(locale as Lang);

  return (
    <div>
      <h1>{curLang.titleColorPage}</h1>
      <ul>
        <li>{curLang.red}</li>
        <li>{curLang.green}</li>
        <li>{curLang.blue}</li>
      </ul>
    </div>
  );
};

export default Colors;
