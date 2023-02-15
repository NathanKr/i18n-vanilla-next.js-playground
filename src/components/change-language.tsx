import Lang from "@/types/e-lang";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";

const ChangeLanguage = () => {
  const router = useRouter();
  const [locale, setLocale] = useState(router.locale);

  const changeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    setLocale(e.target.value as Lang);
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
