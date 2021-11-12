require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.9',
  networks: {
    rinkeby: {
      url: ' ', //alchemy api key 
      accounts: [' '], // metamask rinkeby account private key
    },
  },
};
