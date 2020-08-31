const insults = [
    "Shutup Bird!",
    "Another insult!",
    "Yeah, and another insult!"
];

function getRandomInsult() {
    const randomIndex = Math.floor(Math.random() * insults.length);
    return insults[randomIndex];
}

module.exports = getRandomInsult;