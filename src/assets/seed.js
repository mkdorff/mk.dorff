import WNERL from './W.NERL'
import Tetris from './Tetris'
import Submarine from './Submarine'
import Yuki from './Yuki'
import Sahara from './Sahara'
import FS from './FS'
import Mapover from './Mapover'
import Hippo from './Hippo'
import ML from './ML'
import Windo from './Windo'
import Asteroids from './Asteroids'
import Physics from './Physics'

export default [
  {
    shortName: 'About',
    longName: 'About',
    description: '',
    images: [],
    hideFromMenu: true
  },
  WNERL,
  Tetris,
  Submarine,
  Yuki,
  Sahara,
  FS,
  Mapover,
  Hippo,
  ML,
  Windo,
  Asteroids,
  Physics,
  {
    shortName: 'RSA',
    longName: 'RSA in JS & E-LISP',
    sourceCode: 'https://github.com/mkdorff/RSA.js',
    description: 'ALSO: Look here: https://github.com/mkdorff/CS237/blob/master/wellness.org'
  },
  {
    shortName: 'Sudoku',
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