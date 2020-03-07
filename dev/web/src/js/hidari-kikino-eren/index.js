window.addEventListener('beforeunload', function() {
  window.scrollTo(0, 0);
}); 

$.wait = function(ms) {
  var d = new $.Deferred;
  setTimeout(function(){
    d.resolve(ms); //done,thenに引数としてmsを渡す
  }, ms);
  return d.promise();
};


var loading = {
  moveInit() {
    if($(window).width() < 800) {
      $('.js-charaList').css('transform','translateX(' + setPosition(2) + 'px)' )
    }
  },
  progressGauge() {
    var $images = $('img');
    var originImageSrc = [];
    var numberOfImages = $('img').length;
    var divideScale = 1 / numberOfImages;
    var $guage = $('.js-scaleItem');
    var scaleX = 0;
    var center = ($(window).height() - $('.js-loadingWrap').height()) / 2;
    var toCenter =  center - $('.js-loadingWrap').offset().top;
    
    $('.js-loadingWrap').css('transform', 'translate(-50%,' + toCenter + 'px)');
    
    //全imgのsrcを空にしてoriginImageSrcに退避
    for(var i = 0; i < numberOfImages; i++) {
      originImageSrc.push($images[i].src);
      $images[i].src = '';
    }
  
    //imgをロードする毎にscaleXの数値を加算
    $images.on('load', function(){
      scaleX += divideScale;
      $guage.each(function(){
        $(this).css('transform','scaleX(' + scaleX + ')');
      })
    })
  
    //全imgのsrcを代入
    for(var i = 0; i < numberOfImages; i++) {
      $images[i].src = originImageSrc[i];
    }
  },
  scalingFigures() {
    $.wait(2000)
    .then(function(ms){
      $('.js-scaleItem, .js-loading').addClass('is-loaded');
      return $.wait(1200);
    })
    .done(function(ms){
      $('.js-kv').addClass('is-onScreen');
      textFadeIn();
    })
  },
  run() {
    this.progressGauge(),
    this.moveInit(),
    this.scalingFigures() // 3200ms + 800ms(amimation) + 1000ms(textFadeIN) 
  }
};

//KVループ・キャラ入れ替え
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
  execute() {
    var xAxis = this.termPosition.start;
    var endPoint = this.termPosition.end;
    var resetPoint = this.termPosition.start;
    var loopSteps = this.steps;
    var toggle = function() {
      $('.js-kv').toggleClass('is-closed');
    }
    var changeOrder = function() {
      var characters = $.makeArray($('.js-charaList').children());
      var firstChara = characters.shift();
      $('.js-charaList').append(firstChara);
    }
    setInterval(function(){
      $('.js-charaList').css('transform', 'translateX(' + (xAxis-=1.5) + 'px)');
      var translateX = $('.js-charaList')[0].style.transform.replace(/[^-^0-9^\.]/g,"");
      if(xAxis < endPoint) {
        xAxis = resetPoint;
      }
      if(translateX > loopSteps.step2) {
        if($('.js-charaList').hasClass('is-step1')) {
          return false;
        } else {
          $('.js-charaList').removeClass('is-step4').addClass('is-step1');
          toggle();
          $.wait(800).done(function(){changeOrder();toggle();});
        }
      }
      if(loopSteps.step2 > translateX && translateX > loopSteps.step3) {
        if($('.js-charaList').hasClass('is-step2')) {
          return false;
        } else {
          $('.js-charaList').removeClass('is-step1').addClass('is-step2');
          toggle();
          $.wait(800).done(function(){changeOrder();toggle();});
        }
      }
      if(loopSteps.step3 > translateX && translateX > loopSteps.step4) {
        if($('.js-charaList').hasClass('is-step3')) {
          return false;
        } else {
          $('.js-charaList').removeClass('is-step2').addClass('is-step3');
          toggle();
          $.wait(800).done(function(){changeOrder();toggle();});
        }
      }
      if(loopSteps.step4 > translateX) {
        if($('.js-charaList').hasClass('is-step4')) {
          return false;
        } else {
          $('.js-charaList').removeClass('is-step3').addClass('is-step4');
          toggle();
          $.wait(800).done(function(){changeOrder();toggle();});
        }
      }
    }, 30)
  }
}

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
  $(this).toggleClass('is-open');
  $('.js-menu').toggleClass('is-open');
}

//タブ切り替え関数
function tabChange() {
  var index = $('.js-tab').index(this);
  var switchFlag = !($('.js-pages').eq(index).hasClass('is-active'));
  if(switchFlag) {
    $('.js-pages').toggleClass('is-active');
    $('.js-tab').toggleClass('is-active');
  }
  $('.lp-story').hasClass('is-prologue')
  ?$('.lp-story').removeClass('is-prologue').addClass('is-main')
  : $('.lp-story').removeClass('is-main').addClass('is-prologue');
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
    $('.js-header').addClass('is-hide');
  } else {
    $('.js-header').removeClass('is-hide');
  }
}

//テキストフェードイン
function textFadeIn() {
  var targets = document.querySelectorAll('.js-fadeIn'); 
  var observer;
  var options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
  };

  function addWhenIntersect(entries) {
    entries.forEach(function(entry) {
      if(entry.isIntersecting) {
        entry.target.classList.add('is-onScreen');
        observer.unobserve(entry.target); //add後、監視停止
      }
    })
  }

  observer = new IntersectionObserver(addWhenIntersect, options);
  targets.forEach(function(target){
    observer.observe(target);
  })
}


// menu開閉,タブ切り替え,タブクリック時のスクロール
$('.js-menuBtn').on('click', menuOpen);
$('.js-tab').on('click',tabChange);
$('.js-tab').on('click',smoothScroll);
// $('html,body').animate({ scrollTop: 0 }, '0');//リロード時画面トップへ移動
$(window).on('scroll', sticky);

loading.run();
$.wait(5000).then(function(){
  textFadeIn();
  if(window.matchMedia('screen and (max-width: 799px)').matches) {
    loop.execute();
  }
})

$('.js-relation').on('click', function(e) {
  $('.js-modal').css('display', 'block');
})

$(window).on('click', function(e){
  if(e.target === modal) {
    $('.js-modal').css('display', 'none');
  }
})

var mediaQuery = matchMedia('(min-width: 800px)');
function switchNavAnime(mediaQuery) {
  $('.js-menuNav').removeClass('mod-animeV').removeClass('mod-animeH');
  if(mediaQuery.matches) {
    $('.js-menuNav').addClass('mod-animeV');
  } else {
    $('.js-menuNav').addClass('mod-animeH');
  }
}
mediaQuery.addListener(switchNavAnime);
switchNavAnime(mediaQuery);



