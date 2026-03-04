import { ROUTES_API } from "@/consts";

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
