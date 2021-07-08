var SpotifyWebApi = require('spotify-web-api-node'); 
require('dotenv').config()
var moment = require('moment')
import getRecent from '../../components/getRecent';
// import getColor from '../../components/getColor'; //is creating problem in verscel, so removing it
import getCurrent from '../../components/getCurrent';
import getToken from '../../components/getToken';
import getVisitorInfo from '../../components/getVisitorInfo';
import refreshToken from '../../components/refreshToken';
export default async function handler(req, res) {
    var data;
    var credentials = {
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        redirectUri: process.env.REDIRECT_URI
    };
    var spotifyApi = new SpotifyWebApi(credentials);
    var creds = await getToken()
    await spotifyApi.setRefreshToken(creds.refreshKey)
    if (Date.now() > creds.validTill) {
        var newtoken = await refreshToken(spotifyApi)
        await spotifyApi.setAccessToken(newtoken)
    } else {
        await spotifyApi.setAccessToken(creds.token)
    }
    data = await getCurrent(spotifyApi)
    if (!data) {
        data = await getRecent(spotifyApi)
    }
    // var colors= await getColor(data.albumArt)
    // res.status(200).json({...data,...colors})
    getVisitorInfo(req,data)
    res.status(200).json(data)

}