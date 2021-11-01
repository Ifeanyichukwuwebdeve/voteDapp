const Web3 = require('web3')
let ws = 'wss://mainnet.infura.io/ws/v3/795b76291b6c4b62af3aecc02b8c1e50'
 const web3 = new Web3(ws)

//  web3.eth.subscribe('pendingTransactions', (error, txhash) => {
//    if (!error) {
//      console.log(txhash)
//    } else {
//      console.log(error)
//    }
//  })

 web3.eth.subscribe('pendingTransactions', (error, txhash) => {
   if (!error) {
     web3.eth.getTransaction(txhash, (error, tx) => {
       if (tx) {
         console.log(tx)
       }
     })
   } else {
     console.log(error)
   }
 })