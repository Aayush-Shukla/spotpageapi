var SpotifyWebApi =require('spotify-web-api-node');
var moment= require('moment')
export default async function getCurrent(spotifyApi) {
    var currentlyPlaying;
     let response=await spotifyApi.getMyCurrentPlaybackState( )
    if(response.statusCode==200 && response.body.currently_playing_type!='ad'){
    const { id = "id", name = "nn", album = "na", artists = "naa", uri="naaa" } = response.body.item;
    currentlyPlaying= {
        id: id,
        name: name,
        albumArt: album.images[0].url,
        artist: artists[0].name,
        currentlyPlaying: true,
        artistUri: artists[0].uri,
        uri:uri
    }
      return currentlyPlaying
      }
    else
    {
        return false;
    }
    }
