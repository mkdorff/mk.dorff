export default {
  shortName: 'RSA',
  longName: 'RSA in JS & E-LISP',
  sourceCode: 'https://github.com/mkdorff/RSA.js',
  description: [
    {
      type: 'bigHeader',
      content: '658bc706c2'
    },
    'I took a discrete mathematics class in college where the teacher insisted we did everything in Emacs Lisp. Needless to say, 80% of that class was spent learning/hating/deciphering Emacs Lisp. I have no fond feelings toward this language but I did some interesting things in it.',
    'For my final project, I implemented RSA. It was effectively complete and secure. We could have used it to send messages to each other, except… it would have to be limited to 3 character messages. I quickly hit the integer max for anything bigger and I could not, for the life of me, figure out how to include a big integer library. So I called it good and turned that in.',
    'About a year later, this was still bugging me. Yes, I had implemented RSA in all it’s glory but it wasn’t complete. I had some downtime, so I decided to implement it in JS as functionally as possible. This time, I got it working and my soul has finally been put to rest. You can check out the source code! Also, the source code/write-up for the E-Lisp version is included below.',
    {
      type: 'link',
      content: 'RSA in E-Lisp',
      link: 'https://github.com/mkdorff/CS237/blob/master/wellness.org'
    }
  ]
}