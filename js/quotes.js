const quotes = [
    {
        quote:"The way to get started is to quit talking and begin doing.",
        author:"Walt Disney",
    },
    {
        quote:"Don’t aim for success if you want it; just do what you love and believe in, and it will come naturally.",
        author:"David Frost",
    },
    {
        quote:"The road to success and the road to failure are almost exactly the same.",
        author:"Colin R. Davis",
    },
    {
        quote:"Opportunities don’t happen. You create them.",
        author:"Chris Grosser",
    },
    {
        quote:"Tough times never last, but tough people do.",
        author:"Robert H. Schuller",
    },
    {
        quote:"There are better starters than me but I’m a strong finisher.",
        author:"Usain Bolt",
    },
    {
        quote:"I’ve failed over and over and over again in my life and that is why I succeed.",
        author:"Michael Jordan",
    },
    {
        quote:"Grind Hard, Shine Hard.",
        author:"Dwayne Johnson",
    },
    {
        quote:"You will never know until you try.",
        author:"Anonymous",
    },
    {
        quote:"Behind the cloud is the sun still shining. ",
        author:"Anonymous",
    },
];

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;