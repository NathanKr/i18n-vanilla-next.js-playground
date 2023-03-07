import ChangeLanguage from "@/components/change-language";
import TopMenu from "@/components/top-menu";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <TopMenu />
      <ChangeLanguage />
      <br />
      <Component {...pageProps} />
    </>
  );
}
