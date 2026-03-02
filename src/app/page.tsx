import { apiGetCards } from "@/api";
import { HomeScreen } from "@/features/home/components";

export default async function Home() {
  const cardsData = await apiGetCards();

  return <HomeScreen cardsData={cardsData} />;
}
