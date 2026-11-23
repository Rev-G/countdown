const fullnames = [
    "The Commander-In-Thief",
    "Genghis Don",
    "Donye West",
    "Kim Don Un",
    "HippoPOTUS",
    "Trumpelstiltskin",
    "Grab-Ass Grandpa",
    "Dozy Don",
    "The Grifter In Chief",
    "Don The Con",
    "TACO",
    "Uncle Scam",
    "Humpty Trumpty",
    "Cadet Bone Spurs",
    "The Cheeto-in-Chief",
    "Orange Julius Caesar",
    "Velveeta Voldemort",
    "The Commander-in-Tweet",
    "Mango Mussolini",
    "The Angry Creamsicle",
    "Orange Julius Caesar",
    "The Apricot Antichrist",
    "Donald The Lame Duck",
    "Donny Bone Spurs",
    "Sweaty Dozevelt",
    "Donald McTinyhands",
    "The Tangerine Tyrant"
];

const prefixes = [
    "The ridiculous",
    "The disturbing",
    "The nasty",
    "The moody",
    "The dishonest",
    "The selfish",
    "The awkward",
    "The greedy",
    "The dumpy",
    "The weird"
];

const oranges = [
    "orange",
    "pumpkin",
    "apricot",
    "cantaloupe",
    "carrot",
    "traffic-cone",
    "tangerine",
    "cheeto",
    "cheese-puff"
];

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function showRandomSentence() {
    const combinations = prefixes.flatMap(prefix =>
        oranges.map(orange => `${prefix} ${orange}`)
    );
    const sentence = getRandom([...combinations, ...fullnames]);
    const el = document.getElementById('random-part');
    if (el) el.textContent = sentence;
}

showRandomSentence();