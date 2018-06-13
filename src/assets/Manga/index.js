export default {
  shortName: 'Manga!',
  longName: 'Manga Web Scraper',
  sourceCode: 'https://github.com/mkdorff/kissmanga-scraper',
  description: [
    {
      type: 'bigHeader',
      content: 'Computers vs. Humans'
    },
    'I decided I wanted all a copy of all the One Piece Manga on my computer. Kissmanga seemed to have the biggest/most cohesive collection so I was just going to write a script to scrape it from them. (By the way, the One Piece Digital Coloured work is fantastic.)',
    {
      type: 'bigHeader',
      content: 'How It Works'
    },
    'I’m not sure what all Kissmanga has running on their site to verify it’s a human on a browser, but I can’t just use postman, wget, etc. to hit their site. I needed to use  puppeteer, a headless Chrome, that I could control with nodeJS.',
    'So I manually go to the manga’s page (One Piece, for example) and I check the page source and I copy the html for the table that has all the links to all the chapters. Throw that into vscode, use some regex to just get the last part of the chapter links. That goes into chapterSeed.js (in chunks of 10-12). Copy the base URL into getting.js.',
    'So puppeteer is spinning up a new tab for each link. Since Chrome’s kind of a memory hog, that’s why I have sections of chapters. Once that section is done, we free up the memory, close the chromium instance and move onto the next section. I needed to do this because just closing tabs themselves was not freeing up any memory and I couldn’t figure out why. The sections themselves are all asynchronous. The page loads, we give it a 10 second delay because kissmanga throws a 5 second anti-DDOS check. Then we grab the imageList that kissmanga saves as a global variable and is an array with all the links to the images of that chapter. So I use axios to download them and fs to save them. Simple enough.',
    'And that’s about it. Kissmanga does have a CAPTCHA thing that fires if you hit their servers to much- so I just had to VPN after my downloads weren’t working after a while. This will tell you if a chapter fails or if certain images on a chapter fails.',
    'Theoretically, this works with any Manga on Kissmanga so feel free to use it. It was kind of a weekend project though so if it breaks or kissmanga changes anything, sorry.',
    'Also if you do, make sure to:',
    {
      type: 'list',
      content: ['set chapterSeed.js appropriately', 'set baseURL in getting.js', 'set cre in getting.js (this is just some regex to grab the chapter number from the chapterURL to clean up the logs and the save directory) and stands for ‘chapter regex.’']
    }
  ]
}