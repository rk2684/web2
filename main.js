
$(document).ready(function () {
  const $slider = $('.slider');

  // ① スライド数が少ない（4件など）時に、要素を複製してループを強制
  const slidesToShow = 3;
  if ($slider.children().length <= slidesToShow) {
    $slider.children().clone(true, true).appendTo($slider);
  }

  // ② Slick の初期化
  $slider.slick({
    infinite: true,
    autoplay: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,       // 1枚ずつスクロールに変更
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    dots: true,
    variableWidth: false,    // 可変幅を無効にして固定幅にする
    respondTo: 'slider',     // スライダー自体の幅でレスポンシブ判定
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 500,
        settings: "unslick"  // 必要ならスライダー無効化
      }
    ]
  });

  // ③ リサイズ時に再描画（幅を再計算）
  $(window).on('resize orientationchange', function () {
    $slider.slick('setPosition');
  });
});
``


 // スクロールしたら要素が出てくるアニメーション
// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){

  // ふわっ
  $('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
    }else{
    $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
    }
    });
}

// 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function(){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述


  // パスワード
  function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password');
    var checkbox = document.getElementById('show-password');

    if (checkbox.checked) {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  }
  // レスポンシブ

  $(function () {
    $(".slider").slick({
      responsive: [
        {
          breakpoint: 500, // 500px未満で・・・
          settings: "unslick", // スライダーを無効
        },
      ],
    });
  });
  $(window).on("resize orientationchange", function () {
    $(".slider").slick("resize");
  });
