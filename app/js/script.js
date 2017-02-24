$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



// Navigation Effects
// $(document).ready(function(){
//   $(window).resize(function(){
//     ($(window).width() < 801){
//     document.getElementById('navi').style.display = "none";
//     }
//   })
// })
//     document.getElementById('navi').style.display =="none";
//   }
// }
//     var current_width = $(window).width();
//     if(current_width < 800){
//       document.getElementById('navi').style.display =="block"{
//         document.getElementById('navi').style.display =="none";
//     }
// }else{
//   document.getElementById('navi').style.display =="none";
// }
// };
// function slider() {
//     if (document.body.scrollTop > 100) //Show the slider after scrolling down 100px
//         document.getElementById('#navi').style.position = "fixed";
//     else
//         document.getElementById('#navi').style.position = "static";
// }

// $(window).scroll(function () {
//     slider();
// });

// $(document).ready(function () {
//     slider();
// });

// var wrap = $("#navi, #fa");

// var smokeVideo = $("<video autoplay loop id='video-background' muted>" + "<source src='img/smoke2.mp4'>" +  "<source src='img/smoke2.ogv' type='video/ogg'> " + "<source src='img/smoke2.webm' type='video/webm'> " + "</video>");
$('.kickballImg').click(function(){
  $(".popup").show("slow");
  $(".popup").append("<img class='remove' src='img/oyic_kickball.png'/>")
});


$('.osayImg').click(function(){
  $(".popup").show("slow");
  $(".popup").append("<img class='remove' src='img/osayLogo.png'/>")
});

$('#close').click(function(){
  $(".remove").remove();
  $(".popup").hide("slow");
});


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        $("#navi, #fa").addClass("mani");
    } else {
        $("#navi, #fa").removeClass("mani");
    }
});





if ( $(window).width() < 800) { 

function navBar() {
  if(document.getElementById('navi').style.display == "none"){
  document.getElementById('navi').style.display = "block";
  }else{
    document.getElementById('navi').style.display = "none";
  }

}
} 

// document.getElementsByClassName('close').onClick = function(){
//   clicked()
// };

// function clicked(){
//   document.getElementById('navi').style.display ="none";
// }



// Display video<video width="480" height="300" controls="controls" preload="auto" poster="path-to-poster.jpg">


var smokeVideo = $("<video autoplay loop id='video-background' muted>" + "<source src='img/smoke2.mp4'>" +  "<source src='img/smoke2.ogv' type='video/ogg'> " + "<source src='img/smoke2.webm' type='video/webm'> " + "</video>");

$("#videoContainer").append(smokeVideo);



// });


// transition
document.getElementById('flyerImg').onmouseover = function () {
   mouseOver()
};
document.getElementById('flyerImg').onmouseout = function () {
   mouseOut()
};

function mouseOver(){
  document.getElementById('flyerImg').style.backgroundPosition = "0 60%";
  document.getElementById('flyerImg').style.WebkitTransition = ".3s";
  document.getElementById('overlayEffect').style.display= "block";
};

function mouseOut(){
  // document.getElementById('flyerImg').style.height= "50vh";
  document.getElementById('flyerImg').style.backgroundPosition = "0px 56%";
  document.getElementById('flyerImg').style.WebkitTransition = ".3s";
  document.getElementById('overlayEffect').style.display= "none";
};


document.getElementById('osayLogo').onmouseover = function () {
   mouseOver2()
};
document.getElementById('osayLogo').onmouseout = function () {
   mouseOut2()
};

function mouseOver2(){
  document.getElementById('osayLogo').style.backgroundPosition = "0 55%";
  document.getElementById('osayLogo').style.WebkitTransition = ".3s";
  document.getElementById('overlayEffect2').style.display= "block";
};

function mouseOut2(){
  // document.getElementById('flyerImg').style.height= "50vh";
  document.getElementById('osayLogo').style.backgroundPosition = "0px 50%";
  document.getElementById('osayLogo').style.WebkitTransition = ".3s";
  document.getElementById('overlayEffect2').style.display= "none";
};


