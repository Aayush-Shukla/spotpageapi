var SpotifyWebApi = require('spotify-web-api-node');
require('dotenv').config()
var moment = require('moment')
const {MongoClient} = require('mongodb');
const uri = process.env.DATABASE_URL;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
export default async function getToken() {
    await client.connect()
    const collection = client.db("spotpage").collection("token");
    var data = await collection.findOne({})
    return data;;
}