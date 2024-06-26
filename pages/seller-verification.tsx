// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import GlobalContextsProvider from "../components/plasmic/verbum_onboarding/PlasmicGlobalContextsProvider";
import { ScreenVariantProvider } from "../components/plasmic/verbum_onboarding/PlasmicGlobalVariant__Screen";
import { PlasmicSellerVerification } from "../components/plasmic/verbum_onboarding/PlasmicSellerVerification";
import { useRouter } from "next/router";
import {
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  embeddedWallet,
  coinbaseWallet,
  walletConnect,
  smartWallet,
} from "@thirdweb-dev/react";
import { Optimism } from "@thirdweb-dev/chains";
const smartWalletOptions = {
  factoryAddress: "0xd7CC4fe0FCAcD12092155F5E1777740EFfcb1329",
  gasless: true
};
import { WalletProvider } from '../components/WalletContext';

function SellerVerification() {
  // Use PlasmicSellerVerification to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicSellerVerification are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, PlasmicSellerVerification is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Next.js Custom App component
  // (https://nextjs.org/docs/advanced-features/custom-app).
  return (
    <ThirdwebProvider
    activeChain={Optimism}
    clientId="aeea0e409104d28890235e065a914b03"
    supportedWallets={[
      metamaskWallet({ recommended: true }),
      smartWallet(
        embeddedWallet({ recommended: true }),
        smartWalletOptions
      ),
      coinbaseWallet(),
      walletConnect(),
    ]}
  > 
      <WalletProvider>
          <GlobalContextsProvider>
            <PageParamsProvider__
              route={useRouter()?.pathname}
              params={useRouter()?.query}
              query={useRouter()?.query}
            >
            <PlasmicSellerVerification />
          </PageParamsProvider__>
        </GlobalContextsProvider>
      </WalletProvider>
    </ThirdwebProvider>
  );
}

export default SellerVerification;
