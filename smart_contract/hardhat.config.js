//

require('@nomiclabs/hardhat-waffle')



module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/EshPsZHo3dgjy2_Nd1lhbXjwwmRN3SKZ",
      accounts:['51c2eb1691aee74ca762fabc153a7d8c04dc76104ee9f914add2f4a348363f24']
    }
  }
}