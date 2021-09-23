import { useContext, useState } from "react";
import { Web3Context } from "../../Web3Context";
import WalletButton from "../WalletButton";
import "./SendMessage.styles.css";
import svgIcon from "../../assets/mail.svg";

const SendMessage = () => {
  const { state, setMessageOnContract } = useContext(Web3Context);
  const { isWalletConnected, walletAddress } = state;
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessageOnContract(input);
  };

  return (
    <div className="sendMessage__container">
      {isWalletConnected ? (
        <div>
          <div className="sendMessage__top">
            <p>
              <span className="title">Connected Wallet Address:</span>
              &nbsp;{walletAddress}
            </p>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="form">
              <div className="form-group">
                <label className="title">
                  Update the Message On Block Chain
                </label>
                <textarea
                  value={input}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />
              </div>
              <button className="send_button" type="submit">
                <span> Update Message </span>
                <img src={svgIcon} alt="" />
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div>
          <p className="title">
            Connect Your Walle to Update the Message on Contract.
          </p>
        </div>
      )}
      <div className="mobile_view">
        <WalletButton />
      </div>
    </div>
  );
};

export default SendMessage;
