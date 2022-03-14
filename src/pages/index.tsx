import Head from "next/head";
import Header from "@components/Header";
import SneakersContainer from "@components/SneakersContainer";
import TextContainer from "@components/TextContainer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sneaker Animation</title>
        <meta name="description" content="Developed by JAPECorp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <SneakersContainer />
        <TextContainer />
      </main>
    </div>
  );
}
