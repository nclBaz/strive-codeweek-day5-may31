let search = function (event) {
  if (event.key === "Enter") {
    getAlbums(event.target.value)
  } else {
    console.log("Another key has been pressed")
  }
}

let getAlbums = function (searchString) {
  console.log("Albums fetched!")

  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + searchString, {
    // http request
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDYzMWYwNDQyNGY0NzAwMTUzZGVmY2MiLCJpYXQiOjE2MTkxNjYyNTMsImV4cCI6MTYyMDM3NTg1M30.qqMlSKGggXQ_6F_5dyAsIxEFzCFsQZUF6LHGbFMz3Is",
    },
  })
    .then(response => response.json()) // asynchronous operation --> code is being executed only when response arrives
    .then(data => renderAlbums(data)) // asynchronous operation --> code is being executed only when data is converted
}

let renderAlbums = function (songs) {
  // dom manipulation

  // 1. target the main content

  let content = document.querySelector("#content")

  // 2. erase the inner html for that element

  content.innerHTML = ""

  // 3. replace it with the new data

  // if I grab 25 songs, I need to create 25 cards

  if (songs.data.length > 0) {
    // songs.data is an array!!!!!!!!
    for (let index = 0; index < songs.data.length; index++) {
      // for each element of the array concatenate a new card to the previous content
      content.innerHTML =
        content.innerHTML +
        `
        <div class="card">
        <div class="card-head">
          <img src=${songs.data[index].album.cover_big}>
          <ion-icon name="play-sharp"></ion-icon>
        </div>
        <div class="card-body">
          <p>${songs.data[index].title}</p>
          <span>${songs.data[index].artist.name}</span>
        </div>
      </div>
      `
    }
  }
}
