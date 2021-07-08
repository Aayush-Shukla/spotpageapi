import ipstack from "./ipstack"
import notifyTelegram from "./notifyTelegram"
var moment = require('moment-timezone')
const {
    MongoClient
} = require('mongodb');
const uri = process.env.DATABASE_URL
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
export default async function getVisitorInfo(req,data) {
var visitorInfo={
    ip:(req.headers['x-forwarded-for'] || '').split(',')[0]|| req.connection.remoteAddress,
    device:req.headers['user-agent'],
    referer:req.headers.referer||'NONE',
    time:moment().tz('Asia/Kolkata').format('hh:mmA DD-MM-YYYY')
}
var connInfo=await ipstack(visitorInfo.ip)
var info = {...visitorInfo, ...connInfo}
notifyTelegram(info,data)  // send notification to telegram
await client.connect()
const collection = client.db("spotpage").collection("visitor");
collection.insertOne(info, function(err, res) {  //inserting into mongodb for record
    if (err) throw err;  
    client.close();  })
}