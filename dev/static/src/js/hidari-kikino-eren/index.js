/********************* / 
      JavaScript
**********************/
(function() {
  const mediaQuery = window.matchMedia('(min-width: 800px)');
  const wait = (ms) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, ms)
    })
  } 

  setPosition = itemNum => {
    const itemList = document.querySelector('.js-charaList');
    let itemWidth = itemList.children[0].clientWidth;
    let sideMargin = (window.innerWidth - itemWidth) / 2;
    let position = -(itemWidth * itemNum) + sideMargin;
    return position;
  }

  //テキストフェードイン
  const textFadeIn = () => {
    const targets = document.querySelectorAll('.js-fadeIn'); 
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2 //要素の見えている割合が２０％越えるとコールバック
    };

    const addWhenIntersect = (entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          entry.target.classList.add('is-onScreen');
          observer.unobserve(entry.target); //add後、監視停止
        }
      })
    }

    const observer = new IntersectionObserver(addWhenIntersect, options);
    targets.forEach((target) => {
      observer.observe(target);
    })
  }

  //KVループ・キャラ入れ替え
  const loop = {
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
      let xAxis = this.termPosition.start;
      const endPoint = this.termPosition.end;
      const resetPoint = this.termPosition.start;
      const loopSteps = this.steps;
      const charcterList = document.querySelector('.js-charaList');
      const toggle = () => {
        const kv = document.querySelector('.js-kv');
        kv.classList.toggle('is-closed');
      }
      const changeOrder = () => {
        let firstCharcter = Array.from(charcterList.children).shift();
        charcterList.appendChild(firstCharcter);
      }
      
      if(!mediaQuery.matches) {
        setInterval(() => {
          charcterList.style.transform = `translateX(${xAxis-=1.5}px)`;
          let translateX = charcterList.style.transform.replace(/[^-^0-9^\.]/g,""); //返り値から数字のみ抽出
          if(xAxis < endPoint) xAxis = resetPoint;
          if(translateX > loopSteps.step2) {
            if(!charcterList.classList.contains('is-step1')) {
              charcterList.classList.remove('is-step4');
              charcterList.classList.add('is-step1')
              toggle();
              wait(800).finally(function(){changeOrder();toggle();});
            }
          }
          if(loopSteps.step2 > translateX && translateX > loopSteps.step3) {
            if(!charcterList.classList.contains('is-step2')) {
              charcterList.classList.remove('is-step1');
              charcterList.classList.add('is-step2');
              toggle();
              wait(800).finally(function(){changeOrder();toggle();});
            }
          }
          if(loopSteps.step3 > translateX && translateX > loopSteps.step4) {
            if(!charcterList.classList.contains('is-step3')) {
              charcterList.classList.remove('is-step2');
              charcterList.classList.add('is-step3');
              toggle();
              wait(800).finally(function(){changeOrder();toggle();});
            }
          }
          if(loopSteps.step4 > translateX) {
            if(!charcterList.classList.contains('is-step4')) {
              charcterList.classList.remove('is-step3')
              charcterList.classList.add('is-step4');
              toggle();
              wait(800).finally(function(){changeOrder();toggle();});
            }
          }
        }, 30)
      }
    }
  }

  // ロード & ループスタート
  const animationSequence = {
    setInitPosition() {
      if($(window).width() < 800) document.querySelector('.js-charaList').style.transform = `translateX(${setPosition(2)}px)`;
    },
    loading() {
      const images = document.querySelectorAll('img');
      const loadingWrap = document.querySelector('.js-loadingWrap');
      let toCenter = ((window.innerHeight - document.querySelector('.js-loadingWrap').clientHeight) / 2) - $('.js-loadingWrap').offset().top;
      let originImageSrc = [];
      let scaleX = 0;
      const guages = document.querySelectorAll('.js-scaleItem');
      const loading = document.querySelector('.js-loading');
      const kv = document.querySelector('.js-kv');

      loadingWrap.style.transform = `translate(-50%, ${toCenter}px)`;

      //全imgのsrcを空にしてoriginImageSrcに退避
      for(var i = 0; i < images.length; i++) {
        originImageSrc.push(images[i].src);
        images[i].src = '';
      }
    
      //imgをロードする毎にscaleXの数値を加算
      images.forEach((img) => {
        img.addEventListener('load', () => {
          scaleX += 1 / images.length; 
          guages.forEach((guage) => {
            guage.style.transform = `scaleX(${scaleX})`;
          })
          if(scaleX >= 1) {
            wait(1000)
            .then(() => {
              guages.forEach((guage) => {
                guage.classList.add('is-loaded');
              })
              loading.classList.add('is-loaded');
              return wait(1200);
            })
            .then(() =>{
              kv.classList.add('is-onScreen');
              textFadeIn();
              return wait(2000);
            })
            .finally(() =>{
              loop.execute(mediaQuery);
            })
          }
        }, {once: true});
      }) 

      //全imgのsrcを代入
      for(var i = 0; i < images.length; i++) {
        images[i].src = originImageSrc[i];
      }
    },
    startLoop() {
      this.setInitPosition();
      this.loading();
    }
  };

  // スティッキー と タブ切り替え
  const stickyAndTabs = () => {
    const header = document.querySelector('.js-header');
    const tabs = document.querySelectorAll('.js-tab');
    const pages = document.querySelectorAll('.js-pages');
    const contentsWrapClassList = document.querySelector('.p-story').classList;
    let calcPosition = () => {
      let storyOffsetTop = document.querySelector('.js-story').offsetTop;
      let headerHeight = document.querySelector('.js-header').clientHeight;
      return (storyOffsetTop - headerHeight) * 0.935;
    }

    for(let i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener('click', function(e) {
        if(!this.classList.contains('is-active')) {
          pages.forEach((page) => {page.classList.toggle('is-active');})
          tabs.forEach((tab) => {tab.classList.toggle('is-active');})
          window.scroll({
            top: calcPosition(),
            behavior: "smooth"
          });
        }
        contentsWrapClassList.contains('is-prologue') 
        ? contentsWrapClassList.replace('is-prologue', 'is-main')
        : contentsWrapClassList.replace('is-main', 'is-prologue')
      })
    }

    window.addEventListener('resize', () => {
      calcPosition();
    })

    window.addEventListener('scroll', () => {
      window.scrollY > calcPosition() ? header.classList.add('is-hide') : header.classList.remove('is-hide');
    })
  }

  // モーダル開閉,スクロール禁止・解除
  const modalAction = {
    targets: {
      modal: document.querySelector('.js-modal'),
      modalBackground: document.querySelector('.js-modalBg'),
      clickTarget: document.querySelector('.js-relation')
    },
    lock(e) {
      e.preventDefault();
    },
    scrollOff() {
      document.addEventListener('mousewheel', this.lock, { passive: false });
      document.addEventListener('touchmove', this.lock, { passive: false });
    },
    scrollOn() {
      document.removeEventListener('mousewheel', this.lock, { passive: false });
      document.removeEventListener('touchmove',this.lock, { passive: false });
    },
    open() { // クリック時 this は .js-relation
      modalAction.targets.modal.classList.add('is-opened');
      modalAction.targets.modalBackground.classList.add('is-opened');
      modalAction.scrollOff();
    },
    close(e) {
      const target = e.target.getAttribute('data-modal');
      if(target === 'modalClose') {
        this.targets.modal.classList.remove('is-opened');
        this.targets.modalBackground.classList.remove('is-opened');
        this.scrollOn();
      } 
    },
    modalControl() {
      if(mediaQuery.matches) { // this は MediaQueryList
        modalAction.targets.clickTarget.addEventListener('click', modalAction.open);
        window.addEventListener('click', (e) => {modalAction.close(e)});
      }
      else {
        modalAction.targets.modal.classList.remove('is-opened');
        modalAction.targets.modalBackground.classList.remove('is-opened');
        modalAction.targets.clickTarget.removeEventListener('click', modalAction.open);
        window.removeEventListener('click', (e) => {modalAction.close(e)});
        modalAction.scrollOn();
      }
    },
    execute() {
      mediaQuery.addListener(this.modalControl);
      this.modalControl(mediaQuery);
    }
  }

  // min-width:800px → menu縦アニメーション else → menu横アニメーション
  const btnAnimeContorl = (mediaQuery) => {
    const menuNavs = document.querySelectorAll('.js-menuNav');
    mediaQuery.matches
    ? menuNavs.forEach((menuNav) => { menuNav.classList.replace('c-squareButton--animeH', 'c-squareButton--animeV'); })
    : menuNavs.forEach((menuNav) => { menuNav.classList.replace('c-squareButton--animeV', 'c-squareButton--animeH'); })
  }

  /** 
  * イベント登録・関数実行
  */
  window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0);
  }); 

  // mobile menu
  document.querySelector('.js-menuBtn').addEventListener('click', function() {
    this.classList.toggle('is-open');
    document.querySelector('.js-menu').classList.toggle('is-open');
  });

  modalAction.execute();
  stickyAndTabs();
  animationSequence.startLoop();
  mediaQuery.addListener(btnAnimeContorl);
  btnAnimeContorl(mediaQuery);
})();


/****************** / 
      jQuery
*******************/

// (function($) {
//   var mediaQuery = window.matchMedia('(min-width: 800px)');

//   /** 
//   * 関数定義
//   */
//   $.wait = function(ms) {
//     var d = new $.Deferred;
//     setTimeout(function(){
//       d.resolve(ms); //done,thenに引数としてmsを渡す
//     }, ms);
//     return d.promise();
//   };

//   //KVループ・キャラ入れ替え
//   var loop = {
//     termPosition: {
//       start: setPosition(2),
//       end: setPosition(6)
//     },
//     steps: {
//       step1: setPosition(2),
//       step2: setPosition(2) + (setPosition(5) - setPosition(2)) / 3,
//       step3: setPosition(2) + ((setPosition(5) - setPosition(2)) / 3) * 2,
//       step4: setPosition(5)
//     },
//     execute() {
//       var xAxis = this.termPosition.start;
//       var endPoint = this.termPosition.end;
//       var resetPoint = this.termPosition.start;
//       var loopSteps = this.steps;
//       var toggle = function() {
//         $('.js-kv').toggleClass('is-closed');
//       }
//       var changeOrder = function() {
//         var characters = $.makeArray($('.js-charaList').children());
//         var firstChara = characters.shift();
//         $('.js-charaList').append(firstChara);
//       }
      
//       if(!(mediaQuery.matches)) {
//         setInterval(function(){
//           $('.js-charaList').css('transform', 'translateX(' + (xAxis-=1.5) + 'px)');
//           var translateX = $('.js-charaList')[0].style.transform.replace(/[^-^0-9^\.]/g,"");
//           if(xAxis < endPoint) {
//             xAxis = resetPoint;
//           }
//           if(translateX > loopSteps.step2) {
//             if($('.js-charaList').hasClass('is-step1')) {
//               return false;
//             } else {
//               $('.js-charaList').removeClass('is-step4').addClass('is-step1');
//               toggle();
//               $.wait(800).done(function(){changeOrder();toggle();});
//             }
//           }
//           if(loopSteps.step2 > translateX && translateX > loopSteps.step3) {
//             if($('.js-charaList').hasClass('is-step2')) {
//               return false;
//             } else {
//               $('.js-charaList').removeClass('is-step1').addClass('is-step2');
//               toggle();
//               $.wait(800).done(function(){changeOrder();toggle();});
//             }
//           }
//           if(loopSteps.step3 > translateX && translateX > loopSteps.step4) {
//             if($('.js-charaList').hasClass('is-step3')) {
//               return false;
//             } else {
//               $('.js-charaList').removeClass('is-step2').addClass('is-step3');
//               toggle();
//               $.wait(800).done(function(){changeOrder();toggle();});
//             }
//           }
//           if(loopSteps.step4 > translateX) {
//             if($('.js-charaList').hasClass('is-step4')) {
//               return false;
//             } else {
//               $('.js-charaList').removeClass('is-step3').addClass('is-step4');
//               toggle();
//               $.wait(800).done(function(){changeOrder();toggle();});
//             }
//           }
//         }, 30)
//       }
//     }
//   }


//   // ロード & ループスタート
//   var animationSequence = {
//     setInitPosition() {
//       if($(window).width() < 800) {
//         $('.js-charaList').css('transform','translateX(' + setPosition(2) + 'px)' )
//       }
//     },
//     loading() {
//       var $images = $('img');
//       var originImageSrc = [];
//       var numberOfImages = $('img').length;
//       var divideScale = 1 / numberOfImages;
//       var $guage = $('.js-scaleItem');
//       var scaleX = 0;
//       var center = ($(window).height() - $('.js-loadingWrap').height()) / 2;
//       var toCenter =  center - $('.js-loadingWrap').offset().top;
      
//       $('.js-loadingWrap').css('transform', 'translate(-50%,' + toCenter + 'px)');

//       //全imgのsrcを空にしてoriginImageSrcに退避
//       for(var i = 0; i < numberOfImages; i++) {
//         originImageSrc.push($images[i].src);
//         $images[i].src = '';
//       }
    
//       //imgをロードする毎にscaleXの数値を加算
//       $images.one('load', function(){
//         scaleX += divideScale;
//         $guage.each(function(){
//           $(this).css('transform','scaleX(' + scaleX + ')');
//         })

//         if(scaleX >= 1) {
//           $.wait(1000)
//           .then(function(){
//             $('.js-scaleItem, .js-loading').addClass('is-loaded');
//             return $.wait(1200);
//           })
//           .then(function(ms){
//             $('.js-kv').addClass('is-onScreen');
//             textFadeIn();
//             return $.wait(2000);
//           })
//           .done(function(ms){
//             loop.execute(mediaQuery);
//           })
//         }
//       })

//       //全imgのsrcを代入
//       for(var i = 0; i < numberOfImages; i++) {
//         $images[i].src = originImageSrc[i];
//       }
//     },
//     startLoop() {
//       this.setInitPosition();
//       this.loading();
//     }
//   };



//   //中央に設置したキャラまでの距離を算出する関数
//   function setPosition(itemNum) {
//     var $itemList = $('.js-charaList');
//     var itemWidth = $itemList.children().width();
//     var sideMargin = ($(window).width() - itemWidth) / 2;
//     var position = -(itemWidth * itemNum) + sideMargin;
//     return position;
//   }

//   //menu開閉関数
//   function menuOpen() {
//     $(this).toggleClass('is-open');
//     $('.js-menu').toggleClass('is-open');
//   }

//   //タブ切り替え関数
//   function tabChange() {
//     var index = $('.js-tab').index(this);
//     var switchFlag = !($('.js-pages').eq(index).hasClass('is-active'));
//     if(switchFlag) {
//       $('.js-pages').toggleClass('is-active');
//       $('.js-tab').toggleClass('is-active');
//     }
//     $('.p-story').hasClass('is-prologue')
//     ?$('.p-story').removeClass('is-prologue').addClass('is-main')
//     : $('.p-story').removeClass('is-main').addClass('is-prologue');
//   }

//   //スムーススクロール関数
//   function smoothScroll() {
//     var speed = 400;
//     var position = 1328;
//     $('body, html').animate({scrollTop:position}, speed, 'swing');
//   }

//   //sticky表示・非表示
//   function sticky() {
//     if($(this).scrollTop() > 1327) {
//       $('.js-header').addClass('is-hide');
//     } else {
//       $('.js-header').removeClass('is-hide');
//     }
//   }

//   //テキストフェードイン
//   function textFadeIn() {
//     var targets = document.querySelectorAll('.js-fadeIn'); 
//     var observer;
//     var options = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.2
//     };

//     function addWhenIntersect(entries) {
//       entries.forEach(function(entry) {
//         if(entry.isIntersecting) {
//           entry.target.classList.add('is-onScreen');
//           observer.unobserve(entry.target); //add後、監視停止
//         }
//       })
//     }

//     observer = new IntersectionObserver(addWhenIntersect, options);
//     targets.forEach(function(target){
//       observer.observe(target);
//     })
//   }

//   // モーダル開閉,スクロール禁止・解除
//   var modalAction = {
//     lock(e) {
//       e.preventDefault();
//     },
//     scrollOff() {
//       document.addEventListener('mousewheel', this.lock, { passive: false });
//       document.addEventListener('touchmove', this.lock, { passive: false });
//     },
//     scrollOn() {
//       document.removeEventListener('mousewheel', this.lock, { passive: false });
//       document.removeEventListener('touchmove',this.lock, { passive: false });
//     },
//     open() {
//       $('.js-modal, .js-modalBg').addClass('is-opened');
//       this.scrollOff();
//     },
//     close(e) {
//       var target = e.target.getAttribute('data-modal');
//       if(target === 'modalClose') {
//         $('.js-modal, .js-modalBg').removeClass('is-opened');
//         this.scrollOn();
//       } 
//     }
//   }

//   // min-width:800px → モーダルあり else → モーダルなし
//   function modalControl(mediaQuery) {
//     if(mediaQuery.matches) {
//       $('.js-relation').on('click', function() {modalAction.open();})
//       $(window).on('click', function(e) {modalAction.close(e);})
//     } else {
//       $('.js-modal, .js-modalBg').removeClass('is-opened');
//       $('.js-relation').off('click');
//       $(window).off('click');
//       modalAction.scrollOn();
//     }
//   }

//   // min-width:800px → menu縦アニメーション else → menu横アニメーション
//   function btnAnimeContorl(mediaQuery) {
//     $('.js-menuNav').removeClass('c-squareButton--animeV').removeClass('c-squareButton--animeH');
//     mediaQuery.matches ? $('.js-menuNav').addClass('c-squareButton--animeV') : $('.js-menuNav').addClass('c-squareButton--animeH');
//   }

//   /** 
//   * イベント登録・関数実行
//   */
//   window.addEventListener('beforeunload', function() {
//     window.scrollTo(0, 0);
//   }); 
//   // menu開閉,タブ切り替え,タブクリック時のスクロール
//   $('.js-menuBtn').on('click', menuOpen);
//   $('.js-tab').on('click',tabChange);
//   $('.js-tab').on('click',smoothScroll);
//   $(window).on('scroll', sticky);

//   animationSequence.startLoop();

//   mediaQuery.addListener(modalControl);
//   modalControl(mediaQuery);
//   mediaQuery.addListener(btnAnimeContorl);
//   btnAnimeContorl(mediaQuery);
// })(jQuery);