const btn = document.getElementById("btn");
const content = document.getElementById("content");

const url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political&type=single";
function getJoke(){
    fetch(url)
    .then(data=>data.json())
    .then((response)=>{
        content.classList.remove("fade");
        console.log(response.joke);
        content.textContent=`${response.joke}`;
        content.classList.add("fade")
    })
}
getJoke();