import { useContext, useEffect } from "react";
import { Web3Context } from "../../Web3Context";
import "./ShowMessage.styles.css";

const ShowMessage = () => {
  const { state, getMessageFromContract } = useContext(Web3Context);
  const { res, isMessageLoaded, contract, isContractInitilized } = state;

  useEffect(() => {
    if (contract) {
      getMessageFromContract();
    }
  }, [isContractInitilized]);

  return (
    <div className="showMessage__container">
      {!isMessageLoaded ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div>
            <h3>Current Message On Contract</h3>
          </div>
          <div className="showMessage__screen">
            <div className="message_row">
              <h4>Messanger:</h4> <p> {res._lastModifier}</p>
            </div>
            <div className="message_row">
              <h4>Message:</h4> <p> {res._message} </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowMessage;
