var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
    showDivs((slideIndex += 1))
}

function showDivs(n){
    var i;
    var imgList=document.getElementsByClassName("img-slide");
    if( n > imgList.length) slideIndex = 1;
    else if ( n < 1 ) slideIndex = imgList.length;
    for( i = 0; i < imgList.length; i++ ){
        imgList[i].style.display = "none";
    }
    imgList[slideIndex-1].style.display = "block";
}

setInterval(() => {
    plusDivs(1)
}, 5000)