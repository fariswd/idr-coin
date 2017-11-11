#idrcoin
Pengambilan harga Coin Crypto currency menggunakan API yang disediakan Bitcoin.co.id

Install dependencies 
```
npm install
```

Use:
```js
const Coin = require('./coin');

Coin.getBtc(data=>{
  console.log(data);
})
```

Method yang disediakan:  

| Method                     | Get Price         |
| ---------------------------|-------------------|
| Coin.getBtc(callback)      | Bitcoin           |
| Coin.getBch(callback)      | Bitcoin Cash      |
| Coin.getEth(callback)      | Etherium          |
| Coin.getEtc(callback)      | Etherium Classic  |
| Coin.getLth(callback)      | Litecoin          |
| Coin.getWaves(callback)    | WAVES             |
| Coin.getXrp(callback)      | Ripple            |
| Coin.getZxc(callback)      | Zcoin             |

have fun :rocket: