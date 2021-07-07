var SpotifyWebApi = require('spotify-web-api-node');
var moment = require('moment')
export default async function getRecent(spotifyApi) {
  var recentlyPlaying;
  let response = await spotifyApi.getMyRecentlyPlayedTracks({
    limit: 1
  })
  if (response.statusCode == 200) {
    const {
      id = "id", name = "nn", album = "na", artists = "naa", time = "nnaa", uri = "nnaaa"
    } = response.body.items[0].track;
    const {
      played_at = "nnaa"
    } = response.body.items[0]
    recentlyPlaying = {
      id: id,
      name: name,
      albumArt: album.images[0].url,
      artist: artists[0].name,
      currentlyPlaying: false,
      time: moment(played_at).fromNow(),
      artistUri: artists[0].uri,
      uri: uri
    }
    return recentlyPlaying
  }
}