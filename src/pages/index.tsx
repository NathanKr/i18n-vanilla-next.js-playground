import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <h1>Page : Home </h1>
      <p>locale : {router.locale}</p>
    </main>
  );
}
