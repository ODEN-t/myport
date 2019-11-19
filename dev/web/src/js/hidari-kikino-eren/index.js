var $images = $('img');
var $guage = $('.js-progressGauge');
var imgCount = 0;
var divideScale = 1 / $images.length;
var scale = 0;


for(var i = 0, len = $images.length; i < len; i++){
  var img = new Image();
  img.onload = function() {
    imgCount += 1;
  }
  img.src = $images[i].src;
}


var loading = setInterval(function(){
  scale = imgCount * divideScale;
  console.log(imgCount);
  console.log(divideScale);

  $('.js-progressGauge').css('transform','scaleX(' + scale + ')');
  if(imgCount == $images.length) {
    clearInterval(loading);
  }
}, 10);  

// $('.js-test').addClass('add-load');


// var progress = 0;
// var imgCount = $('img').length;
// $("img").each(function(){
//   var src = $(this).attr('src');
//   $("<img>").attr('src',src).on('load',function(){
//     progress++;
//     console.log(progress);
    
//   });
// });
// setInterval(function(){
//   console.log(progress);
  
// }, 1);
// $(window).on('load' , function(){
//   $('.mod-item1').addClass('add-load');
// })
