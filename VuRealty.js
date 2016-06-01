/*function header(){             /test function/
  var ypos = window.pageYOffset;
  var header = document.getElementById('homePhoto');
  var vp = document.getElementById('vuProp');
  if (ypos < 1.5*document.documentElement.clientHeight) {
    header.style.position = "relative"
    header.style.top = "40px"
    vp.style.position = "absolute"
    vp.style.top = null
  } else {
    header.style.position = "fixed"
    header.style.top = "-100px"
    vp.style.position = "fixed"
    vp.style.top = "-25px"
  }
};*/
function header (){          /*parallax scroll*/
  var ypos = window.pageYOffset;
  var homePhoto = document.getElementById('homePhoto');
  homePhoto.style.top = .38*ypos + "px";
};
window.addEventListener("scroll", header);

function appear(){           /*Thang and Michael photo appear with scroll*/
  var ypos= window.pageYOffset;
  var thang = document.getElementById('thangPic');
  var mike = document.getElementById('michaelPic');
    if(window.innerWidth > 1000){
      if (ypos<(.7*document.body.clientHeight)){
        thang.style.opacity = "0"
        mike.style.opacity = "0"
      } else {
        thang.style.opacity = "1"
        mike.style.opacity = "1"
      }
    } else {
      thang.style.opacity = "1"
      mike.style.opacity = "1"
    }
};
window.addEventListener("scroll", appear);

function appear2(){               /*Brain photo appear with scroll*/
  var ypos= window.pageYOffset;
  var brain = document.getElementById('knowlegePhoto');
  if(window.innerWidth > 1000){
    if (ypos<(1.5*document.documentElement.clientHeight)){
      brain.style.opacity = "0"
    } else {
      brain.style.opacity = "1"
    }
  } else {
      brain.style.opacity = "1"
  }
};
window.addEventListener("scroll", appear2);

function appear4(){                 /*Contact icons appear with scroll*/
  var ypos= window.pageYOffset;
  var icons = document.getElementsByClassName('icons');
  for (var i=0; i<icons.length; i++){
    if(window.innerWidth > 1000){
      if (ypos<(3.15*document.documentElement.clientHeight)){
        icons[i].style.opacity = "0"
      } else {
        icons[i].style.opacity = "1"
      }
    } else {
      icons[i].style.opacity = "1"
    }
  }
};
window.addEventListener("scroll", appear4);
