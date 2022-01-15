function getPictureInfo() {
    const key = 'https://api.nasa.gov/planetary/apod?api_key=HN1ahUnPReryoUXH84LOeALAwGuGNDxYWFHX91s5';
    fetch(key)
    .then(response => response.json())
    .then(data => {
        for (const key in data){
            //console.log(`${key}: ${data[key]}`);
            let explanations = data.explanation;
            let names = data.copyright;
            let dates = data.date;
            let titles = data.title;

    function renderInfo() {
        let images = document.getElementById('img');
        images.src = data.url;
        let html = '';
        let htmlSegment = "Title: " + titles + "<br>" + "Date of Capture: " + dates + "<br>" + explanations + "<br>" + "Copyright: " + names;
        html += htmlSegment;
        let container = document.getElementById('container').innerHTML = htmlSegment;
    }

    let likeCount = 0;
    
    function increaseLikes(){
        likeClick = document.getElementById('like');
        likeClick.addEventListener("click", function(){
            likeCount ++;
            localStorage.setItem("likeCount", likeCount);
            localStorage.getItem("likeCount");
            document.getElementById("show-likes").innerHTML = "Likes: " + localStorage.likeCount;
        });
    }

    function increaseDislike(){
        dislikeClick = document.getElementById('dislike');
        dislikeClick.addEventListener("click", function(){
            likeCount--;
            localStorage.setItem("likeCount", likeCount);
            localStorage.getItem("likeCount");
            document.getElementById("show-likes").innerHTML = "Likes: " + localStorage.likeCount;
        });
    }
    sessionStorage.getItem('totalLikes')
    increaseLikes();
    increaseDislike();
}
renderInfo();
    }).catch((error) => {
        console.log(error)
    }) 
}
getPictureInfo();

let myGreeting = setTimeout(() => {
    getPictureInfo();
  }, 2000);