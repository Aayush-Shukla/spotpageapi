var SpotifyWebApi = require('spotify-web-api-node');
var moment = require('moment')
require('dotenv').config()
const {
    MongoClient
} = require('mongodb');
const uri = process.env.DATABASE_URL
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
export default async function refreshToken(spotifyApi) {
     var response = await spotifyApi.refreshAccessToken()
    await client.connect()
    const collection = client.db("spotpage").collection("token");
    var data = await collection.updateOne({
        refreshKey: spotifyApi._credentials.refreshToken
    }, {
        $set: {
            token: response.body.access_token,
            validTill: Date.now() + response.body.expires_in * 1000
        }
    })
    client.close(); //remove this if ,ongoerror
    return response.body.access_token
}