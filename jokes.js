function charJokes(){fetch( 'https://api.jokes.one/jod'

)
    .then((response) => response.json())
    .then((data) => {
    
      let item = data.data.results[Math.floor(Math.random()*data.data.results.length)];
      let jokesList = document.getElementById("char-list");
      data.data.results.forEach(element => {
        // console.log("object");
        jokesList.innerHTML += `
        <li>
        ${element.name}
        </li>

        `
      });
      console.log(item);
      jokesList.innerHTML = `<p>Character:${item.name}</p> <img src=""/>` 
    });}

