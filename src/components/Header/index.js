import { useContext, useEffect } from "react";
import { Web3Context } from "../../Web3Context";
import WalletButton from "../WalletButton";
import "./Header.styles.css";

const Header = () => {
  const { initWeb3, state } = useContext(Web3Context);
  const { isContractInitilized, hasProvider } = state;
  useEffect(() => {
    initWeb3();
  }, []);
  return (
    <div>
      <div className="header">
        <div className="header__brand">The Replacer</div>
        {hasProvider && !isContractInitilized && (
          <div className="header__button">
            <WalletButton />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
