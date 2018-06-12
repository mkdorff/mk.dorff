import CreateEvent from './CreateEvent.jpg'
import AllScreens from './AllScreens.jpg'
import Messaging from './Messaging.jpg'
import EventInfo from './EventInfo.jpg'

export default {
  shortName: 'Windo',
  longName: 'Windo App',
  sourceCode: 'https://github.com/mkdorff/windo',
  description: [
    {
      type: 'bigHeader',
      content: 'The Nightmare'
    },
    'The following is a real transcript between a past group of mine:',
    '“When would be a good time to meet for 361? I’m free after 2 in Monday Wednesday Friday. And after 5ish Tuesday Thursday.”',
    '“MWF is best for me too, I’m free any time after noon”',
    '“There is one other person Mohonrye knows who wants to meet as well. Jared Wilson?”',
    '“Yeah, that’s his name.”',
    '“What if we met Wed/Fri at 2 PM?”',
    '“Works for me. Friday at 2.”',
    '-------------',
    '“Am I the only one who is like.. it’s Friday. I don’t want to meet at 2 let’s just do it Monday??”',
    '“I’m cool with that. This week is just intro anyways. Good idea Matt, bonus points for you 👌”',
    '-------------',
    '“Can you guys meet tomorrow?”',
    '“Like at 3”',
    '“I’ll be in AZ tomorrow for a job interview…I won’t be back till Friday evening. I could do Saturday or Monday”',
    '-------------',
    '“Meet today?”',
    '“I’m free anytime before 2:30, let’s do it”',
    '“I’m free after 1:30 until 5:15”',
    '“1:30 then? Mahonri, what say ye?”',
    '“I got class until 1:45 so I can just come after that”',
    '“Ok I can reschedule my stuff, let’s do 2:00 so we can all be there”',
    '-------------',
    '“Before we take it to the pool let’s test it in the Tupperware in the stc. I’ll be here all day except 12-12:30ish”',
    '“Ok, I can come help around 1 PM”',
    '“Ahh sorry fam I’m at work. I’m open after that one class mart and I have at 3:15”',
    {
      type: 'bigHeader',
      content: 'The Dream'
    },
    'I know the above transcript was nothing unique. Group projects everywhere follow this pattern where we spend a large portion of time just coordinating schedule or trying to figure out how everyone else’s schedules. It’s a waste of time, it’s awful, it’s the twenty-first century and we can do better. Okay we have Doodle, which is needlessly extra, and when2meet, which is ugly. So we decided to tackle a problem that was actually kind of solved but we hated all working implementations of it.',
    'Our idea was an app on all platforms that you can SSO using Facebook, Twitter, Google, etc. This would make it’s initial use extremely easy and user friendly. One person makes the event from possible days and sends it to everyone in the group. Everyone in the group just puts in their available times and when that is done, the app itself picks a time that works for everyone. No more voting, no discussion, and for crying out loud, no more asking about my Wednesday class-work schedule for the 5th time.',
    'We entered this into an app design competition at BYU back in 2016. We got 2nd place! In tandem with the design, we (some nerds: @joeynelson42, @jdeanwaite, and @mkdorff) were trying to make the app a reality. It wasn’t required for the competition so that probably burnt a lot of our motivation there. We never finished it mainly because we all graduated and the number of group projects we were all in suddenly dipped to around 0.',
    'If you like, you can check out the source code & the sketch file for the design. There is both the server code and iOS code if you so wished to continue the project. Both parts are probably around 40% done. It was a ton of fun and I wish I had this when I was in school.'
  ],
  images: [
    {
      src: CreateEvent,
      caption: 'New event creation view.'
    },
    {
      src: AllScreens,
      caption: 'Sample screenshots of most different views.'
    },
    {
      src: Messaging,
      caption: 'Messaging view inside of the event info.'
    },
    {
      src: EventInfo,
      caption: 'General event info view.'
    }
  ]
}