function defaultResize(){
    $('#wrapper').css('height', window.innerHeight + 'px');

    // $('#wrapper > div').css('height', window.innerHeight + 'px');
    // $('#wrapper > div').css('width', window.innerWidth + 'px');
}

$(window).resize(function(){
    console.log('resize');
    defaultResize();
});


$(document).ready(function() {
    console.log('ready');
    defaultResize();
});



//
// preloadVideo('video-1', 'assets/video/movie_a.mp4');
// preloadVideo('commander-movie', 'assets/video/movie_b.mp4');
// preloadVideo('control-movie', 'assets/video/movie_c.mp4');
//
//
//
//
// function preloadVideo(elementId, videoPath) {
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', videoPath, true);
//     xhr.responseType = 'blob';
//     xhr.onload = function(e) {
//         if (this.status == 200) {
//             // console.log("got it" + videoPath);
//             let myBlob = this.response;
//             let vid = (window.webkitURL || window.URL).createObjectURL(myBlob);
//             // myBlob is now the blob that the object URL pointed to.
//             let video = document.getElementById(elementId);
//             // console.log("Loading video into element");
//             video.src = vid;
//             // not needed if autoplay is set for the video element
//             // video.play();
//             console.log(videoPath, "READY!");
//         }
//     };
//
//     xhr.send();
// }






$("#video-1").click(function () {
   $(this)[0].play();
   let video1Interval = setInterval(function () {
       if($("#video-1")[0].currentTime >= 16) {
           $("#video-1")[0].pause();
           $("#wrapper > div > div").css('display', 'block');
           clearInterval(video1Interval);
       }

   }, 1000);
});


$("#wrapper > div > div").click(function () {
    $("#wrapper > div > div").css('display', 'none');
    $("video").css('display', 'none');
    $("#"+this.className+"-movie").css('display', 'block');
    $("#"+this.className+"-movie")[0].play();
});




function videoEnded() {
    $("#wrapper > div > div").css('display', 'block');
}







