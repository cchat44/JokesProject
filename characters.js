console.log("Hello from our JS")
function myName(){fetch(
    "http://gateway.marvel.com/v1/public/characters?apikey=6f9c39bd72b08fe9283960cafb8b4b0f"
  )
    .then((response) => response.json())
    .then((data) => {
      //This is gathering the data from Marvel API 
      console.log(JSON.stringify(data.data, null, 2));
      let resultLength = data.data.results;
      // for (let i = 0; i < resultLength.length; i++) {
      //   var charactersName = data.data.results[i].name;
      //   //This is returning the name of the characters from the data object
      //   console.log(charactersName);
      // }
      var item = data.data.results[Math.floor(Math.random()*data.data.results.length)];
      let charList = document.getElementById("char-list");
      // data.data.results.forEach(element => {
      //   console.log("object");
      //   charList.innerHTML += `
      //   <li>
      //   ${element.name}
      //   </li>

      //   `
      // });
      console.log(item);
      // charList.style.width="100px"
      charList.innerHTML = `<p>Hero:${item.name}</p> <img src="${item.thumbnail.path}.jpg" style="width: 400px"/>` 
    });}