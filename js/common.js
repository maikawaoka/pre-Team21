$(function() {
  // window.addEventListener('load', () => {
  //   const array = $("body")[0].children;
  //   $.each(array,function(index,element){
  //     // debugger
  //     if (element.className !== "main") {
  //       element.classList.add("d-none")
  //     }
  //   });
  // });

  // window.addEventListener('scroll', () => {
  //   let elem = document.getElementsByClassName('main');
  //   let scrollY = window.scrollY/10;
  //   elem.style.backgroundSize = 100 + scrollY + '%';
  // });

  // $(window).on('scroll', function() {
  //   // console.log($(this).scrollTop())
  //   //スクロール位置を取得
  //   if ( $(this).scrollTop() > 60 ) {
  //     // debugger
  //     $('.main').fadeOut(1000, function() {
  //       $(this).remove();
  //     });
  //   } else if ($(this).scrollTop() > 10) {
  //     $(".main").css("font-size", `${$(this).scrollTop()/5}vw`)
  //   }
  // });

  let tabs = $(".tab"); // tabのクラスを全て取得し、変数tabsに配列で定義
  $(".tab").on("click", () => { // tabをクリックしたらイベント発火
    $(".is-active").removeClass("is-active"); // activeクラスを消す
    debugger
    $(this).addClass("is-active"); // クリックした箇所にactiveクラスを追加
    const index = tabs.index(this); // クリックした箇所がタブの何番目か判定し、定数indexとして定義
    $(".tab-content").removeClass("is-show").eq(index).addClass("is-show"); // showクラスを消して、contentクラスのindex番目にshowクラスを追加
  });

  //テキストリンクをクリックしたら
  $("#modal-open").click(() =>{
    //body内の最後に<div id="modal-bg"></div>を挿入
    $("body").append('<div id="modal-bg"></div>');

    //画面中央を計算する関数を実行
    modalResize();

    //モーダルウィンドウを表示
    $("#modal-bg,#modal-main").fadeIn("slow");

    //画面のどこかをクリックしたらモーダルを閉じる
    $("#modal-bg,#modal-close").click(() =>{  
      $("#modal-main,#modal-bg").fadeOut("slow", () =>{
      //挿入した<div id="modal-bg"></div>を削除
        $('#modal-bg').remove() ;
      });
    });

    //画面の左上からmodal-mainの横幅・高さを引き、その値を2で割ると画面中央の位置が計算できます
    $(window).resize(modalResize);

    function modalResize(){
      var w = $(window).width();
      var h = $(window).height();

      var cw = $("#modal-main").outerWidth();
      var ch = $("#modal-main").outerHeight();

      //取得した値をcssに追加する
      $("#modal-main").css({
          "left": ((w - cw)/2) + "px",
          "top": ((h - ch)/2) + "px"
      });
    }
  });

  // $(window).on('scroll', function() {
  //   //スクロール位置を取得
  //   if ( $(this).scrollTop() < 50 ) {
  //     $('.arrow-up').removeClass('active');
  //   } else {
  //     $('.arrow-up').addClass('active');
  //   }
  // });

  // //ページ内リンクスムーススクロール
  // $('a[href^="#"]').on('click', function () {
  //   var href = $(this).attr("href");
  //   var target = $(href == "#" || href == "" ? 'html' : href);
  //   var position = target.offset().top;
  //   $("html, body").animate({scrollTop: position}, 550, "swing");
  //   return false;
  // });
});