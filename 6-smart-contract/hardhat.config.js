require("@nomicfoundation/hardhat-toolbox");
const dotenv = require('dotenv')

dotenv.config()
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
    networks: {
    hardhat: {
    },
    sepolia: {
      url: "https://sepolia.infura.io/v3/<key>",
      accounts: [process.env.PV_KEY]
    },
    mumbai:{
      url: "https://polygon-mumbai.infura.io/v3/316ffc413ac54629846a9021774c3183",
      accounts: [process.env.PV_KEY, process.env.ADV_PV_KEY]
    }

  },
};
