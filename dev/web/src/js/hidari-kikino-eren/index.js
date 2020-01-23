//オープニングとループ処理
$.when(
  progressGauge(),
  $('html,body').animate({ scrollTop: 0 }, '1'),//リロード時画面トップへ移動
  moveInit(), //KVのスタートポジションをセット
  scalingFigures()
)
.done(
  setTimeout(function(){
    if($(window).width() < 800) {
      kvLoop(2,5);
    }
  }, 4500),
  
  // setTimeout(function(){
  //   foldCharacter();
  //     setInterval(function(){
  //       foldCharacter();
  //     }, 6000);
  // }, 8500)
);

// menu開閉,タブ切り替え,タブクリック時のスクロール
$('.js-menuBtn').on('click', menuOpen);
$('.js-tab').on('click',tabChange);
$('.js-tab').on('click',smoothScroll);
$(window).on('scroll', sticky);

//最初の移動
function moveInit() {
  if($(window).width() < 800) {
    $('.js-charaList').css('transform','translateX(' + setPosition(2).start + 'px)' )
  }
}


//openingのプログレスゲージの表示する関数
function progressGauge() {
  var $images = $('img');
  var originImageSrc = [];
  var numberOfImages = $('img').length;
  var divideScale = 1 / numberOfImages;
  var $guage = $('.js-progressGauge');
  var scaleX = 0;
  
  //全imgのsrcを空にしてoriginImageSrcに退避
  for(var i = 0; i < numberOfImages; i++) {
    originImageSrc.push($images[i].src);
    $images[i].src = '';
  }

  //imgをロードする毎にscaleXの数値を加算
  $images.on('load', function(){
    scaleX += divideScale;
    $guage.css('transform','scaleX(' + scaleX + ')');
  })

  //全imgのsrcを代入
  for(var i = 0; i < numberOfImages; i++) {
    $images[i].src = originImageSrc[i];
  }
}


//プログレスゲージ100%到達後,プログレスゲージを縦に展開する関数
function scalingFigures() {
  setTimeout(function(){
    $('.js-scaleItem, .js-loading').addClass('add-loaded').delay(1200).queue(function() {
      $('.lp-character_inner').addClass('add-loaded').dequeue();
    });
  },2000);
}


//ロード後KVのポジションを決める関数
function setPosition(startItemNum,endItemNum) {
  var $itemList = $('.js-charaList');
  var itemWidth = $itemList.children().width();
  var sideMargin = ($(window).width() - itemWidth) / 2;
  var position = {
    start: -(itemWidth * startItemNum) + sideMargin,
    end: -(itemWidth * endItemNum) + sideMargin
  };
  return position;
}


//KVをループさせる関数
function kvLoop(startItemNum,endItemNum) {
  var position = setPosition(startItemNum,endItemNum)
  var xAxis = position.start;
  
  setInterval(function(){
    $('.js-charaList').css('transform', 'translateX(' + (xAxis-=1.2) + 'px)');
    if(xAxis < position.end) {
      xAxis = position.start;
    }
  }, 30)
}

//キャラクターをfold → unfold 関数
function foldCharacter() {
  var $characters = $('.js-kv');
  $characters.addClass('add-fold').delay(1200).queue(function(){
    $(this).removeClass('add-fold').dequeue();
  })
}

//menu開閉関数
function menuOpen() {
  $(this).toggleClass('add-open');
  $('.js-menu').toggleClass('add-open');
}

//タブ切り替え関数
function tabChange() {
  var index = $('.js-tab').index(this);
  var switchFlag = !($('.js-pages').eq(index).hasClass('add-active'));
  if(switchFlag) {
    $('.js-pages').toggleClass('add-active');
    $('.js-tab').toggleClass('add-active');
  }
  $('.lp-story').hasClass('add-prologue')
  ?$('.lp-story').removeClass('add-prologue').addClass('add-main')
  : $('.lp-story').removeClass('add-main').addClass('add-prologue');
}

//スムーススクロール関数
function smoothScroll() {
  var speed = 400;
  var position = 1328;
  $('body, html').animate({scrollTop:position}, speed, 'swing');
}

//sticky表示・非表示
function sticky() {
  if($(this).scrollTop() > 1327) {
    $('.js-header').addClass('add-hide');
  } else {
    $('.js-header').removeClass('add-hide');
  }
}










// function switchCharacter() {
//   var items = $('.js-charaList > li');
//   // console.log(items.last());
  
  
//   setInterval(function(){
//     var firstItem = ($('.js-charaList > li').first());
//     // console.log(firstItem);
//     $('.lp-character_inner').removeClass('add-loaded').delay(1000).queue(function() {
//       $('.lp-character_inner').addClass('add-loaded').dequeue();
//       $('.js-charaList').append(firstItem).remove(firstItem);
//     });
    
//     // console.log(items);
//   }, 4000);
// }

/// offset 1327px でsticky hide






// switchCharacter();

// console.log(setPosition(2,5).end);


// var xAxis = 0;
// var timer = setInterval(function(){
//   $('.js-charaList').css('transform', 'translateX(' + (xAxis-=1.2) + 'px)');
//   console.log(xAxis);
  
//   if(xAxis <  -1400) {
//     xAxis = -400;
//   }
  
// },30);
// $(window).on('load',function(){

//   var xAxis = 0;
// setInterval(function(){
//   $('.js-charaList').css('transform', 'translateX(' + (xAxis-=100) + 'px)');
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
