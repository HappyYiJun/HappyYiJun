let ulLisObj = document.querySelectorAll('.t-img li');
let olLisObj = document.querySelectorAll('.circle li');
let prev = document.querySelector('.arrow-l');
let next = document.querySelector('.arrow-r');


//要进去, 图片的索引
let lastIndex = 0;
// 要显示,出来的图片索引
let index = 0;
//给ol 下所有li绑定点击事件
olLisObj.forEach((li, key) => {
  li.onclick = function () {
    //设置要隐藏和显示的索引
    lastIndex = index;
    index = key;
    change();
  }
});

// 实现右边按钮
next.onclick = function () {
  lastIndex = index;
  index++;
  // 判断索引是否超过最大值
  if (index > ulLisObj.length - 1) {
    index = 0;
  }
  change();
}

// 实现左边按钮,上一张
prev.onclick = function () {
  lastIndex = index;
  index--;
  // 判断超过最小索引,则直接赋值最大索引
  if (index < 0) {
    index = ulLisObj.length - 1;
  }
  change();
}
// 自动播放的实现
let times = '';
function autoPlay() {
  times = setInterval(function () {
    // 直接就是下一张
    next.onclick();
  }, 5000)
}
autoPlay();

// 鼠标移入则清除定时器
next.parentNode.onmouseover = function () {
  clearInterval(times)
}
// 鼠标移入则继续开始
next.parentNode.onmouseout = function () {
  autoPlay();
}

function change() {
  //设置上一张图片隐藏
  ulLisObj[lastIndex].className = '';
  olLisObj[lastIndex].className = '';
  //设置下一张图片显示
  ulLisObj[index].className = 'ac';
  olLisObj[index].className = 'ac';
}


function timerOver() {
  var oH = document.querySelector(".hour");
  var oM = document.querySelector(".minute");
  var oS = document.querySelector(".second");

  var startTime = new Date();
  var overTime = new Date("2022-06-30 12:00:00");
  //得到秒数
  var ss = Math.floor((overTime - startTime) / 1000);
  var h = Math.floor(ss / 3600 % 24);
  var m = Math.floor(ss / 60 % 60);
  var s = Math.floor(ss % 60);

  oH.innerHTML = h;
  oM.innerHTML = m;
  oS.innerHTML = s;
  //判断时间是否倒完
  if (ss <= 0) {
    clearInterval(timer);
    oH.innerHTML = "已";
    oM.innerHTML = "结";
    oS.innerHTML = "束";
  }
}
timerOver();
var timer = setInterval(timerOver, 1000);