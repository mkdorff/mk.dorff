import HippoScreens from './Hippo.png'
import HippoAnimation from './Hippo.gif'

export default {
  shortName: 'Hippo',
  longName: 'Hippo Hippo',
  sourceCode: 'https://github.com/mkdorff/Hippo',
  description: [
    {
      type: 'bigHeader',
      content: 'Introduction'
    },
    'I’ll be 100% upfront, this app was not my idea. In fact, it’s been made into an app before by the fine folks over at Skrekkøgle. For whatever reason, it is no longer on the app store and I’ve always wanted their app so I decided to make it myself.',
    'Simply put, this app keeps track of what you do and when you do it. It’s very much a one function app that serves quite a lot of purposes. It’s designed to be quick so that keeping track of stuff when it happens isn’t a hassle. For example, here are a few things I keep track of:',
    {
      type: 'list',
      content: ['When I change my toothbrush', 'When I put in new contacts', 'When I get headaches', 'When I last got an oil change']
    },
    'I obviously couldn’t reuse the original creator’s designs, so I spent a lot of time on the design. The sad part is, I’m not a trained designer so you could fairly say I don’t know what I’m doing. If you like the designs, great! If you hate it, I won’t be offended.',
    {
      type: 'bigHeader',
      content: 'And Beyond'
    },
    'I added some more features, because who could ever be content with a simple app that just works? I added a Google DataStore to sync your data with. This also enabled me to have extra hardware that could update when the last time you did something was. Specifically, I got a handful of Amazon Dash buttons, hijacked them so they don’t actually buy anything from Amazon, and had a Raspberry Pi listening for button presses. A specific Dash would be paired with an item being tracked and would updated it then. This way, you don’t even need to open the app to keep track of things.',
    'I also added simple notifications if you wanted to be reminded every X (day|week|month|etc). For example, I have a reminder to call my parents every week, though I can’t say I actually do it 100% of the time.',
    {
      type: 'bigHeader',
      content: 'I Want This!'
    },
    'I also want you to have this. It’s not on the app store because I didn’t feel like paying Apple $100. That’ll change eventually, it’s just every time I think about it, I’d rather go spend that $100 on food or more food. Which I then do. But I also need to patch the code up; this was my first iOS/Swift project and I now know how terribly I made things, so I actually want to completely redo it. But if you want, all the source code is in my GitHub. Go for it!',
    'Also, go check out the original and everything else Skrekkøgle did:',
    {
      type: 'link',
      content: 'Skrekkøgle ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲',
      link: 'http://skrekkogle.com/'
    }
  ],
  images: [
    {
      src: HippoScreens,
      caption: 'Screens (left to right): 3 different actions being tracked- history included, begin tracking a new action, & an about page.'
    },
    {
      src: HippoAnimation,
      caption: 'Full usage animation.'
    }
  ]
}