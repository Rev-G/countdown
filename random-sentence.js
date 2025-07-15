const prefixes = [
    "ridiculous",
    "baby-faced",
    "disturbing",
    "nasty",
    "sad",
    "moody",
    "dishonest",
    "selfish",
    "awkward",
    "greedy",
    "dumpy",
    "corrosive",
    "weird"
];

const oranges = [
    "orange",
    "pumpkin",
    "apricot",
    "cantaloupe",
    "carrot",
    "traffic-cone",
    "cheesecake",
    "clown-fish",
    "goldfish",
    "tangerine",
    "cheeto",
    "cheese-puff"
];

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function showRandomSentence() {
    const prefix = getRandom(prefixes);
    const orange = getRandom(oranges);
    const sentence = `${prefix} ${orange}`;
    const el = document.getElementById('random-part');
    if (el) el.textContent = sentence;
}

showRandomSentence();