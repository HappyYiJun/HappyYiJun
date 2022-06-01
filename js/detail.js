
var box = document.querySelector('.product_intro');
var small = document.querySelector('.small');
var mask = document.querySelector('.mask');
var big = document.querySelector('.big');
var img = document.querySelector('.bigimg');

small.onmouseenter = function () {
  mask.style.display = 'block';
  big.style.display = 'block';
}

small.onmouseleave = function () {
  mask.style.display = 'none';
  big.style.display = 'none';
}
//
small.onmousemove = function (e) {

  var x = e.clientX;
  var y = e.clientY;

  var offLeft = box.offsetLeft;
  var offTop = box.offsetTop;

  var targetX = x - offLeft;
  var targetY = y - offTop;

  targetX -= mask.offsetWidth / 2;
  targetY -= mask.offsetHeight / 2;

  var maxX = small.offsetWidth - mask.offsetWidth;
  var maxY = small.offsetHeight - mask.offsetHeight;

  targetX = targetX < 0 ? 0 : targetX;
  targetX = targetX > maxX ? maxX : targetX;
  targetY = targetY < 0 ? 0 : targetY;
  targetY = targetY > maxY ? maxY : targetY;

  mask.style.left = targetX + 'px';
  mask.style.top = targetY + 'px';

  var imgMaxX = img.offsetWidth - big.offsetWidth;
  var imgMaxY = img.offsetHeight - big.offsetHeight;

  var imgX = targetX / maxX * imgMaxX;
  var imgY = targetY / maxY * imgMaxY;

  img.style.left = -imgX + 'px';
  img.style.top = -imgY + 'px';

}
