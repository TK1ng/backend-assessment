// TODO: CONNECT JSON FILE AND MOVE COMPLIMENTS/FORTUNES TO DB FILES
const data = require('./db.json');
const fortunes = data.fortunes;

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];

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
        // console.log('req received: ', req.body.id)
        let { id } = req.body;

        let target = fortunes.find(e => e.id === id);
        targetIndex = fortunes.indexOf(target);


        fortunes.splice(targetIndex, 1);

        console.log(fortunes)

        res.status(200).send(target);
    }

}

function randomGenerator(arr) {
    return Math.floor(Math.random() * fortunes.length);
}