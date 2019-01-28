const path = require("path");
const fs = require('fs');
const fs2 = require('fs');

const HDWalletProvider = require('./client/node_modules/truffle-hdwallet-provider');

const infuraKey = fs.readFileSync(".secret").toString().trim();
const mnemonic = fs2.readFileSync(".mnemonic").toString().trim();

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),

  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
     },
     rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4,       // Ropsten's id
    },
  }

};
