import { useContext, useState } from "react";
import { Web3Context } from "../../Web3Context";

const SendMessage = () => {
  const { state, setMessageOnContract } = useContext(Web3Context);
  const { isWalletConnected } = state;
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessageOnContract(input);
  };

  return (
    <div>
      {isWalletConnected ? (
        <form onSubmit={handleSubmit}>
          <label> Update the Message On Block Chain </label>
          <input
            type="text"
            value={input}
            onChange={handleChange}
            required
            autoComplete="off"
          />
          <input type="submit" value="Send" />
        </form>
      ) : (
        <p>Please Connect Your Walle To Write Message</p>
      )}
    </div>
  );
};

export default SendMessage;
