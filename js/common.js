$(function(){
  //script 입력영역
  $("nav ul li a,.back_to_top a,.footer_top a,a.button").click(function(e){
    // console.log($(this.hash).offset().top)
    var thisElem = $(this.hash);
    $("html,body").stop();
    $("html,body").animate({scrollTop : thisElem.offset().top},1500);
    //e.preventDefault();
    return false;
  });

  /*scroll 상단 이동버튼 노출*/
  $(window).scroll(function(){
    // console.log($(this).scrollTop());
    if($(this).scrollTop() == 0){
      $(".back_to_top").removeClass("on");
    }else{
      $(".back_to_top").addClass("on");
    }
  });
});
