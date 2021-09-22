const Contract = artifacts.require("firstContract");

module.exports = function (deployer) {
  deployer.deploy(Contract);
};
