// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const dotenv = require('dotenv')
async function main() {
  const acc = await hre.ethers.getSigners()
    const Sample = await hre.ethers.getContractFactory("AdRewards")
    const lockedAmount = await hre.ethers.utils.parseEther("0.01");

    const ret = await Sample.deploy("0xD2203c4bdB029aF733CFF2518F4e7E55cfF0eC49", {value:lockedAmount})
    console.log(ret.address)
    // const AdRewards = await hre.ethers.getContractAt("AdRewards","0x14B7181CC0695e27434E1e1a280dc6A8b67cAc82")
    // console.log(await AdRewards.myBalance())


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
