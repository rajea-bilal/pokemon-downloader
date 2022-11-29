
import fs from "fs/promises"
import fetch from 'node-fetch'
import path from "path"




const fetchSprites = async (name) => {
    const namePokemon = name
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`)
   
    const json = await response.json()
    // retreving the stats for the character
    const spritesObject = json.sprites
     
    for(const key in spritesObject) {
        if(key != 'versions' && key != 'other' && spritesObject[key] != null){
            // console.log(spritesObject[key])
            const image = await fetch(spritesObject[key])
            const arrayBuffer = await image.arrayBuffer()

            const buffer = Buffer.from(arrayBuffer)
            const fileOne = await fs.appendFile(`./${namePokemon}/${key}.png`, buffer, "binary")
            console.log(`Saved: ${namePokemon}/${key}.png`)
        }
    }

}
 
// fetchSprites()
export { fetchSprites }


   


    




  
    