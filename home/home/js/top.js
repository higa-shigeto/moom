//アコーディオンをクリックした時の動作
$('.acd__title').on('click', function() {//タイトル要素をクリックしたら
  var findElm = $(this).next(".acd__contents, .acd__title.close::after, .acd__title.close::before");//直後のアコーディオンを行うエリアを取得し
  $(findElm).slideToggle();//アコーディオンの上下動作
  if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
    $(this).removeClass('close');//クラス名を除去し
    }else{//それ以外は
        $(this).addClass('close');//クラス名closeを付与
    }
});

//ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
$(window).on('load', function(){
  $('.accordion-area li:first-of-type section').addClass("open"); //accordion-areaのはじめのliにあるsectionにopenクラスを追加
  $(".open").each(function(index, element){ //openクラスを取得
    var Title =$(element).children('.title'); //openクラスの子要素のtitleクラスを取得
    $(Title).addClass('close');       //タイトルにクラス名closeを付与し
    var Box =$(element).children('.box'); //openクラスの子要素boxクラスを取得
    $(Box).slideDown(500);          //アコーディオンを開く
  });
});

var _window = $(window),
    _header = $('.sp__nav__list'),
    heroBottom;
 
_window.on('scroll',function(){     
    heroBottom = $('.nav__area').height();
    if(_window.scrollTop() > heroBottom){
        _header.addClass('fixed');   
    }
    else{
        _header.removeClass('fixed');   
    }
});
 
_window.trigger('scroll');