import React, { useContext } from "react";
import "./App.css";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import SendMessage from "./components/SendMessage";
import ShowMessage from "./components/ShowMessage";
import { Web3Context } from "./Web3Context";

function App() {
  const { state } = useContext(Web3Context);
  const { hasProvider } = state;
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
