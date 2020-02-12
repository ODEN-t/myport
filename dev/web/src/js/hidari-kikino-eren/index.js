// menu開閉,タブ切り替え,タブクリック時のスクロール
$('.js-menuBtn').on('click', menuOpen);
$('.js-tab').on('click',tabChange);
$('.js-tab').on('click',smoothScroll);
$(window).on('scroll', sticky);

$.wait = function(ms) {
  var d = new $.Deferred;
  setTimeout(function(){
    d.resolve;
    console.log(d);
  }, ms);
  
  return d;
};


$.wait(5000).done(function(){console.log(0)}).always(function(){console.log(1);
})



var loading = {
  setPosition: function(startItemNum,endItemNum) {
    var $itemList = $('.js-charaList');
    var itemWidth = $itemList.children().width();
    var sideMargin = ($(window).width() - itemWidth) / 2;
    var position = {
      start: -(itemWidth * startItemNum) + sideMargin,
      end: -(itemWidth * endItemNum) + sideMargin
    };
    return position;
  },
  moveInit: function() {
    if($(window).width() < 800) {
      $('.js-charaList').css('transform','translateX(' + this.setPosition(2).start + 'px)' )
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
        console.log(ms + 'ミリ秒経過');
        return $.wait(1200);
      })
      .done(function(ms){
        console.log(ms + 'ミリ秒経過');
        $('.js-charaList').addClass('add-onScreen');
      })
    // setTimeout(function(){
    //   $('.js-scaleItem, .js-loading').addClass('add-loaded').delay(1200).queue(function() {
    //     $('.js-charaList').addClass('add-onScreen').dequeue();
    //   });
    // },2000);
  },
  run: function() {
    this.progressGauge(),
    this.moveInit(), //KVのスタートポジションをセット
    this.scalingFigures(),
    $('html,body').animate({ scrollTop: 0 }, '1')//リロード時画面トップへ移動
  }
};

// loading.run();


//KVキャラ入れ替え
var loop = {
  toggle: function() {
    $('.js-charaList').toggleClass('add-closed');
  },
  changeOrder: function() {
    var characters = $.makeArray($('.js-charaList').children());
    var firstChara = characters.shift();
    $('.js-charaList').append(firstChara);
  }
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