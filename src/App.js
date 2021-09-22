import React from "react";
import "./App.css";
import Header from "./components/Header";
import SendMessage from "./components/SendMessage";
import ShowMessage from "./components/ShowMessage";
import { Web3Provider } from "./Web3Context";

function App() {
  return (
    <Web3Provider>
      <div className="App">
        <Header />
        <SendMessage />

        <ShowMessage />
      </div>
    </Web3Provider>
  );
}

export default App;
