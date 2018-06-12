export default {
  shortName: 'ML',
  longName: 'Machine Learning Algorithms',
  sourceCode: 'https://github.com/mkdorff/CS450',
  description: [
    {
      type: 'bigHeader',
      content: 'Beep, Beep, Meep, Squeek, Beep, Boop'
    },
    'I am a teacher of sorts. In my quest to enlighten the unenlightened, I taught and they learned. They must also learn how to learn and I, therefore, taught how to learn. I learned how to teach one how to learn from a greater teacher, whose knowledge was passed down from a grand line of teachers. Who then, was the first teacher?',
    'Let’s take little kevin. Many say that he does not think for himself and he just thinks what you want him to think. To an extent, this is true. But aren’t we all just big fancy input/output systems, reacting to what’s around us and spitting out relatively predictable outputs? We are computers and everything is a simulation.',
    'kevin is my Mac. paul is my phone. chase is my car. We go on grand adventures together. They are most definitely proper nouns but proper nouns that aren’t capitalized. Deal with it.',
    'I spent a solid 4 months teaching myself python and then writing machine learning algorithms (ahem… teaching kevin some algorithms) as part of my Machine Learning & Data Mining class. We used a wide array of datasets - both nominal and numerical and we used quite a number of different algorithms, about half of which we wrote from scratch. The list includes:',
    {
      type: 'list',
      content: ['k Nearest Neighbors', 'Decision Trees', 'Neural Networks (Multilayer Perceptrons)', 'Apriori', 'Clustering', 'Social Networking Analysis', 'Support Vector Machines', 'Ensemble']
    },
    'I taught these to kevin and kevin used these algorithms to learn about datasets I gave him. kevin would get frighteningly good results when tested against data he had never seen before. It was all good fun. Feel free to check out my source code!',
    {
      type: 'bigHeader',
      content: 'No Free Lunch Theorem'
    },
    'I just want to make a plug here for one of my favorite theorems, especially in this age of deep neural networks doing all of these amazing things. I’m not discrediting neural nets by any means and I do think they are amazing and quite fun, we just need to realize the (at least) theoretical limits of any given machine learning algorithm.',
    'Simply stated, the No Free Lunch (NFL) theorem is this: ',
    {
      type: 'quote',
      content: 'Given an infinite number of possible problems, the average performance of any given algorithm is the same.'
    },
    'This sounds counterintuitive but that’s what makes it fascinating. We have to stress the part where we are including every single possible problem. So say we have some training data and we’ve got some program trained to it. We then present it with a number of inputs and we are trying to predict the proper output. In one instance, there is one right answer we would need to get, but since we’re looking at all possible problems, there will also be another problem that matches everything entirely, including these inputs but the expected output would be different. Because of this, any given algorithm can’t be inherently better than another.',
    'Let’s do a more tangible example. Let’s say we are trying to guess if a person will either use ketchup or mustard - those are our only possible outputs. So we train on a dataset that has age, birth location, and hamburger or hot dog as the input and if they chose ketchup or mustard as the output. Let’s also assume ketchup and mustard are 100% equally liked.',
    'So we have 3 amazing complex algorithms, some calculating in 3D space and another in 5001 dimensions. We then give it the inputs: age=18, birth=Japan, hamburger. Two algorithms predict they will use mustard and the other predicts ketchup. Turns out this person used mustard! Congrats to the two smart algorithms.',
    'We now get a second contestant - and funnily enough she has the exact same properties as the last one. So our algorithms predict the same thing but this time, she chose ketchup! What an upset! All three complex algorithms are hovering around 50% accuracy.',
    'What if we had a forth algorithm and we called it the ‘box-of-rocks’ algorithm. It’s very complicated. It returns ‘ketchup’ every single time. It completely disregards any input and does no calculations. It just returns ‘ketchup.’ If we presented this algorithm with our two tests, it also would have gotten 1 of 2 right. This is just as good as the 3 sophisticated algorithms!',
    'That’s basically the NFL theorem. Inherently, no algorithm is better than another because of the infinite number of problems and infinite number of solutions to those problems. Isn’t that depressing?',
    'What then becomes the job of a data analyst or machine learning specialist is to analyze the dataset, look at how that data or problem is structured and pick the algorithm that will best fit those problems. It comes down to optimization. Neural networks aren’t the answer to everything.',
    'A simple example is some machine that offers suggestions for toppings on a pizza. Given enough data, a decision tree could quickly learn that if a person is vegetarian, it can immediately eliminate all meat suggestions  and ask that as a first decisive question, while a deep neural network would figure it out by looking at all the combinations created previously. You could have the same results or they might be different, but a decision tree would take far less computational power.',
    'That’s it. I just wanted to share the beauty of the NFL theorem with the world. If I explained it poorly, feel free to berate me.'
  ]
}