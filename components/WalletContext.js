import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAddress } from "@thirdweb-dev/react";

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
    const address = useAddress();
    const [wallet, setWallet] = useState({ isConnected: !!address, address: address });
  
    useEffect(() => {
      console.log('Address changed:', address);
      
      if (address) {
        setWallet({ isConnected: true, address: address });
      } else {
        setWallet({ isConnected: false, address: null });
      }
    }, [address]);
  
    return (
      <WalletContext.Provider value={wallet}>
        {children}
      </WalletContext.Provider>
    );
};

 export function useWallet(){
    return useContext(WalletContext);
 }