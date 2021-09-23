import { useContext } from "react";
import { Web3Context } from "../../Web3Context";
import "./WalletButton.styles.css";

const WalletButton = () => {
  const { state, handleConnectWallet, handleDisconnectWallet } =
    useContext(Web3Context);
  const { isWalletConnected } = state;
  return (
    <>
      {isWalletConnected ? (
        <button onClick={handleDisconnectWallet} className="disconnect__btn">
          Disconnect Wallet
        </button>
      ) : (
        <button onClick={handleConnectWallet} className="connect__btn">
          Connect Wallet
        </button>
      )}
    </>
  );
};

export default WalletButton;
