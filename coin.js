const request = require("request");

class Coin {
  constructor(){
    
  }
  
  static getBtc(cb){ 
    request({
      url: "https://vip.bitcoin.co.id/api/btc_idr/ticker",
      json: true
      },function (error, response, body) {
        if(!error && response.statusCode === 200) {
          cb(body)
        } else{
          cb(err)
        }
      });
  }
  
  
  static getBch(cb){ 
    request({
      url: "https://vip.bitcoin.co.id/api/bch_idr/ticker",
      json: true
      },function (error, response, body) {
        if(!error && response.statusCode === 200) {
          cb(body)
        } else{
          cb(err)
        }
      });
  }
  
  
  static getEth(cb){ 
    request({
      url: "https://vip.bitcoin.co.id/api/eth_idr/ticker",
      json: true
      },function (error, response, body) {
        if(!error && response.statusCode === 200) {
          cb(body)
        } else{
          cb(err)
        }
      });
  }
  
  
  static getEtc(cb){ 
    request({
      url: "https://vip.bitcoin.co.id/api/etc_idr/ticker",
      json: true
      },function (error, response, body) {
        if(!error && response.statusCode === 200) {
          cb(body)
        } else{
          cb(err)
        }
      });
  }
  
  static getLtc(cb){ 
    request({
      url: "https://vip.bitcoin.co.id/api/ltc_idr/ticker",
      json: true
      },function (error, response, body) {
        if(!error && response.statusCode === 200) {
          cb(body)
        } else{
          cb(err)
        }
      });
  }
  
  static getWaves(cb){ 
    request({
      url: "https://vip.bitcoin.co.id/api/waves_idr/ticker",
      json: true
      },function (error, response, body) {
        if(!error && response.statusCode === 200) {
          cb(body)
        } else{
          cb(err)
        }
      });
  }
  
  static getXrp(cb){ 
    request({
      url: "https://vip.bitcoin.co.id/api/xrp_idr/ticker",
      json: true
      },function (error, response, body) {
        if(!error && response.statusCode === 200) {
          cb(body)
        } else{
          cb(err)
        }
      });
  }
  
  static getZxc(cb){ 
    request({
      url: "https://vip.bitcoin.co.id/api/zxc_idr/ticker",
      json: true
      },function (error, response, body) {
        if(!error && response.statusCode === 200) {
          cb(body)
        } else{
          cb(err)
        }
      });
  }
}

module.exports = Coin;