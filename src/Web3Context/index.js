import React, { useReducer, createContext } from "react";
import Web3 from "web3";
import Reducer from "./reducer";
import ABI from "./ABI.json";

const CONTRACT_ADDRESS = "0xe134C52fED89e18611950c05d1067794B7404523";
const initialState = {
  isWalletConnected: false,
  walletAddress: null,
  // balance: null,
  hasProvider: false,
  isContractInitilized: false,
  contract: null,
  web3: null,
  isMessageLoaded: false,
  res: {
    _message: null,
    _lastModifier: null,
  },
};

export const Web3Context = createContext(initialState);

export function Web3Provider({ children }) {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const initWeb3 = () => {
    try {
      const PROVIDER = Web3.givenProvider || window.ethereum || window.web3;
      if (PROVIDER) {
        const web3 = new Web3(PROVIDER);
        let contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
        dispatch({
          type: "InitWeb3",
          payload: {
            contract,
            web3,
          },
        });
      } else {
        dispatch({
          type: "InitWeb3Failed",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleConnectWallet = async (web3) => {
    try {
      const addresses = await state.web3.eth.requestAccounts();
      // const networkId = await WEB_3_GLOBAL_VARIABLE.eth.net.getId();a
      let address = addresses[0];
      dispatch({
        type: "ConnectWallet",
        payload: {
          walletAddress: address,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
  const handleDisconnectWallet = () => {
    dispatch({
      type: "DisconnectWallet",
    });
  };

  const getMessageFromContract = async () => {
    try {
      const res = await state.contract.methods.getState().call();
      dispatch({
        type: "GetMessage",
        payload: { res },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const setMessageOnContract = async (message) => {
    try {
      const res = await state.contract.methods
        .setState(message)
        .send({ from: state.walletAddress });

      dispatch({
        type: "MessageSent",
        payload: res.events.MessageUpdated.returnValues,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Web3Context.Provider
      value={{
        state,
        getMessageFromContract,
        setMessageOnContract,
        initWeb3,
        handleConnectWallet,
        handleDisconnectWallet,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
}
