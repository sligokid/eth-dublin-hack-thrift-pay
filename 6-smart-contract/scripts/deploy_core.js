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
    const Sample = await hre.ethers.getContractFactory("ThriftPayCore")
    const lockedAmount = await hre.ethers.utils.parseEther("0.01");

   
    const ret = await hre.ethers.deployContract("ThriftPayCore" ,acc[0])
    console.log(ret.address)

    //const smartAccountFactoryContract = await hre.ethers.getContractAt("ThriftPayCore","0xCa41B32A7C9934dAaC011aA6452d487693B90114");    

}
//0x307FBc2Ed4FF911A0F50aCB773D263D1e91FFD09
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
