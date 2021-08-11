export default function notifyTelegram(infoDict, songData) {
  var request = require('request');
  var text = `*New request made at* _${infoDict.time}_\n\n` +
    `*IP:* \`${infoDict.ip}\`\n` +
    `*Type:* \`${infoDict.type}\`\n` +
    `*Device:* \`${infoDict.device}\`\n` +
    `*City:* \`${infoDict.city}\`\n` +
    `*Region:* \`${infoDict.region_name}\`\n` +
    `*Country:* \`${infoDict.country_name}\`\n` +
    `*Continent:* \`${infoDict.continent_name}\`\n` +
    `*Zip:* \`${infoDict.zip}\`\n` +
    `*Referer:* \`${infoDict.referer}\`\n` +
    `*Song Name:* \`${songData.name}\`\n` +
    `*Song Artist:* \`${songData.artist}\`\n` +
    `*Time:* \`${songData.time}\`\n` +
    `*Currently Playing:* \`${songData.currentlyPlaying}\``
  var BASEURL = 'https://api.telegram.org/bot'
  var reqURL = BASEURL + `${process.env.TELEGRAMBOTTOKEN}/sendPhoto?chat_id=${process.env.TELEGRAMCHATID}&photo=${songData.albumArt}&disable_web_page_preview=True&parse_mode=markdown&caption=`
  var options = {
    'method': 'POST',
    'url': reqURL + text,
    'headers': {}
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
  });
}