export function Reducer(state, action) {
  switch (action.type) {
    case "InitWeb3":
      return {
        ...state,
        ...action.payload,
        isContractInitilized: true,
      };
    case "ConnectWallet":
      return {
        ...state,
        ...action.payload,
        isWalletConnected: true,
      };

    case "GetMessage":
      return {
        ...state,
        ...action.payload,
        isMessageLoaded: true,
      };

    case "MessageSent": {
      const res = {
        _message: action.payload._value,
        _lastModifier: action.payload._lastModifier,
      };
      return {
        ...state,
        res,
        // isMessageLoaded: true,
      };
    }

    case "DisconnectWallet":
      return {
        ...state,
        walletAddress: null,
        isWalletConnected: false,
        isMessageLoaded: false,
        res: {},
      };
    default:
      return state;
  }
}
export default Reducer;
