import fetch from "node-fetch"
import fs from "fs/promises"
import path from "path"
import inquirer from "inquirer"
import { fetchStats } from "./getStats.js"
import { fetchSprites } from "./getSprites.js"
import { fetchArtwork } from "./getArtwork.js"

console.log('======= Hi, welcome to the Pokemon downloader =======');

    
        
const questions = [
  {
    type: 'input',
    name: 'pokemonName',
    message: 'Which Pokemon character would you like to know?',
  },
  {
    type: 'checkbox',
    message: 'Pokemon info to download',
    name: 'infoWanted',
    choices: [
      new inquirer.Separator(' -- Options --'),
      {
        name: 'Stats',
      },
      {
        name: 'Sprites',
      },
      {
        name: 'Artwork',
      },
   ],
  },
]

 const searchAgain = [
  {
    type: 'list',
    name: 'repeatSearch',
    message: 'Would you like to search another Pokemon character',
    choices: [
      {
        name: 'Yes'
      },
      {
        name: 'No'
      },
    ]
  },
 ]


//  function that will repeat questions if the user wants to search for another pokemon

// functionFirst
const getAnswers = async () => {
  const response = await inquirer.prompt(questions)

        if(response.infoWanted[0] === 'Stats' && response.infoWanted[0, 1] === 'Sprites' && response.infoWanted[0, 2] === 'Artwork'){
          return (fetchStats(response.pokemonName),
          fetchSprites(response.pokemonName),
          fetchArtwork(response.pokemonName))
          
        } else if(response.infoWanted[0] === 'Stats'){
          fetchStats(response.pokemonName)
        } else if(response.infoWanted[0] === 'Sprites'){
          return (fetchStats(response.pokemonName),
          fetchSprites(response.pokemonName))
        } else if(response.infoWanted[0] === 'Artwork') {
          return (fetchStats(response.pokemonName),
           fetchArtwork(response.pokemonName)) 
        }
          
  
  }

// functionSecond
const repeat = async () => {
  const reply = await inquirer.prompt(searchAgain)
  if(reply.repeatSearch === 'Yes'){
    return getAnswers()
  }
}
     
// function to get everything running
const controller = async () => {
  const functionFirst = await getAnswers()
  const functionSecond = await repeat()
  return (functionFirst, functionSecond)

}




export { controller, getAnswers, repeat }


 




      
      






// function getAnswers() {
//    return inquirer.prompt(questions).then((answers) => {
//      // if the user wants to search again
     
//      if(answers.repeatSearch === 'Yes' || answers.repeatSearch === 'yes'){
//        return getAnswers()
//      } else {
//        // console.log(answers.pokemonName)
//        console.log(answers.pokemonName)
//        return fetchStats(answers.pokemonName)
//      }
//    })
// }




 
//  inquirer.prompt(questions).then((answers) => {
//    if(answers.repeat_search === 'Yes'){
//      return inquirier.prompt(questions)
//    } else {

//      console.log(JSON.stringify(answers, null, '  '));
//    }
//   // console.log('\nOrder receipt:');
// });