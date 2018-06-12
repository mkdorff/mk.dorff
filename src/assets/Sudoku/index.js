import GameStart from './GameStart.png'
import HelpEdit from './HelpEdit.png'
import Solve from './Solve.png'

export default {
  shortName: 'Sudoku',
  longName: 'Sudoku',
  sourceCode: 'https://github.com/mkdorff/Sudoku-Solver',
  description: [
    {
      type: 'bigHeader',
      content: 'Computers vs. Humans'
    },
    'This is a little command line program to play some Sudoku. It can give you helpful hints, such as what numbers are possible for a given square or warn you when you are trying to input and invalid number. You also have the option to have it solve it for you, but that sort of defeats the purpose of playing Sudoku. I wrote this in the infancy of my programming skills, before I had even heard of OOP, thus the single 476 lines program holding absolutely everything.',
    'The thing that still remains interesting and fun for me was that I used a 9 bit long integer to represent all possible values for a square - and I would remove possible numbers with a bit mask. It’s a super small way of holding a ton of boolean values. It almost makes me want to switch all my current programming back to C++.'
  ],
  images: [
    {
      src: GameStart,
      caption: 'Prompt when starting up sudoku and loading a board.'
    },
    {
      src: HelpEdit,
      caption: 'Usage of the help options and edit option, while trying to put in an invalid number.'
    },
    {
      src: Solve,
      caption: 'Quick result of the sudoku solver solving the probelm for us.'
    }
  ]
}