import React, { useContext, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import SendMessage from "./components/SendMessage";
import ShowMessage from "./components/ShowMessage";
import { Web3Context } from "./Web3Context";

function App() {
  const { state, initWeb3, handleConnectWallet } = useContext(Web3Context);
  const { hasProvider, web3 } = state;

  useEffect(() => {
    // listen to network change in meta mask
    web3 &&
      window.ethereum &&
      window.ethereum.on("chainChanged", async function (networkId) {
        await initWeb3();
      });
    // listen to account change in meta mask
    web3 &&
      window.ethereum &&
      window.ethereum.on("accountsChanged", async function (walletAddress) {
        handleConnectWallet();
      });
  }, [web3]);

  useEffect(() => {
    initWeb3();
  }, []);
  return (
    <div className="App">
      <Header />
      {hasProvider ? (
        <>
          <SendMessage />
          <ShowMessage />
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
}

export default App;
