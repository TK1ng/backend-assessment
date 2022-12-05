const complimentBtn = document.getElementById("complimentBtn");
const fortuneBtn = document.getElementById("getFortuneBtn");
const addForm = document.getElementById("addFortune");
const deleteFortuneBtn = document.getElementById("deleteFortuneBtn");

let lastFortuneId;

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const { compliment } = res.data;
            swal('Hey...', compliment);
        });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            lastFortuneId = res.data.id;
            swal('✨✨ Your fortune says...', res.data.fortune);
        })
        .catch(err => {
            let { data } = err.response;
            swal(data);
        });
};


const addFortune = (body) => {
    axios.post("http://localhost:4000/api/fortune", body)
        .then(res => {
            const data = res.data;
            swal('HOORAY! 🎉', data);
        })
}

const deleteFortune = () => {
    axios.delete('http://localhost:4000/api/delete-fortune', { data: { id: lastFortuneId } })
        .then(res => {
            const { fortune } = res.data;
            swal('The following fortune has been deleted:', fortune);
        });
};

function submitHandler(e) {
    e.preventDefault();

    let newFortune = document.getElementById('newFortune');

    if (!newFortune.value) {
        swal('Hold on a sec!', 'Field can not be blank! Enter a message to submit');
        return;
    }

    let body = {
        fortune: newFortune.value
    }

    addFortune(body);

    newFortune.value = '';
}


complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener('click', getFortune);
addForm.addEventListener('submit', submitHandler);
deleteFortuneBtn.addEventListener('click', deleteFortune);