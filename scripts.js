const newQuotes = [
    {
        qoute:'The way to get started is to quit talking and begin doing',
        author:'Walt Disney'
    },
    {
        qoute:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking",
        author:'Steve Jobs'
    },
    {
        quote:'If life were predictable it would cease to be life, and be without flavor',
        author:'Eleanor Roosevelt'
    },
    {
        qoute:"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough",
        author:'Oprah Winfrey'
    },
    {
        quote:"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success",
        author:"James Cameron"
    },
    {
        qoute:"Spread love everywhere you go. Let no one ever come to you without leaving happier",
        author:"Mother Teresa"
    },
    {
        qoute:"When you reach the end of your rope, tie a knot in it and hang on",
        author:"Franklin D. Roosevelt"   
    },
    {
        qoute:"Always remember that you are absolutely unique. Just like everyone else",
        author:"Margaret Mead"
    },
    {
        qoute:"Don't judge each day by the harvest you reap but by the seeds that you plant",
        author:"Robert Louis Stevenson"
    },
    {
        qoute:"The future belongs to those who believe in the beauty of their dreams",
        author:"Eleanor Roosevelt"
    },
    {
        quote:"Whoever is happy will make others happy too",
        author:"Anne Frank"
    },
    {
        qoute:"Do not go where the path may lead, go instead where there is no path and leave a trail",
        author:"Ralph Waldo Emerson"
    },
    {
        qoute:"Life is never fair, and perhaps it is a good thing for most of us that it is not",
        author:"Oscar Wilde"
    },
    {
        qoute:"In this life we cannot do great things. We can only do small things with great love",
        author:"Mother Teresa"
    },
    {
        qoute:"The only impossible journey is the one you never begin",
        author:"Tony Robbins"
    },
    {
        qoute:"Keep smiling, because life is a beautiful thing and there's so much to smile about",
        author:"Marilyn Monroe"
    }

];

const qoute = document.querySelector('.text');
const author = document.querySelector('.author');
const button = document.querySelector('.button');

function changeQoute(){
    let randomQoute = Math.floor(Math.random()*newQuotes.length)

    qoute.innerText = newQuotes[randomQoute].qoute;
    author.innerText = newQuotes[randomQoute].author;
}
button.addEventListener('click',changeQoute)


console.log(newQuotes[5].qoute)
