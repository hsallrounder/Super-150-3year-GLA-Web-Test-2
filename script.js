const xhr = new XMLHttpRequest;

// API

xhr.onload = function(){
    var data = JSON.parse(this.response);
    const movie = document.getElementById('display-karlo');
    movie.innerHTML = ``;
    for(var i = 0; i < data.length; i++) {
        var newImg = document.createElement('img')
        newImg.src = data[i].show.image.medium;
        movie.appendChild(newImg);
    }
    console.log(data);
}


document.getElementById('search-button').addEventListener('click',(e) => {
    e.preventDefault();
    let input = document.getElementById('input').value;
    const url = " https://api.tvmaze.com/search/shows?q=" + input;
    xhr.open("GET",url);
    xhr.send();
})


// Theme -> Local Storage

const themeColors = document.querySelectorAll('[name="theme"]');

const storeTheme = function (theme) {
  localStorage.setItem("theme", theme);
  console.log("theme applied");
};

const applyTheme = function () {
  const activeTheme = localStorage.getItem("theme");

  themeColors.forEach((themeOption) => {
    if (activeTheme == themeOption.id) {
      themeOption.checked = true;
    }
  });
};
themeColors.forEach((themeOption) => {
  themeOption.addEventListener("click", () => {
    storeTheme(themeOption.id);
  });
});

document.onload = applyTheme();