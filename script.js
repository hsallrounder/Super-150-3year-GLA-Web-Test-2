const xhr = new XMLHttpRequest;

xhr.onload = function(){
    var data = JSON.parse(this.response);
    const movie_grid = document.getElementById('display-karlo');
    movie_grid.innerHTML = ``;
    for(var i = 0; i < data.length; i++) {
        var newItem = document.createElement('img')
        newItem.src = data[i].show.image.medium;
        movie_grid.appendChild(newItem);
    }
    console.log(data);
}


document.getElementById('search-button').addEventListener('click',(e) => {
    let input = document.getElementById('input').value;
    const url = " https://api.tvmaze.com/search/shows?q=" + input;
    xhr.open("GET",url);
    e.preventDefault();
    xhr.send();
})