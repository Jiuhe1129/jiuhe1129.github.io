//滚轮事件//
var scrollFunc = function (e) {
  e = e || window.event;
  if (e.wheelDelta) { //判断浏览器IE，谷歌滑轮事件             
    if (e.wheelDelta < 0) { //当滑轮向下滚动时
      $(".box4").css("top", "0")
      $(".box4").css("opacity","1")
      $(".box1>div").css("opacity", "0")
      
      $(".box1").css("top","-100%")
      $(".box1").css("left","0")
      $(".box1>div").css("opacity","0")
      $(".box3").css("left","100%")
    }
    else {
      $(".box1").css("top","0%")
      $(".box4").css("top", "100%")
      $(".box4").css("opacity","0")
      $(".box1>div").css("opacity", "1")
    }
    if (e.wheelDelta > 0) { //当滑轮向上滚动时
    }
  }
}
// //给页面绑定滑轮滚动事件
// if (document.addEventListener) {
//   document.addEventListener('DOMMouseScroll', scrollFunc, false);
// }
//滚动滑轮触发scrollFunc方法
window.onmousewheel = document.onmousewheel = scrollFunc;

window.onload = function () {
  $(".box1>div").css("opacity", "1")
}

$(".n").mousemove(function () {
  $("nav").css("left", "0")
  $("nav").css("opacity", "1")
}); $(".box").mousemove(function () {
  $("nav").css("left", "-200px")
  $("nav").css("opacity", "0")
});


$(".hire img,.lxw").mousemove(function () {
    $(".hire").css("transform", "scale(1.1)")
  }); $(".hire img,.lxw").mouseout(function () {
    $(".hire").css("transform", "scale(1)")
  });
  

$(".fxk").mousemove(function () {
  $(".fxk").css("transform", "scale(1.1)")
  $(".shuaxin").css("transform", "rotate(360deg)")
}); $(".fxk").mouseout(function () {
  $(".fxk").css("transform", "scale(1)")
  $(".shuaxin").css("transform", "rotate(-360deg)")
});

$(".zwjs").mousemove(function () {
  $(".zwjs").css("box-shadow", "0px 0px 30px 30px #092AB5")
}); $(".zwjs").mouseout(function () {
  $(".zwjs").css("box-shadow", "0px 0px 0px 0px #092AB5")
});


$(".quan").mousemove(function () {
  $(".quan").css("background-color", "#939393")
}); $(".quan").mouseout(function () {
  $(".quan").css("background-color", "#ffffff")
});


$(".b").mousemove(function () {
  $(".box2").css("top", "0")
  $(".box2").css("opacity", "1")
}); $(".i").mousemove(function () {
  $(".box2").css("top", "-25%")
  $(".box2").css("opacity", "0")
});



$(".hire").click(function () {
  $(".box1>div").css("opacity","0")
  $(".box3").css("left","0")
  $(".box3>div").css("opacity","1")
setTimeout(function () {
  $(".box3").css("background","url(img/psp.jpg) center no-repeat")
  $(".left").css("bottom","-10%")
  $(".right").css("top","0")
}, 200)
})
$(".a").click(function () {
  $(".box1>div").css("opacity","1")
  $(".box3").css("left","100%")
  $(".box3>div").css("opacity","0")
setTimeout(function () {
  $(".box3").css("background","url(img/banner-a.jpg) center no-repeat")
  $(".left").css("bottom","-60%")
  $(".right").css("top","-60%")
}, 200)
})


setInterval(function () {
  //每隔一秒执行一次
}, 1000);

setTimeout(function () {
  //延时1秒
}, 1000)







