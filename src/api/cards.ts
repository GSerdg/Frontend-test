import { ROUTES_API } from "@/consts";
import { CardDataType, MOCK_CARDS_DATA } from "@/features/home/consts";

export type CardsQuery = {
  id: string;
  contract_address: string;
  name: string;
  asset_platform_id: string;
  symbol: string;
};

export async function apiGetCards():Promise<CardsQuery[] | null> {

  try {
    const response = await fetch(ROUTES_API.CARDS);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    return await response.json();
  } catch (err) {
    const error = err instanceof Error ? err : new Error(String(err));

    console.error(`Failed to fetch data: ${ROUTES_API.CARDS}`, error.message);
  }

  return null;
};

export const wait = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const getTodos = async () => {
  return new Promise<CardsQuery[] | null>((resolve) => {
    setTimeout(() => {
      resolve(MOCK_CARDS_DATA as unknown as CardsQuery[]);
    }, 150000);
  });
};