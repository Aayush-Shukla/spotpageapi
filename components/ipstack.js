import {
  resolve
} from 'path';
require('dotenv').config()
const request = require('request');
const http = require('http');
export default async function ipstack(ipaddr, data) {
  var BASEURL = "http://api.ipstack.com/"
  var reqURL = BASEURL + `/${ipaddr}?access_key=${process.env.IPSTACKKEY}&output=json`
  var dict;
  var options = {
    'method': 'GET',
    'url': reqURL,
    'headers': {}
  };
  return new Promise(function (resolve, reject) {
    var dict;
    request(options, function (error, res) {
      if (error) throw new Error(error);
      var body = JSON.parse(res.body)
      dict = {
        ip: body.ip,
        type: body.type,
        city: body.city,
        region_name: body.region_name,
        country_name: body.country_name,
        continent_name: body.continent_name,
        zip: body.zip,
        song_name: data.name,
        song_artist: data.artist,
        time_played: data.time,
        currently_playing: data.currentlyPlaying
      }
      resolve(dict)
    })
  })
}