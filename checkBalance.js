const Web3 = require('web3')
// Ganache local blockchain
// const url_ganache = 'HTTP://127.0.0.1:7545'

// Infura
const url_infura = 'https://mainnet.infura.io/v3/795b76291b6c4b62af3aecc02b8c1e50'

const web3 = new Web3(url_infura)

const address = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'

web3.eth.getBalance(address, function (err, balance) {
  if (!err) {
    console.log(balance)
  } else {
    console.log(err)
  }
})
// console.log(web3)