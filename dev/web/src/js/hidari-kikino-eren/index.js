// menu開閉,タブ切り替え,タブクリック時のスクロール
$('.js-menuBtn').on('click', menuOpen);
$('.js-tab').on('click',tabChange);
$('.js-tab').on('click',smoothScroll);
$(window).on('scroll', sticky);

$.wait = function(ms) {
  var d = new $.Deferred;
  setTimeout(function(){
    d.resolve(ms); //done,thenに引数としてmsを渡す
  }, ms);
  return d.promise();
};


var loading = {
  moveInit: function() {
    if($(window).width() < 800) {
      $('.js-charaList').css('transform','translateX(' + setPosition(2) + 'px)' )
    }
  },
  progressGauge: function() {
    var $images = $('img');
    var originImageSrc = [];
    var numberOfImages = $('img').length;
    var divideScale = 1 / numberOfImages;
    var $guage = $('.js-progressGauge');
    var scaleX = 0;
    var center = ($(window).height() - $('.js-loadingWrap').height()) / 2;
    var toCenter =  center - $('.js-loadingWrap').offset().top;
    
    // opening ゲージをセンターへ移動
    $('.js-loadingWrap').css('transform', 'translate(-50%,' + toCenter + 'px)');
    
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
  },
  scalingFigures: function() {
    $.wait(2000)
    .then(function(ms){
      $('.js-scaleItem, .js-loading').addClass('add-loaded');
      return $.wait(1200);
    })
    .done(function(ms){
      $('.js-charaList').addClass('add-onScreen');
    })
  },
  run: function() {
    this.progressGauge(),
    this.moveInit(),
    this.scalingFigures(), // 3200ms + 800ms (amimation)
    $('html,body').animate({ scrollTop: 0 }, '1')//リロード時画面トップへ移動
  }
};


//KVキャラ入れ替え
var loop = {
  termPosition: {
    start: setPosition(2),
    end: setPosition(6)
  },
  steps: {
    step1: setPosition(2),
    step2: setPosition(2) + (setPosition(5) - setPosition(2)) / 3,
    step3: setPosition(2) + ((setPosition(5) - setPosition(2)) / 3) * 2,
    step4: setPosition(5)
  },
  execute: function() {
    var xAxis = this.termPosition.start;
    var endPoint = this.termPosition.end;
    var resetPoint = this.termPosition.start;
    var loopSteps = this.steps;
    var toggle = function() {
      $('.js-charaList').toggleClass('add-closed');
    }
    var changeOrder = function() {
      var characters = $.makeArray($('.js-charaList').children());
      var firstChara = characters.shift();
      $('.js-charaList').append(firstChara);
    }
    setInterval(function(){
      $('.js-charaList').css('transform', 'translateX(' + (xAxis-=1.2) + 'px)');
      var translateX = $('.js-charaList')[0].style.transform.replace(/[^-^0-9^\.]/g,"");
      if(xAxis < endPoint) {
        xAxis = resetPoint;
      }
      if(translateX > loopSteps.step2) {
        if($('.js-charaList').hasClass('add-step1')) {
          return false;
        } else {
          $('.js-charaList').removeClass('add-step4').addClass('add-step1');
          toggle();
          $.wait(800).done(function(){changeOrder();toggle();});
        }
      }
      if(loopSteps.step2 > translateX && translateX > loopSteps.step3) {
        if($('.js-charaList').hasClass('add-step2')) {
          return false;
        } else {
          $('.js-charaList').removeClass('add-step1').addClass('add-step2');
          toggle();
          $.wait(800).done(function(){changeOrder();toggle();});
        }
      }
      if(loopSteps.step3 > translateX && translateX > loopSteps.step4) {
        if($('.js-charaList').hasClass('add-step3')) {
          return false;
        } else {
          $('.js-charaList').removeClass('add-step2').addClass('add-step3');
          toggle();
          $.wait(800).done(function(){changeOrder();toggle();});
        }
      }
      if(loopSteps.step4 > translateX) {
        if($('.js-charaList').hasClass('add-step4')) {
          return false;
        } else {
          $('.js-charaList').removeClass('add-step3').addClass('add-step4');
          toggle();
          $.wait(800).done(function(){changeOrder();toggle();});
        }
      }
    }, 30)
  }
}

loading.run()
$.wait(4000).then(function(){
  loop.execute();
})

console.log(loop.steps.step1,loop.steps.step2,loop.steps.step3,loop.steps.step4);
// var str = 'transformX(-1330px)';
// var str3 = str.replace(/[^-^0-9^\.]/g,"");
// parseFloat(str3);
// console.log(str3);





//中央に設置したキャラまでの距離を算出する関数
function setPosition(itemNum) {
  var $itemList = $('.js-charaList');
  var itemWidth = $itemList.children().width();
  var sideMargin = ($(window).width() - itemWidth) / 2;
  var position = -(itemWidth * itemNum) + sideMargin;
  return position;
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