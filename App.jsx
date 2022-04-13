import {
  Provider as AppBridgeProvider,
} from "@shopify/app-bridge-react";
import { AppProvider as PolarisProvider } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";
import "@shopify/polaris/build/esm/styles.css";

import { HomePage } from "./components/HomePage";
import { GraphQLProvider } from "./components/providers/GraphQLProvider";

export default function App() {
  return (
    <PolarisProvider i18n={translations}>
      <AppBridgeProvider
        config={{
          apiKey: process.env.SHOPIFY_API_KEY,
          host: new URL(location).searchParams.get("host"),
          forceRedirect: true,
        }}
      >
        <GraphQLProvider>
          <HomePage />
        </GraphQLProvider>
      </AppBridgeProvider>
    </PolarisProvider>
  );
}
