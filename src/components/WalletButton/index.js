import { useContext } from "react/cjs/react.development";
import { Web3Context } from "../../Web3Context";

const WalletButton = () => {
  const { state, handleConnectWallet, handleDisconnectWallet } =
    useContext(Web3Context);
  const { isWalletConnected } = state;
  return (
    <>
      {isWalletConnected ? (
        <button onClick={handleDisconnectWallet}>Disconnect Wallet</button>
      ) : (
        <button onClick={handleConnectWallet}>Connect Wallet</button>
      )}
    </>
  );
};

export default WalletButton;
