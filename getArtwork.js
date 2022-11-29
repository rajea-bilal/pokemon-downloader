
import fs from "fs/promises"
import fetch from 'node-fetch'
import path from "path"


const fetchArtwork = async (name) => {
    const namePokemon = name
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`)
   
    const json = await response.json()
    // retreving the stats for the character
    const spritesObject = json.sprites
    console.log()
    for(const key in spritesObject) {
       if(key === 'other') {
        const officialArt = spritesObject.other['official-artwork']['front_default']
        const officialImage = await fetch(officialArt)
        const arrayBuffer = await officialImage.arrayBuffer()

        const buffer = Buffer.from(arrayBuffer)
        const createArtwork = await fs.appendFile(`./${namePokemon}/${key}.png`, buffer, "binary")
        console.log(`Saved: ${namePokemon}/${key}.png`)
       }
           
        
    }

}
 
export { fetchArtwork }