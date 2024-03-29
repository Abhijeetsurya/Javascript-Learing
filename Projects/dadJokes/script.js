// PROMISES
// GET https://icanhazdadjoke.com/

const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

const generateJokes = () => {
    const setHeader = {
        headers: {
            Accept: "application/json"
        }
    };

    fetch('https://icanhazdadjoke.com/', setHeader)
        .then((res) => res.json())
        .then((data) => {
            jokes.innerHTML = data.joke;
        })
        .catch((error) => {
            console.log(error);
        });
};

jokeBtn.addEventListener('click', generateJokes);

generateJokes();

function changeColor(event) {
    if (event.type === "mousedown") {
        jokeBtn.style.backgroundColor = "white";
    } else {
        jokeBtn.style.backgroundColor = "";
    }
}

jokeBtn.addEventListener('mousedown', changeColor);
jokeBtn.addEventListener('mouseup', changeColor);
