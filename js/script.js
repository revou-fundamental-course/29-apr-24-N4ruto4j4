// slider home

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

// slider message
var slideIndexMessage = 1;

showDivsMessage(slideIndexMessage);

function plusDivsMessage(n){
    showDivsMessage((slideIndexMessage += 1))
}

function showDivsMessage(n){
    var i;
    var imgListMessage=document.getElementsByClassName("img-slide-message");
    if( n > imgListMessage.length) slideIndexMessage = 1;
    else if ( n < 1 ) slideIndexMessage = imgListMessage.length;
    for( i = 0; i < imgListMessage.length; i++ ){
        imgListMessage[i].style.display = "none";
    }
    imgListMessage[slideIndexMessage-1].style.display = "block";
}

setInterval(() => {
    plusDivsMessage(1)
}, 5000)

// alert unable

function unable(){
    window.alert('Maaf! fitur ini belum tersedia');
}

// form validation

function check_form(){
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message-text").value;

    if(username == "" || email == "" || message == ""){
        document.getElementById("error").style.display="inline-block";
        document.getElementById("username").style.border="1px solid #ff6309";
        document.getElementById("email").style.border="1px solid #ff6309";
        document.getElementById("message-text").style.border="1px solid #ff6309";
    }else{
        alert("Successed to login");
        document.getElementById("error").style.display="none";
        document.getElementById("username").style.border="0px";
        document.getElementById("email").style.border="0px";
        document.getElementById("message-text").style.border="0px";
        
    }

}





