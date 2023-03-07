import { DEFAULT_LANG, LOCALE_KEY_LOCAL_STORAGE } from "@/logic/constants";
import Lang from "@/types/e-lang";
import { useRouter } from "next/router";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

const ChangeLanguage = () => {
  const router = useRouter();
  const [locale, setLocale] = useState(router.locale);
  // --- useCallback is used due to eslint warning
  const setLocaleExtended = useCallback((_locale: Lang): void => {
    setLocale(_locale);
    localStorage.setItem(LOCALE_KEY_LOCAL_STORAGE, _locale);
    router.push(router.pathname, router.asPath, { locale: _locale });
  }, [router]);
  useEffect(loadPersistedLocale, [setLocaleExtended]);

  function loadPersistedLocale() {
    let _locale = localStorage.getItem(LOCALE_KEY_LOCAL_STORAGE);
    if (!_locale) {
      // --- first time ever on client machine so put the default
      _locale = DEFAULT_LANG;
    }
    setLocaleExtended(_locale as Lang);
  }

  
  const changeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    setLocaleExtended(e.target.value as Lang);
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
