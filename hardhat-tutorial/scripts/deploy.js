const { isCommunityResourcable } = require("@ethersproject/providers");
const {ethers} = require("hardhat");

async function main(){

  const whitelistedContract =  await ethers.getContractFactory("Whitelist");

  const deployedWhitelistContract = await whitelistedContract.deploy(10);
  await deployedWhitelistContract.deployed();
  console.log(
    "WhitelistContractAddress:",
    deployedWhitelistContract.address

    );
}

main()
  .then(()=> process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });