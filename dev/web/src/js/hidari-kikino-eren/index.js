
function progressGauge() {
  var $images = $('img');
  var $guage = $('.js-progressGauge');
  var imgCount = 0;
  var divideScale = 1 / $images.length;
  var scale = 0;
  
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
    $('.js-scaleItem, .js-loading').addClass('add-loaded').delay(1400).queue(function() {
      $('.lp-character_inner').addClass('add-loaded').dequeue();
    });
  },2000);
}


$.when(
  progressGauge(),
  $('.js-kv').css('transform','translateX(' + setPosition(2).start + 'px)' ),
  console.log(setPosition(2).start),
  scalingFigures()
)
.done(
  setTimeout(function(){
    kvLoop(2,5)
  }, 4500)
);



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

function kvLoop(startItemNum,endItemNum) {
  var position = setPosition(startItemNum,endItemNum)
  var xAxis = position.start;
  
  setInterval(function(){
    $('.js-kv').css('transform', 'translateX(' + (xAxis-=1.2) + 'px)');
    if(xAxis < position.end) {
      xAxis = position.start;
    }
  }, 30)
}

function switchCharacter() {
  var items = $('.js-kv > li');
  // console.log(items.last());
  
  
  setInterval(function(){
    var firstItem = ($('.js-kv > li').first());
    // console.log(firstItem);
    $('.lp-character_inner').removeClass('add-loaded').delay(1000).queue(function() {
      $('.lp-character_inner').addClass('add-loaded').dequeue();
      $('.js-kv').append(firstItem).remove(firstItem);
    });
    
    // console.log(items);
  }, 4000);
}


$('.js-tab').on('click', function() {
  var index = $('.js-tab').index(this);
  var switchFlag = !($('.js-pages').eq(index).hasClass('add-active'));
  if(switchFlag) {
    $('.js-pages').toggleClass('add-active');
    $('.js-tab').toggleClass('add-active');
  }
  $('.lp-story').hasClass('add-prologue')?$('.lp-story').removeClass('add-prologue').addClass('add-main') : $('.lp-story').removeClass('add-main').addClass('add-prologue');
})






// switchCharacter();

// console.log(setPosition(2,5).end);


// var xAxis = 0;
// var timer = setInterval(function(){
//   $('.js-kv').css('transform', 'translateX(' + (xAxis-=1.2) + 'px)');
//   console.log(xAxis);
  
//   if(xAxis <  -1400) {
//     xAxis = -400;
//   }
  
// },30);
// $(window).on('load',function(){

//   var xAxis = 0;
// setInterval(function(){
//   $('.js-kv').css('transform', 'translateX(' + (xAxis-=100) + 'px)');
// }, 2500);
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
