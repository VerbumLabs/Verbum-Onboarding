// src/App.js
import { WalletProvider } from './WalletContext';
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
import { darkTheme, lightTheme } from "@thirdweb-dev/react";
 
const customDarkTheme = darkTheme({
  fontFamily: "Inter, sans-serif",
  colors: {
    modalBg: "#000000",
    accentText: "blue",
    // ... etc
  },
});

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
        embeddedWallet({ recommended: true }),
        smartWalletOptions
      ),
      coinbaseWallet(),
      walletConnect(),
    ]}
  >    <WalletProvider>
     
          <ConnectWallet
            theme={customDarkTheme}
            modalSize={"wide"}
            btnTitle="Connect"
            modalTitle="Connect to Verbum"
          />
    </WalletProvider>
      </ThirdwebProvider>
  );
}

