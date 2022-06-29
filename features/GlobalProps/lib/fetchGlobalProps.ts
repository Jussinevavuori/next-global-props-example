import { productsApi } from "../../../lib/api/productsApi";

export async function fetchGlobalProps(): Promise<GlobalProps> {
  return {
    products: await productsApi.getAll(),
  };
}
