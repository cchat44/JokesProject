const container = document.getElementsByClassName('results');
const containerWithId = document.getElementById('results');



function getJokes() {
    fetch("https://developer.marvel.com/docs#!/public/getCreatorCollection_get_0id=6f9c39bd72b08fe9283960cafb8b4b0f").then(function(response){
    return response.json()
}).then(function(data){
    console.log(data)
}

