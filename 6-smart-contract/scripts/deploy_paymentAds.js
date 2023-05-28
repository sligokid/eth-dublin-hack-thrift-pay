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
   await hre.ethers
  console.log(acc)
    const Sample = await hre.ethers.getContractFactory("PlatformAd")
    const lockedAmount = await hre.ethers.utils.parseEther("0.01");

   
    const ret = await hre.ethers.deployContract("PlatformAd" ,["0x5591c09bbf40a45bf0b8ac3d34e0a6546adac36d", "0xD2203c4bdB029aF733CFF2518F4e7E55cfF0eC49"],acc[1])
    console.log(ret.address)

}
// 0x6cE0A07B71eEb7363A76F32d16AD68C404b1565B
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
