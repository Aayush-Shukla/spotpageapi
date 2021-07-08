require('dotenv').config()
const request = require('request');
export default async function ipstack(ipaddr) {

var BASEURL="http://api.ipstack.com/"
var reqURL=BASEURL+`/${ipaddr}?access_key=${process.env.IPSTACKKEY}`

var dict;
var options = {
    'method': 'GET',
    'url': reqURL,
    'headers': {
    }
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
       return response.body;
  });


    }