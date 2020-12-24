
const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: "application/json" } }
        const res = await fetch("https://icanhazdadjoke.com/?", config);
        const data = await res.json();
        return data.joke;
    }
    catch (e) {
        return "NO JOKES AVAILABLE!"
    }
}

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement("li");
    newLI.append(jokeText);
    jokes.append(newLI);
}

button.addEventListener("click", addNewJoke);






