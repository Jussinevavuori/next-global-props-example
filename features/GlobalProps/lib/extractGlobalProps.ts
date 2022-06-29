import { productsApi } from "../../../lib/api/productsApi";
import { defaultGlobalPropsContextValue } from "../contexts/GlobalPropsContext";

export function extractGlobalProps(data: any): GlobalProps {
  if (!data) return defaultGlobalPropsContextValue;

  // Do it the correct way with type validation and default values
  return {
    products: productsApi.isProducts(data.products) ? data.products : [],
  };

  // Or do it the lazy way if you trust your pageProps to have the correct shape
  // return data as GlobalProps;
}
