//滚轮事件//
var scrollFunc = function (e) {
  e = e || window.event;
  if (e.wheelDelta) { //判断浏览器IE，谷歌滑轮事件             
    if (e.wheelDelta < 0) { //当滑轮向下滚动时
      $(".box4").css("top", "0")
      $(".box4").css("opacity", "1")
      $(".box1>div").css("opacity", "0")

      $(".box1").css("top", "-100%")
      $(".box1").css("left", "0")
      $(".box1>div").css("opacity", "0")
      $(".box3").css("left", "100%")
    }
    else {
      $(".box1").css("top", "0%")
      $(".box4").css("top", "100%")
      $(".box4").css("opacity", "0")
      $(".box1>div").css("opacity", "1")
    }
    if (e.wheelDelta > 0) { //当滑轮向上滚动时
    }
  }
}

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

$(".qq").mouseover(function () {
  $("#qq").css("opacity", "1");
  $("#qq").css("top", "0%");
  $(".q").css("opacity", "0")
}); $(".qq").mouseout(function () {
  $("#qq").css("opacity", "0");
  $("#qq").css("top", "-100%");
  $(".q").css("opacity", "1")
});

$(".wx").mouseover(function () {
  $("#wx").css("opacity", "1");
  $("#wx").css("top", "0%");
  $(".w").css("opacity", "0")
}); $(".wx").mouseout(function () {
  $("#wx").css("opacity", "0");
  $("#wx").css("top", "-100%");
  $(".w").css("opacity", "1")
});

$(".zfb").mouseover(function () {
  $("#zfb").css("opacity", "1");
  $("#zfb").css("top", "0%");
  $(".z").css("opacity", "0")
}); $(".zfb").mouseout(function () {
  $("#zfb").css("opacity", "0");
  $("#zfb").css("top", "-100%");
  $(".z").css("opacity", "1")
});

$(".sj").mouseover(function () {
  $("#sj").css("top", "0%");
  $("#sj").css("opacity", "1")
  $(".s").css("opacity", "0")
});
$(".sj").mouseout(function () {
  $("#sj").css("opacity", "0");
  $("#sj").css("top", "-100%");
  $(".s").css("opacity", "1")
});

$(".hire").click(function () {
  $(".box1>div").css("opacity", "0")
  $(".box3").css("left", "0")
  $(".box3>div").css("opacity", "1")
  setTimeout(function () {
    $(".box3").css("background", "url(img/psp.jpg) center no-repeat")
    $(".left").css("bottom", "-10%")
    $(".right").css("top", "0")
  }, 200)
})
$(".a").click(function () {
  $(".box1>div").css("opacity", "1")
  $(".box3").css("left", "100%")
  $(".box3>div").css("opacity", "0")
  setTimeout(function () {
    $(".box3").css("background", "url(img/banner-a.jpg) center no-repeat")
    $(".left").css("bottom", "-60%")
    $(".right").css("top", "-60%")
  }, 200)
})


setInterval(function () {
  //每隔一秒执行一次
}, 1000);

setTimeout(function () {
  //延时1秒
}, 1000)



$(function () {
  //获取浏览器宽度
  var _width = $(window).width();
  if (_width < 1500) {
    $(".l").remove();
  }
});

window.addEventListener("load", function () {
  var addEventListener = 'addEventListener';
  var elems = document.getElementsByClassName('box4');
  for (var i = 0; i < elems.length;) {
    (function (elem, lastClientX, lastClientY, pushed) {
      elem[addEventListener]('mousedown', function (e) {
        pushed = 1;
        lastClientX = e.clientX;
        lastClientY = e.clientY;

        e.preventDefault();
        e.stopPropagation();
      }, 0);

      window[addEventListener]('mousemove', function (e) {
        if (pushed) {
          elem.scrollLeft -=
            (- lastClientX + (lastClientX = e.clientX));
          elem.scrollTop -=
            (- lastClientY + (lastClientY = e.clientY));
        }
      }, 0);

      window[addEventListener]('mouseup', function () {
        pushed = 0;
      }, 0);

    })(elems[i++]);
  }
}, 0);