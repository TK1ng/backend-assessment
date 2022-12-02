const complimentBtn = document.getElementById("complimentButton");

const fortuneBtn = document.getElementById("fortuneButton");

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            swal("Hey...", data);
        });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            swal("✨✨ Your fortune says...", data);
        });
};

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)