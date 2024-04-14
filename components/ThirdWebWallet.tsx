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

export default function App() {
  return (
    <ThirdwebProvider
      activeChain={Optimism}
      clientId="aeea0e409104d28890235e065a914b03"
      supportedWallets={[
        metamaskWallet({ recommended: true }),
        smartWallet(
          embeddedWallet({recommended: true}),
          smartWalletOptions
        ),
        coinbaseWallet(),
        walletConnect(),
      ]}
    >
      <ConnectWallet
        theme={"dark"}
        modalSize={"wide"}
        btnTitle="Connect"
      />
    </ThirdwebProvider>
  );
}
