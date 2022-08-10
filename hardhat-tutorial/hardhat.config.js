require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();


const RINKEBY_URL = process.env.RINKEBY_URL;
const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "rinkeby",
  networks: {
    rinkeby:{
      url: RINKEBY_URL,
      accounts:[RINKEBY_PRIVATE_KEY],
      chainId: 4,
    },
  },
};
