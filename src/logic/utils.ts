import Lang from "@/types/e-lang";
import { ILang } from "@/types/i-lang";
import en from "data/locales/en";
import he from "data/locales/he";

export function getLangObject(locale: Lang): ILang {
  return locale == Lang.Heb ? he : en;
}
