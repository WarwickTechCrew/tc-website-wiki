const getResultMessage = (greenFlags, redFlags, maxScore) => {
  // max green flags
  const pick = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];
  if (greenFlags === maxScore && redFlags === 0) {
    return pick([
      "Perfect! You're basically the ideal person :D",
      '100% squeaky clean and all green.',
      'you are green like the grinch. i feel like a who (from whoville)',
    ]);
  }
  if (greenFlags === maxScore && redFlags === 1) {
    return '💚 oh my- you have,, is that all? all the green flags??? you have all the green flags. but you manage to stay cool, and edgy, with your single red flag.';
  }
  if (greenFlags === maxScore && redFlags === maxScore) {
    return pick([
      `how did you get all the flags??? you didn't just spam the yes button did you ????`,
      'please stop spamming the yes button',
      'you have all the flags.. but you also have all the red flags... how- how did you do that?',
      'it is not possible for ONE person to have ALL the flags',
      'please donate some of your flags to charity',
    ]);
  }
  if (greenFlags === maxScore && redFlags > 0) {
    return pick([
      `Amazing green flags, you have them ALL, but hmmm ${redFlags} red flag${redFlags > 1 ? 's' : ''} to work on... can I tell you a secret? even the best people have flaws. It's what you do with them that counts.`,
      `Amazing green flags, you have them ALL, but hmmm ${redFlags} red flag${redFlags > 1 ? 's' : ''} to work on...`,
    ]);
  }
  // some green flags but not all
  if (redFlags === 0 && greenFlags > 0) {
    return pick([`✨ Clean slate with no red flags! ${'yip '.repeat(greenFlags).trim()}peeeee`, 'touch grass?']);
  }
  if (greenFlags >= maxScore * 0.8 && redFlags <= 1) {
    return pick([
      'Yippeee! Lots of green flags with minimal red ones! I think i can fix you',
      `this is a secret message for people with ${greenFlags} green flags and EXACTLY ${redFlags} red flag${redFlags > 1 ? 's' : ''}: makka pakka`,
    ]);
  }
  if (redFlags === 1 && greenFlags > 1) {
    return pick([
      `your one red flag is like the ugly duckling in a sea of pure swans. but dont worry, with time, the ugly duckling grows into something beautiful.`,
    ]);
  }
  if (greenFlags > redFlags) {
    return pick([
      `${greenFlags} green flags outweigh ${redFlags} red flag${redFlags > 1 ? 's' : ''}! i mean you could do better. you can always do better. but you are doing well.`,
      `you are ${(100 * greenFlags) / greenFlags + redFlags}% green flag. thats pretty good. i hope that percentage is correct because i did it in my head. actually, looking at it, im quite sure that that percentage is wrong.`,
      `you are ${(100 * greenFlags) / (greenFlags + redFlags)}% green flag. thats pretty good. i hope that percentage is correct because i did it in my head.`,
      `if we were in a boat and your green flags were air and your red flags were water then we would survive for a while. but not long. because of the water.`,
      `you have more green flags than red flags. which means your green flags are winning. which means you are winning.`,
      `you have ${greenFlags} green flags. which is good. because green flags are good. and you have more green flags than red flags. which is also good. which means you are good.`,
      `if your green flags were in a battle with the red flags then the green flags would win. because there are more of them.`,
    ]);
  }
  if (greenFlags === redFlags && greenFlags > 0) {
    return pick([
      "woah... Perfectly balanced - equal green and red flags. i- i don't know what to say. this has never happened before. you fall deeper in cosmic harmony with the universe every passing day. i- want to be you.",
      'if green flags were XLR cables and red flags were DMX cables then i would have the same number of XLR cables as i would DMX cables.',
      'imagine two things that are the same. are you thinking of the same two things? because i am. and they are the same. like you and your red flags and green flags.',
    ]);
  }
  if (redFlags > greenFlags && greenFlags == 1) {
    return pick([
      `i guess you have ONE redeeming quality`,
      'your single green flag is like a ray of sunshine peeking through on a cloudy day.',
      `${redFlags} red flags vs ${greenFlags} green flag${greenFlags > 1 ? 's' : ''}. I'm not sure if we can be friends anymore... well unless you work on your red flags. and maybe pick up a few more green ones. or at least paint your red flags green. or if i became colour blind. or if the dictionary swapped the words red and green. then we could be friends`,
    ]);
  }
  if (redFlags > greenFlags && greenFlags > 0) {
    return pick([
      `${redFlags} red flags vs ${greenFlags} green flag${greenFlags > 1 ? 's' : ''}. I'm not sure if we can be friends anymore... well unless you work on your red flags. and maybe pick up a few more green ones. or at least paint your red flags green. or if i became colour blind. or if the dictionary swapped the words red and green. then we could be friends`,
      `if we were swimming and you put ${redFlags} stones in my pockets i would die`,
      "aww thats okay buddy. you have some green flags, and that's what matters.",
      `imagine i am reading your tarot cards. i see the ${redFlags} of wands and the ${greenFlags} of pentacles. the ${redFlags} of wands represents your red flags, and the ${greenFlags} of pentacles represents your green flags. i don't know what that means but it sounds bad.`,
      `if your red flags waged war on your green flags then the red flags would win. because there are more of them.`,
    ]);
  }
  // no green flags
  if (redFlags > 0 && greenFlags === 0) {
    return pick([
      `🚩 Yikes... ${redFlags} red flag${redFlags > 1 ? 's' : ''} and no green ones... how will you redeem yourself (commit to tc wiki)`,
      'loser alert',
    ]);
  }
  if (redFlags === 0 && greenFlags === 0) {
    return pick([
      "did you just spam the no button :( that's okay i guess.. ",
      'please stop spamming my buttons :(',
      'maybe someone will donate you some flags?',
      'you poor flagless person..',
    ]);
  }
  return 'idk what happened here';
};

export default getResultMessage;
