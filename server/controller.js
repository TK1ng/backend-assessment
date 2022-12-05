const fortuneDb = require('./fortunes.json');
const complimentDb = require('./compliments.json')
const fortunes = fortuneDb.fortunes;
const compliments = complimentDb.compliments;

module.exports = {

    getCompliment: (req, res) => {
        // choose random compliment
        let randomIndex = randomGenerator(compliments);
        let randomCompliment = compliments[randomIndex];

        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        if (fortunes.length === 0) {
            res.status(400).send('There are no fortunes to read. Add a wise message to fill the fortune cup!');
            return;
        }
        let randomIndex = randomGenerator(fortunes);
        let randomFortune = fortunes[randomIndex];
        console.log(randomFortune);
        res.status(200).send(randomFortune);

    },
    addFortune: (req, res) => {
        let newId = fortunes.length + 1;

        let newFortune = {
            "id": newId,
            "fortune": req.body.fortune
        }

        fortunes.push(newFortune);
        res.status(200).send('Your custom fortune has been added!');
    },
    deleteFortune: (req, res) => {

        let { id } = req.body;

        let target = fortunes.find(e => e.id === id);
        targetIndex = fortunes.indexOf(target);

        fortunes.splice(targetIndex, 1);
        res.status(200).send(target);
    },
    updateCompliment: (req, res) => {
        console.log(req.body);
    }

}

function randomGenerator(arr) {
    return Math.floor(Math.random() * fortunes.length);
}