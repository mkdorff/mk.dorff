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
import RSA from './RSA'
import Sudoku from './Sudoku'

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
  RSA,
  Sudoku,
  {
    shortName: 'Manga!',
    longName: 'Manga Web Scraper',
    sourceCode: 'https://github.com/mkdorff/kissmanga-scraper',
    description: 'And here is where we go ham with the text. Ham ham ham'
  }
  // TO ADD WHEN FINISHED:
  // OPOF
  // FACE MORPH
  // PARALLAX
]