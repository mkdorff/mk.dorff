import WNERL_DataSample from './W.NERL/DataSample.png'
import WNERL_MostOutgoing from './W.NERL/MostOutgoing.png'
import WNERL_MostIncoming from './W.NERL/MostIncoming.png'
import WNERL_Landing from './W.NERL/Landing.png'
import WNERL_ActiveNode from './W.NERL/ActiveNode.png'
import WNERL_InfoOverlay from './W.NERL/InfoOverlay.png'

// NOTE: so maybe just have images on the left, description on the right
// on mobile: images first, then description. Simple
export default [
  {
    shortName: 'W.NERL',
    longName: 'Wikipedia\'s NERL',
    sourceCode: 'https://github.com/mkdorff/NERL_CS450',
    description: [
      'I fondly call this project NERL, because it\'s fun to say and because it stands for Wikipedia\'s Never Ending Reading List. The idea is simple. Any ecommerce site, Amazon for example, have suggestions that litter the side of the site, based off what you have viewed and purchased. It\'s creepy. So why not give that to Wikipedia?',
      'Seriously though, this project suggests other related Wikipedia articles you should read based of the current article you are on. I did this by analyzing all the links between pages in all of Wikipedia.',
      ''
    ],
    images: [
      {
        image: WNERL_DataSample,
        caption: 'Here is a sample snippet of the data. We have the nodes (pages), edges (links), and a centrality score. All the data is currently in a Google Cloud Datastore.',
        width: 2804,
        height: 1376
      },
      {
        image: WNERL_MostOutgoing,
        caption: 'These are the nodes that have the most outgoing edges.',
        width: 1136,
        height: 702
      },
      {
        image: WNERL_MostIncoming,
        caption: 'These are the node with the most incoming edges. This stat greatly influences the centrality.',
        width: 560,
        height: 958
      },
      {
        image: WNERL_Landing,
        caption: 'Prototype landing page for a website to explore all the data.',
        width: 1920,
        height: 1080
      },
      {
        image: WNERL_ActiveNode,
        caption: 'Prototype for an actual node/edge explorer view.',
        width: 1920,
        height: 1080
      },
      {
        image: WNERL_InfoOverlay,
        caption: 'Prototype overlay that would have a bunch of interesting stats',
        width: 1920,
        height: 1140
      }
    ]
  },
  {
    longName: 'Tetris',
    sourceCode: 'https://github.com/mkdorff/c-tetris',
    description: [
      'And here is where we go ham with the text. Ham ham ham'
    ],
    images: []
  },
  {
    shortName: 'Submarine',
    longName: 'E.T. Submarine',
    sourceCode: 'https://github.com/mkdorff/Ethernet-Tethered-Submarine',
    description: 'And here is where we go ham with the text. Ham ham ham',
    images: []
  },
  {
    shortName: 'Yuki',
    longName: 'Yuki Dorff Design',
    homepage: 'https://www.yukidorff.com/',
    description: 'And here is where we go ham with the text. Ham ham ham',
    images: []
  },
  {
    shortName: 'Sahara',
    longName: 'Sahara Dev',
    homepage: 'http://www.saharadev.com/',
    description: 'There was this place I worked for that went bankrupt',
    images: []
  },
  {
    shortName: 'FS',
    longName: 'FamilySearch',
    homepage: 'https://www.familysearch.org/',
    description: 'I work here right now',
    images: []
  },
  {
    longName: 'Mapover',
    homepage: 'https://www.npmjs.com/package/mapover',
    sourceCode: 'https://github.com/mkdorff/mapover-js',
    description: 'And here is where we go ham with the text. Ham ham ham'
  },
  {
    shortName: 'Hippo',
    longName: 'Hippo Hippo',
    sourceCode: 'https://github.com/mkdorff/Hippo',
    description: 'And here is where we go ham with the text. Ham ham ham',
    images: []
  },
  {
    shortName: 'ML',
    longName: 'Machine Learning Algorithms',
    sourceCode: 'https://github.com/mkdorff/CS450',
    description: 'And here is where we go ham with the text. Ham ham ham'
  },
  {
    shortName: 'Windo',
    longName: 'Windo App',
    sourceCode: 'https://github.com/mkdorff/windo',
    description: 'And here is where we go ham with the text. Ham ham ham',
    images: [],
  },
  {
    longName: 'Asteroids',
    sourceCode: 'https://github.com/mkdorff/Asteroids',
    description: 'And here is where we go ham with the text. Ham ham ham',
    images: []
  },
  {
    shortName: 'Physics',
    longName: 'Electricity & Magnetism Projects',
    sourceCode: 'https://github.com/mkdorff/PHY220',
    description: 'And here is where we go ham with the text. Ham ham ham'
  },
  {
    shortName: 'RSA',
    longName: 'RSA in JS & E-LISP',
    sourceCode: 'https://github.com/mkdorff/RSA.js',
    description: 'ALSO: Look here: https://github.com/mkdorff/CS237/blob/master/wellness.org'
  },
  {
    longName: 'Sudoku',
    sourceCode: 'https://github.com/mkdorff/Sudoku-Solver',
    description: 'And here is where we go ham with the text. Ham ham ham'
  },
  {
    shortName: 'Manga!',
    longName: 'Manga Web Scraper',
    sourceCode: 'https://github.com/mkdorff/kissmanga-scraper',
    description: 'And here is where we go ham with the text. Ham ham ham'
  },
  {
    longName: 'Spotify',
    homepage: 'https://open.spotify.com/user/mohonrid',
    description: 'And here is where we go ham with the text. Ham ham ham',
    images: []
  },
  {
    shortName: 'Stats',
    longName: 'Student Stats in Google Sheets',
    description: 'This one isn\'t exciting at all.'
  }
  // TO ADD WHEN FINISHED:
  // OPOF
  // FACE MORPH
  // PARALLAX
]

// Possible Fields
// {
//   shortName,
//   longName,
//   homepage,
//   sourceCode,
//   description: [],
//   invertBackground
//   images: [
//     {
//       image,
//       caption,
//       width,
//       height
//     }
//   ],
//   videos: []
// }