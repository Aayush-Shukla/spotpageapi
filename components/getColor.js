const {
    getColorFromURL,
    getPaletteFromURL
} = require('color-thief-node');
export default async function getColor(imgURL) {
    var dominantColor = await getColorFromURL(imgURL);
    const paletteColor = await getPaletteFromURL(imgURL);
    //to get a new dominant color if first one is closer to white
    for (var i = 0; i < paletteColor.length; i++) {
        if (0.2126 * paletteColor[i][0] + 0.7152 * paletteColor[i][1] + 0.0722 * paletteColor[i][2] > 20 && 0.2126 * paletteColor[i][0] + 0.7152 * paletteColor[i][1] + 0.0722 * paletteColor[i][2] < 170) {

            dominantColor = paletteColor[i]
            break;
        }
    }
    return {dominantColor:dominantColor,paletteColor:paletteColor}

}