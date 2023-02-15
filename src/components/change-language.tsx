import { DEFAULT_LANG, LOCALE_KEY_LOCAL_STORAGE } from "@/logic/constants";
import Lang from "@/types/e-lang";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";

const ChangeLanguage = () => {
  const router = useRouter();
  const [locale, setLocale] = useState(router.locale);
  useEffect(loadPersistedLocale, []);

  function loadPersistedLocale() {
    const value = localStorage.getItem(LOCALE_KEY_LOCAL_STORAGE);
    if (!value) {
      // --- first time ever on client machine so put the default
      setLocaleExtended(DEFAULT_LANG);
    }
    router.push(router.pathname, router.asPath, {
      locale: value ? value : DEFAULT_LANG,
    });
  }

  function setLocaleExtended(_locale: Lang): void {
    setLocale(_locale);
    localStorage.setItem(LOCALE_KEY_LOCAL_STORAGE, _locale);
  }

  const changeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    setLocaleExtended(e.target.value as Lang);
    router.push(router.pathname, router.asPath, { locale: e.target.value });
  };

  return (
    <div>
      <h2>Change language</h2>
      <p>current locale : {locale}</p>
      <select onChange={changeLanguage} defaultValue={locale}>
        <option value={Lang.Heb}>HE</option>
        <option value={Lang.Eng}>EN</option>
      </select>
    </div>
  );
};

export default ChangeLanguage;
