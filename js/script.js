let jokes = [
`<b>Why did an old man fall in a well?</b>
Because he couldn’t see that well`,
`<b>Why did the actor fall through the floorboards?</b>
They were going through a stage`,
`<b>Why did a scarecrow win a Nobel prize?</b>
He was outstanding in his field`,
`<b>Why are peppers the best at archery?</b>
Because they habanero`,
`<b>What did the duck say after she bought chapstick?</b>
Put it on my bill`,
`<b>What do you call a fake noodle?</b>
An impasta`,
`<b>What did the three-legged dog say when he walked into a saloon?</b>
“I’m looking for the man who shot my paw!`,
`<b>How do you tell the difference between a bull and a cow?</b>
It is either one or the udder`,
`<b>What’s red and smells like blue paint?</b>
Red paint`,
`<b>What’s the difference between a hippo and a Zippo?</b>
One is very heavy, the other is a little lighter`,
`<b>What do you call an illegally parked frog?</b>
Toad`,
`<b>Why can’t you send a duck to space?</b>
Because the bill would be astronomical`,
`<b>What does Jeff Bezos do before he goes to sleep?</b>
He puts his PJ-Amazon`,
`<b>What happened when the world's tongue-twister champion got arrested?</b>
They gave him a tough sentence`,
`<b>What did the mama cow say to the calf?</b>
It’s pasture bedtime`,
`<b>How does a vampire start a letter?</b>
Tomb it may concern`,
`<b>What did one plate say to the other?</b>
Dinner is on me`,
`<b>Why do hummingbirds hum?</b> 
Because they don’t know the words`,
`<b>What do you call a boomerang that won’t come back?</b>
A stick.`,
`<b>What does a cloud wear under his raincoat?</b>
Thunderwear.`,
`<b>Two pickles fell out of a jar onto the floor. What did one say to the other?</b>
Dill with it.`,
`<b>What time is it when the clock strikes 13?</b>
Time to get a new clock.`
];

let joke_num = Math.floor(Math.random()*21);

document.getElementById('joke').innerHTML = jokes[joke_num];

