console.log('test');


// $('.js-test').addClass('add-load');


var progress = 0;
var imgCount = $('img').length;
$("img").each(function(){
  var src = $(this).attr('src');
  $("<img>").attr('src',src).on('load',function(){
    progress++;
    console.log(progress);
    
  });
});
// setInterval(function(){
//   console.log(progress);
  
// }, 1);
// $(window).on('load' , function(){
//   $('.mod-item1').addClass('add-load');
// })
