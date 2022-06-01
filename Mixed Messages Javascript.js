console.log('Welcome to Fixed Messages Portoflio Program!');
const randomNumberGenerator = () => {
    return (Math.floor(Math.random() * 3)); 
};



const randomElement = array => {
    return array[Math.floor(Math.random() * array.length)];
}



const motQuotes = [`"Dream big and dare to fail."`, `"No guts, no story."`, `"Be so good they can\'t ignore you."`, `"The Problem is: You think you have time"`];
const motPeople = ['Arnold Schwarzenegger', 'Sylvester Stallone', 'Keanu Reeves', 'Johnny Depp'];
const doToday = ['Do 20 push-ups', 'Go and run for 15 minutes','Drink 0.5l of water','Get up straight away'];



const randomArray = () => {
    if (randomNumberGenerator() === 0){
        return `Today your random choice is: Quotes! ${randomElement(motQuotes)}`;
    } else if (randomNumberGenerator() === 1){
        return `Today your random choice is: Famous People that you should learn from!: ${randomElement(motPeople)}`;
    } else if (randomNumberGenerator() === 2){
        return `Today your random choice is: Your 'to do' straight after waking up!: ${randomElement(doToday)}`;
    }
};

console.log(randomArray());

