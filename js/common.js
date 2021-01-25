$(function() {
/******************************************************************************
  member
  *******************************************************************************/
  var rule = {
    birthplace: [],
    bunri: "",
    programing: ""
  }

  $('.tags > li').on('click',function(){
    if($(this).is('.is-selected')) {
      $(this).removeClass('is-selected');
    } else if($(this).is('.birthplace')) {
      $(this).addClass('is-selected');
      rule.birthplace.push($(this).attr('id'));
    } else if($(this).is('.bunri')) {
      $('.bunri').removeClass('is-selected');
      $(this).addClass('is-selected')
      rule.bunri = $(this).attr('id');
    } else {
      $('.programing').removeClass('is-selected');
      $(this).addClass('is-selected')
      rule.programing = $(this).attr('id');
    }
  });

  // 条件クリア
  $('.clear').on('click',function(){
    $('li.is-selected').removeClass('is-selected');
  });

  // 選択状態
  $('.sort').on('click',function(){
    // let activeTags = $(".tag.is-active"); // 選択状態のtagのクラスを全て取得し、変数activeTagsに配列で定義
    // モーダルを閉じる
    $("#modal-main,#modal-bg").fadeOut("slow", function(){
      $('#modal-bg').remove();
    });

    // 該当メンバー表示
    $('.filter-result > a').each(function(index, el){
      if(rule.birthplace.some(value => $(el).hasClass(value)) && $(el).hasClass(rule.bunri) && $(el).hasClass(rule.programing)) {
        $(el).show();
      } else {
        $(el).hide();
      }
    });
  });

/******************************************************************************
  common
*******************************************************************************/

  let tabs = $(".tab"); // tabのクラスを全て取得し、変数tabsに配列で定義
  $(".tab").on("click", function() { // tabをクリックしたらイベント発火
    $(".is-active").removeClass("is-active"); // activeクラスを消す
    $(this).addClass("is-active"); // クリックした箇所にactiveクラスを追加
    const index = tabs.index(this); // クリックした箇所がタブの何番目か判定し、定数indexとして定義
    $(".tab-content").removeClass("is-show").eq(index).addClass("is-show"); // showクラスを消して、contentクラスのindex番目にshowクラスを追加
  });


  $(window).on('scroll', function() {
    //スクロール位置を取得
    if ( $(this).scrollTop() < 50 ) {
      $('.arrow-up').removeClass('active');
    } else {
      $('.arrow-up').addClass('active');
    }
  });

  //ページ内リンクスムーススクロール
  $('a[href^="#"]').on('click', function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop: position}, 400, "swing");
    return false;
  });

  //テキストリンクをクリックしたら
  $("#modal-open").click(function() {
    //body内の最後に<div id="modal-bg"></div>を挿入
    $("body").append('<div id="modal-bg"></div>');

    //画面中央を計算する関数を実行
    modalResize();

    //モーダルウィンドウを表示
    $("#modal-bg,#modal-main").fadeIn("slow");

    //閉じるボタンか画面のどこかをクリックしたらモーダルを閉じる
    $("#modal-bg,#modal-close").click(function(){  
      $("#modal-main,#modal-bg").fadeOut("slow", function(){
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

  $('.slider').slick({
    centerMode: true,
    centerPadding: '25%',
    focusOnSelect:true,
  });

  // $('.slick01').slick({
  //   centerMode: true,
  //   centerPadding: '25%',
  //   slidesToShow: 3,
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         arrows: false,
  //         centerMode: true,
  //         centerPadding: '40px',
  //         slidesToShow: 3
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         arrows: false,
  //         centerMode: true,
  //         centerPadding: '40px',
  //         slidesToShow: 1
  //       }
  //     }
  //   ]
  // });

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

  // window.addEventListener('load', function() {
  //   const array = $("body")[0].children;
  //   $.each(array,function(index,element){
  //     // debugger
  //     if (element.className !== "main") {
  //       element.classList.add("d-none")
  //     }
  //   });
  // });

  // window.addEventListener('scroll', function() {
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
});
