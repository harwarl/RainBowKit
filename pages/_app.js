import '@/styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient } = configureChains(  ///sets up the chains
  [mainnet],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({  //get connectors to create a wagmi client
  appName: "TestApp",
  projectId: "5c69e64be9a09cb0d7b93d6ae5f09b40",
  chains
})

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />  
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
