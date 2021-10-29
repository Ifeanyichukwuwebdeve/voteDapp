const Web3 = require('web3')
const url_infura = 'https://mainnet.infura.io/v3/795b76291b6c4b62af3aecc02b8c1e50'

const web3 = new Web3(url_infura)

// web3.eth.getBlockNumber().then(result => {
//   console.log(result)
// })

// web3.eth.getBlock(13510679).then(result => {
//   console.log(result)
// })

// web3.eth.getBlock('latest').then(result => {
//   console.log(result.number)
// })

// web3.eth.getBlock('pending').then(result => {
//   console.log(result.number)
// })

web3.eth.getTransactionFromBlock('latest', 2).then(result => {
  console.log(result)
})