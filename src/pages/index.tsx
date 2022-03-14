import Header from "@components/Header";
import SneakersContainer from "@components/SneakersContainer";
import TextContainer from "@components/TextContainer";

export default function Home() {
  return (
    <div>
      <Header />;
      <main>
        <SneakersContainer />
        <TextContainer />
      </main>
    </div>
  );
}
