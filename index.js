document.querySelector(".btn").addEventListener('click', () => {
    getAnime();
    displayInfo();
})


function getAnime(){
    fetch("https://api.jikan.moe/v4/random/anime")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let animeTitle = data.data.title
            let animeImage = data.data.images.jpg.image_url
            let animeSynopsis = data.data.synopsis
            let numberOfEpisodes = data.data.episodes.toString()
            console.log(numberOfEpisodes)
            document.querySelector("#animePic").setAttribute("src", animeImage)
            document.querySelector("#nameOfAnime").innerText = (animeTitle);
            document.getElementById("episodeTotal").innerText = `Episodes: ${numberOfEpisodes}`;
            document.getElementById("animeDescription").innerText = `Synopsis: ${animeSynopsis}`
             
            
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}

function displayInfo(){
    document.querySelector(".card").classList.remove("invisible")
}








