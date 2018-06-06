import FullProcessor from './FullProcessor.png'
import Design from './Design.png'
import Schematic from './Schematic.PNG'
import Traces from './Traces.PNG'
import Build from './Build.png'

export default {
  shortName: 'Tetris',
  longName: 'Tetris',
  sourceCode: 'https://github.com/mkdorff/c-tetris',
  description: [
    {
      type: 'bigHeader',
      content: 'TLDR;'
    },
    'I made a handheld Tetris game completely from scratch. I wrote the code that runs directly on the microprocessor. I configured its pins so some are inputs for buttons and some are outputs to the screen, I manually wrote bits to the screen to draw the Tetris game, and I designed the PCB board in to connect all the pieces. It was a blast.',
    {
      type: 'bigHeader',
      content: 'Introduction'
    },
    'This was a final project for a class (CS260 - Input/Output Systems). We spent the entire class learning how processors really worked. For example, our first project due was a full circuit of a 4 bit processor with an instruction decoder & multiplexer for reading in machine code, 2 registers, a 5 function ALU, RAM, and ASCII display for output and a PROM for machine code input. I have included an image of the complete circuit. We continued on to build an assembler, solve problems in Assembly and gradually graduated to C, never straying too far from the hardware. The final project required the following:',
    {
      type: 'list',
      content: ['MSP430 TI Microprocessor', 'Adafruit touchscreen display', 'Custom design and printed PCB', 'Certain amount of I/O, including buttons and a joystick']
    },
    'I love Tetris. I am unequivocally the best at it and it’s always been my dream to recreate it. If you think you can beat me, feel free to challenge me, but you simply will not win. I just don’t do formal competitions because I am too humble.',
    {
      type: 'bigHeader',
      content: 'Features'
    },
    'This features a fully playable Tetris game with score keeping in a less traditional way. We have three buttons; two buttons are left and right keys to move the Tetris block left and right. The third is a rotate button that rotates the piece (if it is possible and there is room for it). The game generates a random piece at the top of the screen and the goal is to lay the pieces so an entire line is filled. When filled, the line disappears and you score a point. As you score points, the top right keep tracks of the score.',
    'The scoring system works as such. In the top left we have a block that shows the level color. Let’s say it’s technically level 1. As you clear your first two lines, the top right will start drawing a column of small blocks, until you have a column 10 points high. You then move on to level two, which is a different color. The top level block then changes color and the next column of points will be that color as well. This time, it takes 20 lines to clear or 2  columns of points until level 3, where the color changes again. It takes 10*(level number) to clear each level.',
    'Now, as you level up, the Tetris pieces start to fall at a faster rate. If it is too slow, you can just use the joystick (by dragging it down) and it drags the piece down much faster as well.',
    'The game doesn’t ever end unless you lose, which happens if there is no space for the newly created piece. The game freezes there and prompts for the user to touch the screen to start a new game. That is also how the game is started from boot.',
    {
      type: 'bigHeader',
      content: 'Hardware Design'
    },
    'As far as hardware goes, we have the MSP430 at the heart of it all. For starters, it runs all the logic that makes Tetris work. I actually programmed all that logic with a console input/output to get everything working. The heavy lifting works the same on the MSP430 but then I added extra hardware functionality.',
    'The three buttons are attached to arbitrary ports with the interrupts enabled so we can get the control of what we want to do with the active Tetris block. Only the joystick’s y axis is used and that is attached to Port 1 because we need the use of the onboard ADC and that is only hooked up with Port 1. The same applies with the X-, X+, Y-, Y+ pins coming from the touchscreen, so those use Port 1 as well. Lastly, the SCK, MOSI, RST, CS, DC for the screen are attached to arbitrary ports as long as we initialize their direction and usage properly.',
    'The logic of Tetris run regardless of input (though it would end pretty fast) and it draws to the screen only at certain intervals (like a side move or a block dropping). The buttons are hooked up with interrupts and sets a value so the next polling loop makes the corresponding change. The joystick is included in the polling loop.',
    {
      type: 'bigHeader',
      content: 'Software Design'
    },
    'The code starts with the premise that there is a multidimensional array that makes up the Tetris grid. It is 10 columns wide and 14 rows tall. If the space is empty, it is filled with a zero, otherwise it hold the number of the piece that landed there (1 - 7). I needed the following variables: if there was a piece alive or not (if not, create a new one and set position at top), x and y variables to keep track of the top left position of the alive piece.',
    'The next bit included all the collision checking to see if a piece could move left, right, rotate, or down based off what was already in the board. This just checked and set the variables for each to true or false.',
    'The main control was in my step function that checks the status of the piece, collisions and user input. If it can’t go down, it means it’s become a dead piece. The next cycle a new piece would be drawn. Otherwise we move it left, right, or rotate when the user input comes or down based off a timer.',
    'Every time the piece goes dead, we have to check every row to see if there is a full row. If there is, we increment the lines cleared variable, clear it by moving all the rows down and making a new row of 0’s at the top.',
    'Next was level and score logic. I explained above how it worked and there’s not much else to it.',
    'Then I had to check if the new piece was colliding with anything existing upon first draw. If so, that’s game over.',
    'Now that was the bulk of the game logic. I just needed to hook in drawing functions. The largely consisted of drawing the UI, the level color and score. Then every time we had a piece move (either left, right, rotate, or down) I would fill the current space with the background color (effectively erasing it), move the piece, and then draw the piece in it’s new location. The only thing left was to add the line clearing functionality, which I decided was best to execute the game logic and then redraw the entire grid at the end.',
    'There is obviously more to it, but that’s the watered down English pseudocode version of it. The code is thoroughly commented and in my GitHub for viewing pleasure.'
  ],
  images: [
    {
      src: FullProcessor,
      caption: 'The complete schematics for a 4 bit processor with 2 registers and RAM and a PROM.'
    },
    {
      src: Design,
      caption: 'The 9 column design Tetris game, with the rotations and colors of each piece.'
    },
    {
      src: Schematic,
      caption: 'The schematic for the custom PCB that connected the microprocessor, screen, I/O and power.'
    },
    {
      src: Traces,
      caption: 'The actual traces that were cut. The printer we used only allowed for two layers of traces.'
    },
    {
      src: Build,
      caption: 'The finished product in all its glory and terrible lighting.'
    }
  ]
}