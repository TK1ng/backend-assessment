module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];

        // choose random compliment
        let randomIndex = randomGenerator(compliments);
        let randomCompliment = compliments[randomIndex];

        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["A beautiful, smart, and loving person will be coming into your life.", "A truly rich life contains love and art in abundance.", "Do not underestimate yourself. Human beings have unlimited potentials.", "He who knows he has enough is rich.", "In order to take, one must first give."];

        let randomIndex = randomGenerator(fortunes);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);

    }
}

function randomGenerator(arr) {
    return Math.floor(Math.random() * arr.length);
}