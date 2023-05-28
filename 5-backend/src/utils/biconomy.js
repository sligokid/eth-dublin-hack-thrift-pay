const { ethers } = require("ethers");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const SmartAccount = require("@biconomy/smart-account").default;
const { ChainId } = require("@biconomy/core-types");
require('dotenv').config()
const config = {
  privateKey: process.env.PV_KEY,
  rpcUrl: "https://rpc-mumbai.maticvigil.com",
  dappAPIKey: process.env.BICONOMY_SDK,
}

async function viewAd() {
    try {
    let provider = new HDWalletProvider(config.privateKey, config.rpcUrl);
    const walletProvider = new ethers.providers.Web3Provider(provider);
        // create SmartAccount instance
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
  const smartAccount = await wallet.init();
  console.log(smartAccount.address,'------')

  const recipientAddress = smartAccount.address

  const adRewardsAddress = '0x9eF24bCFCfE25F4e165bb11b7f23429891c86492'
  const adRewardsInterface = new ethers.utils.Interface(['function viewAd()'])

  const adRewardData = adRewardsInterface.encodeFunctionData('viewAd')
  
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

  // Sending gasless transaction
  const txResponse = await smartAccount.sendTransaction({ transaction: tx });
  console.log('userOp hash', txResponse.hash);
  // If you do not subscribe to listener, one can also get the receipt like shown below 
  const txReciept = await txResponse.wait();
  console.log('Tx hash', txReciept.transactionHash);
  return txReciept.transactionHash;
//   const getViewnterface = new ethers.utils.Interface(['function viewAdCountNumber(address user) public view returns(uint256)'])
//     const getViewData = getViewnterface.encodeFunctionData('viewAdCountNumber', recipientAddress)

// const getTxData = {
//     to: adRewardsAddress,
//     data:getViewData,
//     // value:value,
//     // gasLimit:
// }

// const txResponseNew = await smartAccount.sendTransaction({ transaction: getTxData });
// const txRecieptNew = await txResponseNew.wait();
//   console.log('Tx hash', txRecieptNew.)   
    } catch (error) {
        throw error
    }
}

async function skipAd() {
  
    try {
            let provider = new HDWalletProvider(config.privateKey, config.rpcUrl);
            const walletProvider = new ethers.providers.Web3Provider(provider);
                // create SmartAccount instance
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
            
        const smartAccount = await wallet.init();
        console.log(smartAccount.address,'------')

        const recipientAddress = smartAccount.address

        const coreContractAddress = '0x307FBc2Ed4FF911A0F50aCB773D263D1e91FFD09'
        const adRewardsInterface = new ethers.utils.Interface(['function payAmount(address publisher) public payable'])

        const adRewardData = adRewardsInterface.encodeFunctionData('payAmount',["0x7d9d23bc6c9e3d3960a9c0588cede7a65c4acc0d"])
        
        const tx = {
            to: coreContractAddress,
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

        // Sending gasless transaction
        const txResponse = await smartAccount.sendTransaction({ transaction: tx });
        console.log('userOp hash', txResponse.hash);
        // If you do not subscribe to listener, one can also get the receipt like shown below 
        const txReciept = await txResponse.wait();
        console.log('Tx hash', txReciept.transactionHash);
        return txReciept.transactionHash;
    } catch (error) {
        throw error
    }
}

async function viewAdPlatform() {
 
    try {
            let provider = new HDWalletProvider(config.privateKey, config.rpcUrl);
            const walletProvider = new ethers.providers.Web3Provider(provider);
                // create SmartAccount instance
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

        const smartAccount = await wallet.init();
        console.log(smartAccount.address,'------')

        const recipientAddress = smartAccount.address

        const platformAdContractAddress = '0x6cE0A07B71eEb7363A76F32d16AD68C404b1565B'
        const adRewardsInterface = new ethers.utils.Interface(['function viewAd(address publisher) public payable'])

        const adRewardData = adRewardsInterface.encodeFunctionData('viewAd',["0x7d9d23bc6c9e3d3960a9c0588cede7a65c4acc0d"] )
        
        const tx = {
            to: platformAdContractAddress,
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

        // Sending gasless transaction
        const txResponse = await smartAccount.sendTransaction({ transaction: tx });
        console.log('userOp hash', txResponse.hash);
        // If you do not subscribe to listener, one can also get the receipt like shown below 
        const txReciept = await txResponse.wait();
        console.log('Tx hash', txReciept.transactionHash);
        return txReciept.transactionHash;
    } catch (error) {
        throw error
    }

}

module.exports = { viewAd, skipAd, viewAdPlatform }