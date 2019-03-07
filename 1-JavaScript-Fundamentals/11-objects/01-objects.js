/**************************
OBJECTS
***********************
An object is a data type that constists of key/value pairs. 

let name = {
    (1)    (2)
  key   :   'value';
  (3)  (4)    (5)
}
1- Name of the object, how its identified
2- All of the data for an object is contained in curly braces
3- this is the name of the specific data inside the object
4- The data name and value are separated by a colon
5- The value of the data. Each key/value pairing ends with a comma 
*/

var netflix = {
    id: 9,
    name: "Super Store",
      season1: {
        seasonInfo: {
          episodeInfo : [
            { episode: 1, episodeName: "Pilot"},
            { episode: 2, episodeName: "Magazine Profile"},
            { episode: 3, episodeName: "Shots and Salsa"},
            { episode: 4, episodeName: "Mannequin"},
            { episode: 5, episodeName: "Shoplifter"},
            { episode: 6, episodeName: "Secret Shopper"},
            { episode: 7, episodeName: "Color Wars"},
            { episode: 8, episodeName: "Wedding Day Sale"},
            { episode: 9, episodeName: "All-Nighter"},
            { episode: 10, episodeName: "Demotion"},
            { episode: 11, episodeName: "Labor"}
          ]
        }
      },
      season2: {},
      season3: {}
    };
console.log(netflix);  
/*Reads
{ id: 9,
  name: 'Super Store',
  season1: { seasonInfo: { episodeInfo: [Array] } },
  season2: {},
  season3: {} }*/

console.log(netflix.season1.seasonInfo.episodeInfo);
/* results in
 { episode: 1, episodeName: 'Pilot' },
  { episode: 2, episodeName: 'Magazine Profile' },
  { episode: 3, episodeName: 'Shots and Salsa' },
  { episode: 4, episodeName: 'Mannequin' },
  { episode: 5, episodeName: 'Shoplifter' },
  { episode: 6, episodeName: 'Secret Shopper' },
  { episode: 7, episodeName: 'Color Wars' },
  { episode: 8, episodeName: 'Wedding Day Sale' },
  { episode: 9, episodeName: 'All-Nighter' },
  { episode: 10, episodeName: 'Demotion' },
  { episode: 11, episodeName: 'Labor' } ]
*/
console.log(netflix.season1.seasonInfo.episodeInfo[7]);
// gives us episode 8 because index is 7
console.log(netflix.season1.seasonInfo.episodeInfo[7].episodeName);
//just gives us the episode name
/*********************************************************** 
 Challenge:
 Pick an episode to show.
 Using dot notation, walk through the netflix object and print off both the episode and the episode name
*/

var netflix = {
    id: 9,
    name: "Super Store",
      season1: {
        seasonInfo: {
          episodeInfo : [
            { episode: 1, episodeName: "Pilot"},
            { episode: 2, episodeName: "Magazine Profile"},
            { episode: 3, episodeName: "Shots and Salsa"},
            { episode: 4, episodeName: "Mannequin"},
            { episode: 5, episodeName: "Shoplifter"},
            { episode: 6, episodeName: "Secret Shopper"},
            { episode: 7, episodeName: "Color Wars"},
            { episode: 8, episodeName: "Wedding Day Sale"},
            { episode: 9, episodeName: "All-Nighter"},
            { episode: 10, episodeName: "Demotion"},
            { episode: 11, episodeName: "Labor"}
          ]
        }
      },
      season2: {},
      season3: {}
    };
console.log(netflix.season1.seasonInfo.episodeInfo[4].episodeName) //easier way to do this


    // jimmy's way to do it
function episodeNameFinder(episodeNum){
    console.log(netflix.season1.seasonInfo.episodeInfo[episodeNum].episodeName);
}
episodeNameFinder(1);


///////////////////////////////////////////////////////////////////

let spaceJam = {
    toonSquad: {
      human: 'Michael Jordan',
      rabbit1: 'Bugs Bunny',
      rabbit2: 'Lola Bunny',
      duck: 'Daffy Duck',
      tDevil: 'Tasmanian Devil',
      bird: 'Tweety',
      cat: 'Sylvester',
      pig: 'Porky Pig'
    },
    monstars: {
      0: 'Bupkus',
      1: 'Bang',
      2: 'Nawt',
      3: 'Pound',
      4: 'Blanko'
    },
    nbaPlayers: {
      phoenixSuns: 'Charles Barkley',
      newJerseyNets: 'Shawn Bradley',
      newYorkNicks: 'Patrick Ewing',
      charlotteHornets1: 'Larry Johnson',
      charlotteHornets2: 'Muggsy Bogues'
    }
  }
console.log(Object.keys(spaceJam.nbaPlayers))
/* runs as
[ 'phoenixSuns',
  'newJerseyNets',
  'newYorkNicks',
  'charlotteHornets1',
  'charlotteHornets2' ] */

  console.log(Object.keys(spaceJam.nbaPlayers)[0])
  //gives us just "pheonixSuns" 

 console.log(Object.keys(spaceJam.toonSquad))//gives us the team members of toon squad
 console.log(Object.keys(spaceJam.toonSquad).toString())// gave us one big string
 console.log(Object.values(spaceJam.toonSquad)); //gives us both 

 ////////////////////////////////////////////////////////////
 let garden = {
     vegetable: 'zuchini',
     flower: 'sun flower',
     fruit: 'grape',
     water: true,
     sun: true,
     size: 10
 };
 
 console.log(garden.vegetable); //gives us zucchini 

 let x = 'vegetable';

 console.log(garden.x, garden[x]);//searches through the object and finds what you assigned to x

 let baking = {};
 baking['zucchini'] = 'better make some bread!';

 console.log(baking); //we get { zucchini: 'better make some bread!' }

 console.log(baking.garden.vegetable);// THIS DOESN'T WORK! MIXING OBJECTS. GARDEN ISNT A KEY IN BAKING 

 console.log(baking[garden['vegetable']]); //results in 'better make some bread' 
 // square brackets if you need to substitute variables 


 let key = 'water';

 Object.keys(garden).forEach( g => {
     if (key === g) [
         console.log(garden[key]); //true
 }
 })