var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var CoffeeHouse = artifacts.require("./CoffeeHouse.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(CoffeeHouse);
};
