const { ethers } = require("ethers");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const SmartAccount = require("@biconomy/smart-account").default;
const Acc = require("@biconomy/account-abstraction")
const { ChainId } = require("@biconomy/core-types");
require('dotenv').config()

const config = {
  privateKey: process.env.PV_KEY,
  rpcUrl: "https://rpc-mumbai.maticvigil.com",
  dappAPIKey: process.env.BICONOMY_SDK,
}

async function main() {
  let provider = new HDWalletProvider(config.privateKey, config.rpcUrl);
  const walletProvider = new ethers.providers.Web3Provider(provider);
  // create SmartAccount instance= 
  const newAcc = new Acc.BaseAccountAPI()
  newAcc
  const wallet = new SmartAccount(walletProvider, {
    debug: false,
    activeNetworkId: ChainId.POLYGON_MUMBAI,
    supportedNetworksIds: [ChainId.POLYGON_MUMBAI],
    networkConfig: [
      {
        chainId: ChainId.POLYGON_MUMBAI,
        dappAPIKey: config.dappAPIKey,
      }
    ]
  });
  wallet.address = ''
  const smartAccount = await wallet.init();
const newaddress = await wallet.getSmartAccountAPI(ChainId.POLYGON_MUMBAI).getCounterFactualAddress()
  console.log({newaddress})

  console.log(smartAccount.address,'------')
  // transfer ERC-20 tokens to recipient

  // Encode an ERC-20 token transfer to recipient of the specified amount
  const recipientAddress = smartAccount.address

  const adRewardsAddress = '0x9eF24bCFCfE25F4e165bb11b7f23429891c86492'
  const adRewardsInterface = new ethers.utils.Interface(['function viewAd()'])

  const adRewardData = adRewardsInterface.encodeFunctionData('viewAd')
  
//   const data = sampleInterface.encodeFunctionData(
//     'addUser', [recipientAddress]
//   )

  // const value = ethers.utils.parseEther('1')
  // console.log(value)
  const tx = {
    to: adRewardsAddress,
    data:adRewardData,
    // value:value,
    // gasLimit:
  }

  // Transaction events subscription
  smartAccount.on('txHashGenerated', (response) => {
    console.log('txHashGenerated event received via emitter', response);
  });
  smartAccount.on('onHashChanged', (response) => {
    console.log('onHashChanged event received via emitter', response);
  });
  smartAccount.on('txMined', (response) => {
    console.log('txMined event received via emitter', response);
  });
  smartAccount.on('error', (response) => {
    console.log('error event received via emitter', response);
  });
//   const feeData = await smartAccount.getFeeQuotes({transaction:tx})
//   console.log(feeData)

  // Sending gasless transaction
//   const txResponse = await smartAccount.sendTransaction({ transaction: tx });
//   console.log('userOp hash', txResponse.hash);
//   // If you do not subscribe to listener, one can also get the receipt like shown below 
//   const txReciept = await txResponse.wait();
//   console.log('Tx hash', txReciept.transactionHash);

  const getViewnterface = new ethers.utils.Interface(['function viewAdCountNumber(address user) public view returns(uint256)'])
// const getViewData = getViewnterface.encodeFunctionData('viewAdCountNumber', recipientAddress)

// const getTxData = {
//     to: adRewardsAddress,
//     data:getViewData,
//     // value:value,
//     // gasLimit:
// }

// const txResponseNew = await smartAccount.sendTransaction({ transaction: getTxData });
// const txRecieptNew = await txResponseNew.wait();
//   console.log('Tx hash', txRecieptNew)
}

main().catch((error) => {
  console.error(error);
});