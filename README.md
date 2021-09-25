# The Replacer

A simple dApp where a user can update the state of contract by sending a message.

## Requirments
Nodejs
truffle
ganache-cli

## npm i
Type `npm i` to install required modules.

## npm start

Type `npm start` to run the web page. Before typing `npm start`, deploy the smart contract and update ABI and contract address  in [Web3Context](./src/Web3Context ) folder.


```JavaScript
const CONTRACT_ADDRESS = "YOUR CONTRACT ADDRESS AFTER DEPLOYMENT";
```


## Smart Contract Deployemt

Type `truffle migrate --network development --reset` to deploy the contract on local network.
Before running this commad run ganache-cli in a Terminal by Typing `ganache-cli`.
