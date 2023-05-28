// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const dotenv = require('dotenv');
const { ethers } = require("ethers");
async function main() {
  const acc = await hre.ethers.getSigners()
    const smartAccountFactory = await hre.ethers.getContractAt("TPSmartAccountFactory","0xCa41B32A7C9934dAaC011aA6452d487693B90114");
    const smartAccoutBase = await hre.ethers.getContractAt("TPSmartAccount","0x3379271110d306734e95c110C9f7aD8250C9dbEE")
    const entryPointAddress = '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789'
    
    const salt = 1231242342


    console.log(smartAccountFactory.address)
    const baseAccountAddress = await smartAccountFactory.accountImplementation()
    console.log(baseAccountAddress)

    // Create Account

    const createAccount = await smartAccountFactory.createAccount('0xD2203c4bdB029aF733CFF2518F4e7E55cfF0eC49',salt)
    const returnData = await ethers.utils.hexlify(createAccount.data)
    console.log(returnData)

    // Get Address 
    const newAddress = await smartAccountFactory.getAddress('0xD2203c4bdB029aF733CFF2518F4e7E55cfF0eC49', salt)
    console.log(newAddress)

    
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
