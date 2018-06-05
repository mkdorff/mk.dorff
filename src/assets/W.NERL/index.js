import WNERL_DataSample from './DataSample.png'
import WNERL_MostOutgoing from './MostOutgoing.png'
import WNERL_MostIncoming from './MostIncoming.png'
import WNERL_Landing from './Landing.png'
import WNERL_ActiveNode from './ActiveNode.png'
import WNERL_InfoOverlay from './InfoOverlay.png'

export default {
  shortName: 'W.NERL',
  longName: 'Wikipedia\'s NERL',
  sourceCode: 'https://github.com/mkdorff/NERL_CS450',
  description: [
    {
      type: 'bigHeader',
      content: 'Introduction'
    },
    'I fondly call this project W.NERL, because it’s fun to say and because it stands for Wikipedia’s Never Ending Reading List. The idea is simple. A lot e-commerce sites, Amazon for example, have suggestions that litter the side of the site based off what you have viewed and purchased. They use their wealth of information to predict what you’ll like and buy, therefore giving them more money. It’s creepy. Why not use these superpowers for good? And thus my daring spirit was born.',
    'Never mind the fact that I didn’t know Python nor databases. What challenges could a dreamer, believer, and heroic knight possibly run into? I will tell you. The misunderstood giant, by the name of ‘Wikipedia,’ stood, at first, as the obstacle to overcome and then became the friend that took lots of efforts to handle. But no effort is ever wasted and this friendship produced the most amazing gems. Literal gems.',
    'Okay, enough of that. I apologize. For more imaginative adventures, contact me and we may let you join our DnD campaign.',
    'I wanted to create a suggestion engine that would take one Wikipedia article as the input and it would produce a number of well related and important articles that the user could read to continue their study. I already had the data - that was all of Wikipedia. I concluded that I could apply a DIY version of Google’s PageRank algorithm to every page and link that existed in Wikipedia to achieve my goals. Spoiler alert: it worked really well.',
    {
      type: 'quote',
      content: 'When first exploring a topic, people don’t know what they don’t know.'
    },
    {
      type: 'bigHeader',
      content: 'What’s this PageRank Algaerithum?'
    },
    'If you’ve seen season 5, episode 8 of Community, then you already know it. If not go watch it. I will also explain it.',
    'Let’s say there are 40 people on an island and we want to know who is the most influential. Some popular candidates would be Dan, Blaine, Lacey, and George, all of which have the highest number of friends (18, 13, 12, and 9 respectively). For some reason though, all 4 of these people really, really like Brady. Brady doesn’t have that many friends but he is really close with these four and they do hangout exclusively a lot. Now, when Brady has this new idea on how to climb trees, his friend group follows suit and they all start doing it. Only then do the friends of Dan, Blaine, etc. follow suit because the ‘popular’ kids are doing it. Thus we see that Brady is the most influential and the trendsetter. It’s not the number of his friends that’s important. It’s the fact that his friends have a lot of friends. (TLDR;) quality > quantity.',
    'Here’s a more technical version of the same thing: in a graph, we have lots of nodes and edges (or pages and links, but this is the only time I’m going to say those words). We first count how many incoming edge each node has and that becomes it’s temporary weight. We then go through the entire graph again but this time we multiply the incoming edge with the weight of the node it is coming from and then sum up all the incoming edges. We do that with each node and that becomes the node’s new weight/importance/centrality.',
    'The idea is simple. The more things point to you, the more important your opinion must be. So when you point to something, that point carries more weight then the previous thing pointing to you.',
    'Did I explain that too many times? Good. Feel smart, that’s how Google worked at first and to some degree still does. ',
    'The final part to this was simple. When I wanted suggestions for a given node, I would look at the other nodes it points to and sort them by their weight. Return the top 5. I’m not kidding, this worked really well.',
    {
      type: 'bigHeader',
      content: 'The Nitty Gritty'
    },
    'Wikipedia’s english database is constantly changing, but it hovers around 60GBs uncompressed. It typically comes as an XML file and to this day, I’m at a loss of how I’m actually supposed to use those. I just wrote a program that would stream the file one line at a time, all the while looking for ‘<page>’ and ‘</page>’ to delineate one wikipedia page. Within those pages, links where wrapped in double square brackets ‘[[link]]’ and those were what I really needed to harvest. Since all sorts of wonky stuff was considered a ‘link,’ I had to write some intense regex to get what I really wanted and threw the rest away. Ain’t nobody got space for Wikipedia on their computer. I would then put my findings in a MySQL database in the worst possible structure because who knows anything about databases? (I do now actually. Goodness, it was awful.) I would like to remind those keeping track at home that this was ~60GBs of data. It took countless iterations to get things parsed and cleaned right and every time I thought I had it down, I would run it for 4 hours, come back and realize that what I had was only around 60% right. “Repeat until rage quit.” Just kidding, I’m pretty confident in what I considered a full scrape.',
    'This was where I applied the above island algorithm. Each node initially got a weight equal to however many nodes were pointing to it. The second pass made each node’s weight then equal the sum of the values of the nodes from each incoming edge. Great, we’re done.',
    'Hahaha, just kidding. Turns out, ‘United States’ has the most incoming edges by a ludicrous amount; it had 383,510 incoming edges. The next highest was barely half that at 194,868 (Animal). In fact, the top 438 (of 5,301,396) nodes held 10% of all incoming edges. Consequently, on virtually any search I did, some random nodes that was pointed to by the ‘United States’ node would end up being the winning suggestions and this was not helpful.',
    'So what did I do? I broke statistical law. Believe me, I tried z-score normalization and that left ‘United States’ with a score of almost 1600! That doesn’t fix anything! I tried some other methods to normalize to no avail. So finally, I just 8th rooted all the weight.s I know, it’s bad. In my defense though, it kept the minimum of 1 at 1 but brought the max down to around 5. Now, an ‘important’ edge could be outclassed by lots of less important edges. Democracy!',
    'Actually, as I’m writing this, I’m thinking it would have been interesting to have stayed true to the algorithm but run the graph through multiple passes, so that the weights would keep changing. But that also would’ve taken days to compute so I don’t regret not going it. It’s on the bucket list.',
    'So, starting back at the initial weight and my subpar normalizing technique, I reapplied the algorithm and this time, I was happy with the results. I didn’t keep getting ‘Germany’ as the suggestion to everything, so that alone was an improvement. Not that there’s anything wrong with ‘Germany’ but obviously ‘Germany’ isn’t the answer to absolutely everything.',
    {
      type: 'smallHeader',
      content: 'Here are two random examples:'
    },
    {
      type: 'list',
      content: ['[Operation Tidal Wave] => [Alfred Gerstenberg, Addison Baker, Lloyd Herbert Hughes, Oil campaign of World War II, Sand table]', '[Pharyngeal arch] => [Carnegie stages, Common carotid, Sinus cervicalis, Cuneiform cartilages, Lesser cornu]']
    },
    'Do you know anything about those things? I definitely don’t, yet I feel like I’d have some more direction if I wanted to learn more about what I didn’t know. My all time favorite example was the following. My friend’s wife was just about to graduate with a degree in ‘Public Health’ so I plugged that into my little engine.',
    {
      type: 'list',
      content: ['[Public health] => [Health community design, Public Health Acts, Health blog, Environmental radiation, Insurance medicine]']
    },
    'Her immediate reaction was priceless. She seemed surprised that a computer could produce these suggestions and explained that (with the exception of ‘Health blog’) all the suggestions were heavy topics they’ve been discussing in her classes. I too was pleasantly surprised.',
    'Since I had a wealth of information, I figured I would try to see what other interesting things I could find out. For example, I tried a ‘suggestion engine’ that, when given a node, would not only look at the connected nodes but also go another layer further. I then had it return the least important nodes. This led to things like the page ‘Apollo 11’ being linked to ‘Crop & Pasture Science.’ This brought up some introspective thoughts of how interconnected the world really is. Aren’t we all interconnected? If we averaged out how many hops it takes to get from any node to any other node, how distant would it really be? Is ‘Germany’ actually the answer to everything?',
    {
      type: 'bigHeader',
      content: 'Fun Facts'
    },
    {
      type: 'list',
      content: ['Total nodes: 5,301,396', 'Total edges: 121,063,938', 'Average in/out edges per node: 22.8362', 'There were 537,035 nodes with 0 incoming edges', 'There were 2,654,888 nodes with 4 or less incoming edges', 'The top 10 nodes for incoming edges held 1.36% of all edges']
    }
  ],
  images: [
    {
      src: WNERL_DataSample,
      caption: 'Here is a sample snippet of the data. We have the nodes (pages), edges (links), and a centrality score. All the data is currently in a Google Cloud Datastore.',
      width: 2804,
      height: 1376
    },
    {
      src: WNERL_MostOutgoing,
      caption: 'These are the nodes that have the most outgoing edges.',
      width: 1136,
      height: 702
    },
    {
      src: WNERL_Landing,
      caption: 'Prototype landing page for a website to explore all the data.',
      width: 1920,
      height: 1080
    },
    {
      src: WNERL_ActiveNode,
      caption: 'Prototype for an actual node/edge explorer view.',
      width: 1920,
      height: 1080
    },
    {
      src: WNERL_InfoOverlay,
      caption: 'Prototype overlay that would have a bunch of interesting stats',
      width: 1920,
      height: 1140
    },
    {
      src: WNERL_MostIncoming,
      caption: 'These are the node with the most incoming edges. This stat greatly influences the centrality.',
      width: 560,
      height: 958
    }
  ]
}