const quotes: string[] = [
    "The best way to get started is to quit talking and begin doing.",
    "Don't watch the clock; do what it does. Keep going.",
    "Dream big and dare to fail.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Push yourself, because no one else is going to do it for you.",
    "This one’s for you, Chirag.",
    "Success doesn't just find you. You have to go out and get it.",
    "Great things never come from comfort zones.",
    "Don’t stop when you’re tired. Stop when you’re done."
  ];
  
  function getRandomQuote(): string {
    const index = Math.floor(Math.random() * quotes.length);
    return quotes[index];
  }
  
  console.log("✨ Quote of the Moment:");
  console.log(getRandomQuote());
  