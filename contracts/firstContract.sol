// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract firstContract {
  struct  State {
    string message;
    address lastModifiedBy;
    
  }

State private currState;

event MessageUpdated (string _value, address _lastModifier);

constructor() public {
    currState.message = "Welcome To Contract ";
  currState.lastModifiedBy = msg.sender;
}

// sets data
function setState (string memory _value) public {
  currState.message = _value;
  currState.lastModifiedBy = msg.sender;
  emit MessageUpdated(currState.message, currState.lastModifiedBy);
}
// gets data
function getState () public view returns(string memory _message, address _lastModifier){
  State memory t = currState;
  return  (t.message, t.lastModifiedBy);
  

}
}
