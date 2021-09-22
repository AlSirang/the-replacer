import { useContext, useEffect } from "react";
import { Web3Context } from "../../Web3Context";

const ShowMessage = () => {
  const { state, getMessageFromContract } = useContext(Web3Context);
  const { res, isMessageLoaded, contract, isContractInitilized } = state;

  useEffect(() => {
    if (contract) {
      getMessageFromContract();
    }
  }, [isContractInitilized]);

  return (
    <div>
      {!isMessageLoaded ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>Message: {res._message} </p>
          <p>Wallet Address: {res._lastModifier}</p>
        </div>
      )}
    </div>
  );
};

export default ShowMessage;
