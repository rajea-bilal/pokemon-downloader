
import fs from "fs/promises"
import fetch from 'node-fetch'
import path from "path"


const fetchStats = async (name) => {
    const namePokemon = name
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`)
    
    const json = await response.json()
    // retreiving the stats for the character
    const statList = json.stats

    
    // creating the pokemon character folder
    const createFolder = await fs.mkdir(namePokemon, err => {
        if (err) throw err
            })

    for(const item of statList){
        const name = item.stat.name
        const value = item.base_stat
        const stats = name + " " + value + '\n'
        
        // creating the stats file inside the specific Pokemon character
        const statFile = await fs.appendFile(`./${namePokemon}/stats.txt`, stats)
    }
       
    
    console.log("Stats file successfully created")
    
    // creating a folder and a file for the character

   
}



export { fetchStats }
    
    


    