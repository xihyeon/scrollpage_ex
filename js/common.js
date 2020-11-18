$(function(){
  //script 입력영역
    var thisElem
  $("nav ul li a,.footer_top a,a.button").click(function(){
    // console.log($(this.hash).offset().top)
    thisElem = $(this.hash);
    //body영역과 스크롤 영역의 조절;
    $("html,body").stop();
    $("html,body").animate({scrollTop : thisElem.offset().top},1500);//속성 초단위 esing값
  });
  return false;

});
