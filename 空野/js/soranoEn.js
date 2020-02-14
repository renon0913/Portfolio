//load

$(function() {
  var h = $(window).height();

    $('#MainContents').css('display','none');

    $('.FrontImg').delay(900).fadeOut(600);     

    $('.FrontLogo').delay(900).fadeOut(960);

    $('#MainContents').css('display', 'block');

});


//fadeout

$(window).on('load', function(){
  $('body').removeClass('fadeout');
});


//change
 
$(function() {
  $('a:not([href^="#"]):not([target])').on('click', function(e){
    e.preventDefault();
    url = $(this).attr('href');
    if (url !== '') {
      $('body').addClass('fadeout');
      setTimeout(function(){
        window.location = url;
      }, 600);
    }
    return false;
  });
});

function showimg1(){
  document.imgLink1.src = "../img/ebisu.jpg";
  document.imgLink2.src = "../img/ebisu.jpg";
  document.getElementById("infor").innerHTML = "<p>〒150-0013</p><p>東京渋谷区恵比寿4-7-2<br>シーズエビス1F</p><p>電話番号　　03-5798-7331</p><p>席　　　　　62席</p><p>営業時間　17:00~23:30(月~土)</p><p>　　　　　17:00~23:00(日,祝)</p><p>個室　　　　　無</p><p>貸切　　　　　無</p><p>喫煙　　　　　可</p><p>駐車　　　　　無</p><p>カード　　　　可</p><p>オープン日　　2002年10月</p>";
}

function showimg2(){
  document.imgLink1.src = "../img/shibuya.jpg";
  document.imgLink2.src = "../img/shibuya.jpg";
  document.getElementById("infor").innerHTML = "<p>〒150-0031</p><p>東京渋谷区桜丘町4-17<br>チェリーガーデン1F</p><p>電話番号　　03-5728-5191</p><p>席　　　　　95席</p><p>営業時間　17:00~23:30(月~土)</p><p>　　　　　17:00~23:00(日,祝)</p><p>個室　　　　　有</p><p>貸切　　　　　無</p><p>喫煙　　　　　可</p><p>駐車　　　　　無</p><p>カード　　　　可</p><p>オープン日　　2002年10月</p>";
}

function showimg3(){
  document.imgLink1.src = "../img/minamihunaba.jpg";
  document.imgLink2.src = "../img/minamihunaba.jpg";
  document.getElementById("infor").innerHTML = "<p>〒541-0058</p><p>大阪中央区南久宝寺町4-5-6<br>ヴェルテックス本町ビルB1</p><p>電話番号　　06-6120-0644</p><p>席　　　　　80席</p><p>営業時間　17:00~23:00(月~土)</p><p>　　　　　17:00~22:30(日,祝)</p><p>個室　　　　　有</p><p>貸切　　　　　無</p><p>喫煙　　　　　可</p><p>駐車　　　　　無</p><p>カード　　　　可</p><p>オープン日　　2002年3月</p>";
}

function map1(){
  document.getElementById("map").src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3242.217279938799!2d139.713542!3d35.647018!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b153a24d81f%3A0x3c3019925c57eb54!2z6LGG6IWQ5paZ55CGIOepuumHjiDmgbXmr5Tlr7_lupc!5e0!3m2!1sja!2sjp!4v1527481673881";

  document.getElementById("infor").innerHTML = "<p>東口から出る</p><p>南に進む</p><p>左折して都道305号に向かう</p><p>右折して都道305号に入る</p><p>恵比寿駅東口(交差点)を右折する</p>";
  }


function map2(){
document.getElementById("map").src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3241.8542673842503!2d139.704359!3d35.655962!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b5bb2beb491%3A0x3ca9e75cd11c88e!2z6LGG6IWQ5paZ55CGIOepuumHjiDmuIvosLflupc!5e0!3m2!1sja!2sjp!4v1527481967185";

document.getElementById("infor").innerHTML = "<p>C2から出る</p><p>北西に進む</p><p>左折する</p>";
}

function map3(){
  document.getElementById("map").src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3280.9742641161965!2d135.49946!3d34.680599!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6e6232aca3a1fdb!2z6LGG6IWQ5paZ55CGIOepuumHjiDljZfoiLnloLTlupc!5e0!3m2!1sja!2sjp!4v1527482237753";

  document.getElementById("infor").innerHTML = "<p>5から出る</p><p>西方向に進む</p><p>左折する</p>";
  }