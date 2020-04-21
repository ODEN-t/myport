//オープニングアニメーション
$(window).on('load', function(){
  $('.js-hero_text').addClass('add-load');
  $('.js-header-logo').addClass('add-load');
  $('.js-hero_text h2, .js-hero_text h3').addClass('add-load');
})


//absoluteで失った高さを確保する関数
$(window).on('load resize',function(){
  if(window.matchMedia('screen and (min-width: 1025px)').matches) {
    getHeight('.js-offset-pc');
  }  else {
    getHeight('.js-offset-mobile');
  }
});

function getHeight(parentClass){ //ページTOPと引数のクラスの距離(parent) - ページTOPと任意のクラス(child)の距離で算出
  $(parentClass).each(function(){
    var offsetTopParent = $(this).offset().top;
    var offsetTopChild = $(this).find(parentClass + '-child').offset().top;
    var height = $(this).find(parentClass + '-child').height();
    var totalHeight = offsetTopChild - offsetTopParent + height;
    $(this).height(totalHeight);
  })
}


//KVのheightをCSS変数に設定
(function(){
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + 'px');
}());


//スムーススクロール
(function(){
  var href,target,position;
  $('a[href^="#"]').on('click', function(){
    href = $(this).attr("href");
    target = $(href == "#" || href === "" ? "html" : href);
    position = target.offset().top;
    $("html,body").animate({ scrollTop: position }, 1000);
    return false;
  })
}());


//モーダル
(function() {
  var currentScroll,imgPath,elem;

  $('.js-modal-open').on('click', function(){
    currentScroll = $(window).scrollTop();
    imgPath = $(this).attr('href');
    elem = document.createElement('img');
    elem.setAttribute('src',imgPath);
    $('.image-holder').append(elem);
    $('.js-modal-bg').css({height: $(document).height()}).fadeIn(200); //bgをページ全体の高さで設定
    $('.js-modal').css({ //表示位置をスクロール 位置に,高さをページの高さで設定
      top: currentScroll,
      height: $(window).height()
    }).fadeIn(200);
    $('.js-modal img').css({maxHeight: $(window).height()});
    return false;
  })

  $('.js-modal, .js-modal-bg').on('click', function(){
    $('.js-modal, .js-modal-bg').fadeOut(200);
    $('.js-modal img').remove();
    window.scrollTo(0 ,currentScroll); //モーダル非表示後,元の位置まで戻る
  })
}());


//tab・nav切り替え 
(function() {
  var blockNum;
  $('.js-tab').on('click',function(){
    blockNum = $(this).index() + 1;
    $(this).parent().siblings('div').children('div:nth-child('+ blockNum + ')').addClass('add-active').siblings().removeClass('add-active');
    if($(this).hasClass('js-nav is-black')){ //背景黒(is-black)かつnavの場合の処理
      $('.js-nav').removeClass('add-current-nav');
      $(this).addClass('add-current-nav-w').siblings().removeClass('add-current-nav-w');
    } else if($(this).hasClass('js-nav')) { //背景白かつnavの場合の処理
      $('.js-nav').removeClass('add-current-nav-w');
      $(this).addClass('add-current-nav').siblings().removeClass('add-current-nav');
    } else { //tabの処理
      $(this).addClass('add-current-tab').siblings().removeClass('add-current-tab');
    }
  })
}());


//スクロール フェードインアニメーション
var points = [];
var items = [];
var timer = false;
var height = 0;

$(window).on({
  'load': function(){
    getPoints();
    items = $('.js-fadein');
    height = $(window).height();
  },
  'resize': function(){ //resize時,座標・height変更
    points = [];
    height = 0;
    if(timer !== false) {
      clearTimeout(timer);
    }
    timer = setTimeout(function(){ //timer予約・削除で制御
      getPoints();
      height = $(window).height();
    },300);
  },
  'scroll': function(e){
    for(var i = 0, len = items.length; i < len; i++) {
      if($(window).scrollTop() > points[i] - height + 200) {
        $(items[i]).addClass('add-in');
      }
      if($(items[len-1]).hasClass('add-in')) { 
        $(this).off(e); //全てaddClassを終えたらfunction解除
      }
    }    
  }
})

function getPoints() { //座標を配列で取得
  $('.js-fadein').each(function(){
    var fadeInPoint = $(this).offset().top;
    points.push(fadeInPoint);
  })
}


//背景チェンジ
var changePoint1,changePoint2;
var flag = true;

$(window).on('load resize',function(){
  changePoint1 = $('.js-changeStart').offset().top - $(window).height() * 0.7;
  changePoint2 = $('.js-changeEnd').offset().top - $(window).height() * 0.7;
})

$(window).on('scroll',function(){
  
  if($(window).scrollTop() > changePoint1 && $(window).scrollTop() < changePoint2 && flag) {
    flag = false;
    setTimeout(function(){
      changeBg();
      flag = true;
      return flag;
    }, 100);
  } else if(flag){
    flag = false;
    setTimeout(function(){
      returnBg();
      flag = true;
      return flag;
    }, 100);
  }
})

function changeBg() {
  $('body').addClass('add-bg-b'); //背景色
  $('.common-mark').addClass('add-border-w'); //ロゴ ボーダー色
  $('.js-nav').addClass('is-black'); //navに付与 nav切り替えで使用
  $('.js-contest-name').addClass('add-border-w'); //コンテスト名の擬似要素::beforeの背景色
  $('.add-current-nav').addClass('add-current-nav-w').removeClass('add-current-nav'); //navの擬似要素::beforeの背景色
}

function returnBg() {
  $('body').removeClass('add-bg-b');
  $('.common-mark, .nav-btn').removeClass('add-border-w');
  $('.js-nav').removeClass('is-black');
  $('.js-contest-name').removeClass('add-border-w');
  $('.add-current-nav-w').removeClass('add-current-nav-w').addClass('add-current-nav');
}