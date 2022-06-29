import {
  GlobalPropsContextProvider,
  useGlobalProps,
} from "./contexts/GlobalPropsContext";
import { extractGlobalProps } from "./lib/extractGlobalProps";
import { getStaticPropsWithGlobalProps } from "./lib/getStaticPropsWithGlobalProps";

// Defines the public API
export const GlobalProps = {
  extract: extractGlobalProps,
  getStaticProps: getStaticPropsWithGlobalProps,
  getEmptyStaticProps: getStaticPropsWithGlobalProps(async () => ({
    props: {},
  })),
  Provider: GlobalPropsContextProvider,
  use: useGlobalProps,
};
