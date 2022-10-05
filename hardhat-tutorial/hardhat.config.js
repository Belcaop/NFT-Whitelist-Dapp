require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();


const GOERLI_URL = process.env.GOERLI_URL;
const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "goerli",
  networks: {
    goerli:{
      url: GOERLI_URL,
      accounts:[GOERLI_PRIVATE_KEY],
      chainId: 5,
    },
  },
};
