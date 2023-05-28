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
    const SmartAccount = await hre.ethers.getContractFactory("TPSmartAccountFactory")
    const smartAccountFactoryContract = await hre.ethers.getContractAt("TPSmartAccountFactory","0xCa41B32A7C9934dAaC011aA6452d487693B90114");    
    
    const smartAccountFactoryABI = await hre.artifacts.readArtifact('TPSmartAccountFactory')
    //const smartAccountFactory =  new ethers.utils.Interface(smartAccountFactoryABI)

    const sampleABI = await hre.artifacts.readArtifact('Sample')
    //const sample = new ethers.utils.Interface(sampleABI);

    const AccountFunctionName = "execute";
    const AccountParameterTypes = ["address", "uint256", "bytes"]; 
    const AccountfunctionSignature = "execute(address,uint256,bytes)";
    
    const SamplefunctionSignature = "addUser(address)";

    const functionName = "addUser";
    const parameterTypes = ["address"]; 
    
    //const sampleContract = await hre.ethers.utils.FunctionFragment.from('Sample','0x44C8C8e534C32f325b5D523123d05D2615a7C068')
    const encodeSampleData = ethers.utils.defaultAbiCoder.encode(["address"],["0x557005007a21899d8702317620F9b2994FB3b45E"])
    const encodedData = ethers.utils.defaultAbiCoder.encode(AccountParameterTypes, ["0xD2203c4bdB029aF733CFF2518F4e7E55cfF0eC49",ethers.constants.Zero,encodeSampleData ]);

    // const baseAccountAddress = await sampleContract.accountImplementation()
    
    //let calldata = smartAccountFactory.encodeFunctionData("execute",['0xD2203c4bdB029aF733CFF2518F4e7E55cfF0eC49',ethers.constants.Zero,sample.encodeFunctionData('addUser',"0x557005007a21899d8702317620F9b2994FB3b45E")])

    //     struct UserOperation {

    //     address sender;
    //     uint256 nonce;
    //     bytes initCode;
    //     bytes callData;
    //     uint256 callGasLimit;
    //     uint256 verificationGasLimit;
    //     uint256 preVerificationGas;
    //     uint256 maxFeePerGas;
    //     uint256 maxPriorityFeePerGas;
    //     bytes paymasterAndData;
    //     bytes signature;
    // }

    const packed = ethers.utils.defaultAbiCoder.encode(
      [
        "address",
        "uint256",
        "bytes32",
        "bytes32",
        "uint256",
        "uint256",
        "uint256",
        "uint256",
        "uint256",
        "bytes32",
      ],
      [
        this.op.sender,
        this.op.nonce,
        ethers.utils.keccak256(this.op.initCode),
        ethers.utils.keccak256(this.op.callData),
        this.op.callGasLimit,
        this.op.verificationGasLimit,
        this.op.preVerificationGas,
        this.op.maxFeePerGas,
        this.op.maxPriorityFeePerGas,
        ethers.utils.keccak256(this.op.paymasterAndData),
      ]
    );
    const userOpData = ['0x557005007a21899d8702317620F9b2994FB3b45E',0, ]
    console.log(encodedData)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
