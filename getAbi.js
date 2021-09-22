const fs = require("fs");
const contract = JSON.parse(
  fs.readFileSync(__dirname + "/build/contracts/firstContract.json", "utf8")
);
const abi = JSON.stringify(contract.abi);
fs.writeFileSync("abi.json", abi);
