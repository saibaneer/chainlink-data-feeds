/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

console.log(process.env.PRIVATE_KEY);

module.exports = {
  solidity: "0.8.3",
  networks: {
    hardhat: {
      forking: {
        url: "https://rinkeby.infura.io/v3/3c2e6fcec30a4270b7b2f2d5b23a63bb",
        blockNumber: 10238150,
      },
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/3c2e6fcec30a4270b7b2f2d5b23a63bb",
      accounts: [
        `${process.env.PRIVATE_KEY}`,
      ],
    },
  },
  etherscan: {
    apiKey: "FV2T46545TZBW3XZC569495XRD98QNBKUA",
  },
};
