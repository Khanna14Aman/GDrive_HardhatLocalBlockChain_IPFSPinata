require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    hardhat: {
      chainId: 1337,
    },
  },
  paths: {
    artifacts: "./client/src/artifacts",
  },
};

// To deploy on hardhat blockchain open two terminal
// In first terminal type "npx hardhat node";
// In second terminal type "npx hardhat run scripts/deploy.js --network localhost";
