var $images = $('img');
var $guage = $('.js-progressGauge');
var imgCount = 0;
var divideScale = 1 / $images.length;
var scale = 0;
var defer = $.Deferred();

function progressGauge() {
  
  for(var i = 0, len = $images.length; i < len; i++) {
    var img = new Image();
    img.onload = function() {
      imgCount += 1;
    }
    img.src = $images[i].src;
  }

  var loading = setInterval(function(){
    scale = imgCount * divideScale;
    $guage.css('transform','scaleX(' + scale + ')');
    if(imgCount == $images.length) {
      clearInterval(loading);
    }
  }, 10);
}

function scalingFigures() {
  setTimeout(function(){
    $('.js-scaleItem, .js-loading').addClass('add-loaded');
  },2000);
}
  

$.when(progressGauge()).done(scalingFigures());



$('.js-menuBtn').on('click', function(){
  $(this).toggleClass('add-open');
  $('.js-menu').toggleClass('add-open');
})

function setPosition(startItemNum,endItemNum) {
  var $itemList = $('.js-kv');
  var itemWidth = $itemList.children().width();
  var sideMargin = ($(window).width() - itemWidth) / 2;
  var position = {
    start: -(itemWidth * startItemNum) + sideMargin,
    end: -(itemWidth * endItemNum) + sideMargin
  };
  return position;
}




// var xAxis = 0;
// setInterval(function(){
//   $('.js-kv').css('transform', 'translateX(' + (xAxis-=100) + 'px)');
// }, 2500);

// var xAxis = 0;
// setInterval(function(){
//   $('.js-kv').animate({
//     left '+=50'
//   },1000);
// }, 200);




// $(window).on('load',function(){
//   $('.js-kv').css('transform','translateX(' + setPosition(2,5).start + 'px)' );
// });


// var requestMeter = function() {

//   for(var i = 0, len = $images.length; i < len; i++){
//     var img = new Image();
//     img.onload = function() {
//       imgCount += 1;
//     }
//     img.src = $images[i].src;
//   }
  
//   var loading = setInterval(function(){
//     scale = imgCount * divideScale;
//     console.log(imgCount);
//     console.log(divideScale);
//     $('.js-progressGauge').css('transform','scaleX(' + scale + ')');
//     if(imgCount == $images.length) {
//       clearInterval(loading);
//       defer.resolve();
//     }
//   }, 10);
  
//   console.log(defer.promise()); 
//   return defer.promise();
// }

// function scalingFigures() {
//   setTimeout(function(){
//     $('.js-scaleItem, .js-loading').addClass('add-loaded');
//   },2000);
// }

// requestMeter().done(scalingFigures);




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
