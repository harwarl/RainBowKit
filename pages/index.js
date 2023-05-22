import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount, useDisconnect, useBalance, useNetwork, usePrepareContractWrite, useContractWrite, useSwitchNetwork} from 'wagmi'
import { contractABI } from '@/data/ABI'
import { parseEther } from 'viem'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  //network switching
  const { chain } = useNetwork()
  const { 
    chains, 
    pendingChainId, 
    switchNetwork
  } = useSwitchNetwork();
  
  const { 
    address, 
    isConnected 
  } = useAccount({
    onConnect: ({ address, isReconnected, connector }) =>{
      alert('Wallet has been connected, ' + address);
    }
  });

  const { 
    data, 
    isError, 
    isLoading 
  } = useBalance({
    address: address
  });

  const {
    config, 
    error
  } = usePrepareContractWrite({
    address: '0x04e50252591c47eAC0Ec645668D8Bc9ec9cbe973',
    abi: contractABI,
    functionName: "depositETH",
    args: ["_name", "_email", "_invoiceID", "_paymentFor", "_note"],
    value: parseEther('0.001')
  })

  const {
    write: EthWrite,
    isSuccess
  } = useContractWrite(config)

  const { disconnect } = useDisconnect();

  if (isConnected) {
    return (
      <>
      <div>
        address: { address }
        balance: { data?.formatted } {data?.symbol}
        <button onClick={()=> EthWrite?.()}>Send</button>
        <button onClick={() => disconnect()}>Disconnect</button>
      </div> 

      {chain && <div>connected to {chain.name}</div>}
      {chains.map((x) => (
          <button
            disabled={!switchNetwork || x.id === chain?.id}
            key={x.id}
            onClick={() => switchNetwork?.(x.id)}
          >
            {x.name}
            {isLoading && pendingChainId === x.id && ' (switching)'}
          </button>
        ))}
        </>
    )
    {error && (
      <div>An error occurred preparing the transaction: {error.message}</div>
    )}
  }

  return ( 
    <>
    <div>
      <h1>Connect To Wallet</h1>
    </div>
  
    <ConnectButton />
    {/* <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted  !== 'loading';
        const connected =
          ready &&
          account &&
          chain 
        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button onClick={openConnectModal} type="button">
                    Connect Wallet
                  </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button">
                    Wrong network
                  </button>
                );
              }
              return (
                <div style={{ display: 'flex', gap: 12 }}>
                  <button
                    onClick={openChainModal}
                    style={{ display: 'flex', alignItems: 'center' }}
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>
                  <button onClick={openAccountModal} type="button">
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ''}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom> */}
    </>
  )

}