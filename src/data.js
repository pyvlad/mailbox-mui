const categories = [
  {
    id: "inbox",
    name: "Inbox"
  },
  {
    id: "sent",
    name: "Sent"
  },
  {
    id: "spam",
    name: "Spam"
  }
]

const messages = [
  {
    id: 1,
    from: {
      name: "React Programmer",
      address: "react.programmer@example.com"
    },
    to: {
      name: "World",
      address: "world@example.com"
    },
    categoryId: "sent",
    date: "2019-01-01T00:00:01Z",
    title: "Hello, React World!",
    body: "Hey! How are you doing? Yours truely."
  },
  {
    id: 2,
    from: {
      name: "Stan Smith",
      address: "stan.smith@example.com"
    },
    to: {
      name: "Slim Eminem",
      address: "slim.eminem@example.com"
    },
    categoryId: "inbox",
    date: "2019-01-01T00:00:02Z",
    title: "Hey, Slim!",
    body: `Dear Slim, I wrote you, but you still ain't callin'.
I left my cell, my pager, and my home phone at the bottom.
I sent two letters back in autumn; you must not-a got 'em.
There probably was a problem at the post office or somethin'.
Sometimes, I scribble addresses too sloppy when I jot 'em,
But anyways, F- it. What's been up, man? How's you're daughter?
My girlfriend's pregnant, too, I'm about to be a father.
If I have a daughter, guess what I'ma call her?
I'ma name her Bonnie.
I read about your Uncle Ronnie, too. I'm sorry.
I had a friend kill himself over some chick who didn't want him.
I know you probably hear this everyday, but I'm your biggest fan.
I even got the underground stuff you did with Scam.
I got a room full of your posters and your pictures, man.
I like the stuff you did with Ruckus, too. That guy was fat.
Anyways, I hope you get this, man. Hit me back, just to chat.
Truly yours, your biggest fan.
This is Stan.`
  },
  {
    id: 3,
    from: {
      name: "Stan Smith",
      address: "john.smith@example.com"
    },
    to: {
      name: "Slim Eminem",
      address: "slim.eminem@example.com"
    },
    categoryId: "inbox",
    date: "2019-03-01T00:00:01Z",
    title: "Hey Slim! Why no answer?",
    body: `Dear Slim, you still ain't called or wrote. I hope you get a chance.
I ain't mad. I just think it's SCREWED UP that you don't answer fans.
If you didn't wanna talk to me outside your concert you didn't have to, but you coulda signed an autograph for Matthew.
He's my little brother, man. He's only six years old.
We waited in the blistering cold for you.
4 hours and you just said "No".
That's pretty crummy, man. You're like his favorite idol.
He wants to be just like you, man. He likes you more than I do.
I ain't that mad, though. I just don't like being lied to.
Remember when we met back in Denver, you said if I write you
You'd write back. See, I'm just like you in a way.
I never knew my father, neither.
He used to always cheat on my mom and beat her.
I can relate to what you're saying in your songs,
So when I have a crummy day, I drift away and put 'em on
'Cause I don't really got nothin' else
So that stuff helps when I'm depressed.
I even got a tattoo of your name across the chest.
Sometimes I even cut myself to see how much it bleeds.
It's like adrenaline. The pain is such a sudden rush for me.
See, everything you say is real, and I respect it cause you tell it.
My girlfriend's jealous 'cause I talk about you 24/7,
But she don't know you like I know you, Slim. No one does.
She don't know what it was like for people like us growin' up.
You gotta call me, man. I'll be the biggest fan you'll ever lose.
Sincerely yours, Stan`
  },
  {
    id: 4,
    from: {
      name: "Stan Smith",
      address: "stan.smith@example.com"
    },
    to: {
      name: "Slim Eminem",
      address: "slim.eminem@example.com"
    },
    categoryId: "inbox",
    date: "2019-06-01T00:00:01Z",
    title: "Goodbye Mr I'm-Too-Good-To-Call-Or-Write-My-Fans!",
    body: `Dear Mr I'm-Too-Good-To-Call-Or-Write-My-Fans,
This'll be the last package I ever send your @$$.
It's been six months and still no word. I don't deserve it?
I know you got my last two letters.
I wrote the addresses on 'em perfect.
So this is my cassette I'm sending you. I hope you hear it.
I'm in the car right now. I'm doing 90 on the freeway.
Hey Slim, I drank a fifth of vodka. You dare me to drive?
You know that song by Phil Collins, "In the Air of the Night"
About that guy that coulda saved that other guy from drowning,
But didn't, then Phil saw it all, then later at a show he found 'em? That's kinda how this is. You coulda saved me from drowning.
Now it's too late, I'm on a thousand downers, now. I'm drowsy' and all I wanted was a lousy
Letter or a call.
I hope you know I ripped ALL you're pictures off the wall.
I love you, Slim. We coulda been together; think about it.
You've ruined it, now. I hope you can't sleep and you dream about it
And when you dream, I hope you can't sleep and you SCREAM about it.
I hope you're conscience EATS at you and you can't BREATHE without me!
See Slim,(backround screaming) Shut up, slut! I'm tryin' to talk!
Hey Slim, that's my girlfriend screamin' in the trunk,
But I didn't slit her throat. I just tied her up. 
See I ain't like you 'cause if she suffocates she'll suffer more, then she'll die too.
Well, gotta go. I'm almost at the bridge, now.
Oh shoot, I forgot. How'm I supposed to send this tape out?!
`
  },
  {
    id: 5,
    from: {
      name: "Slim Eminem",
      address: "slim.eminem@example.com"
    },
    to: {
      name: "Stan Smith",
      address: "stan.smith@example.com"
    },
    categoryId: "sent",
    date: "2019-06-02T00:00:01Z",
    title: "Hey, Stan!",
    body: `Dear Stan, I meant to write you sooner, but I just been busy
You said you're girlfriend's pregnant, now. How far along is she?
Look, I'm really flattered you'd call you're daughter that.
And here's an autograph for Matthew. I wrote it on the Starter cap.
I'm sorry I didn't see you at the show. I musta missed you.
Don't think I did that stuff intenionally just to diss you.
But what's this you said about you like to cut you're wrists, too?
I say that stuff just clownin', dogg. C'mon, how messed up is you?
You got some issues, Stan. I think you need some councelin'
To help your butt from bouncin' off the walls when you get down some.
And what's this about us meant to be together?
That type of junk will make me not want us to meet each other.
I really think you and your girlfriend need each other
Or maybe you just need to treat her better.
I hope you get to read this letter. I just hope it reaches you in time before you hurt yourself. I think you'll be doin' just fine
If you relax a little. I'm glad I inspire you, but Stan,
Why are you so mad? Try to understand that I do want you as a fan.
I just don't want you to do some crazy stuff.
I saw this one thing on the news a couple weeks ago that made me sick.
Some dude was drunk and drove his car over a bridge and had his girlfriend in the trunk, and she was pregnant with his kid.
And in the car they found a tape, but they didn't say who it was to.
Come to think about it. His name was... It was you.
DAMN!`
  },
]

export default { categories, messages }