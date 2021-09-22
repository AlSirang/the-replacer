import { useContext, useEffect } from "react";
import { Web3Context } from "../../Web3Context";
import SendMessage from "../SendMessage";
import WalletButton from "../WalletButton";

const Header = () => {
  const { initWeb3, state } = useContext(Web3Context);
  const { isContractInitilized, isWalletConnected } = state;
  useEffect(() => {
    initWeb3();
  }, []);
  return (
    <div>{!isContractInitilized ? <p>Loading ...</p> : <WalletButton />}</div>
  );
};

export default Header;
