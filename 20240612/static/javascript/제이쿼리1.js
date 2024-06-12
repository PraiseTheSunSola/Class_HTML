// window.onload=function(){
//     document.getElementById("box").innerHTML ="오늘 수요일";
// }

// 자바스크립트로 버튼 두 개 제어.
// window.onload=function(){
//     document.getElementById("box").innerHTML = " 태양 만세 ";

//     document.getElementById("Open").addEventListener('click', function(){
//         document.getElementById("box").style.display="block";
//     });

//     document.getElementById("Close").addEventListener('click', function(){
//         document.getElementById("box").style.display="none";
//     });
// }

// 제이쿼리에서 window.onload=function(){ } 만드는 법.
$(function(){
    // $("#box").html("태양만세"); // 태그로 작성한다면 $(div).html("태양만세");
    $("#Open").on('click',function(){
        // $("#box").show(); - 보이기.
        // $("#box").toggle(); - 보이기 감추기를 하나로
        // $("#box").fadeOut(); .fadeIn - 서서히 투명도 다운, 서서히 투명도 업
        // $("#box").fadeToggle(); // opacity를 0~1로 바꿔주면서 block과 none으로 제어해준다.
        // $("#box").slideUp();
        $("#box").slideToggle();
    });
    $("#Close").click(function(){
        // $("#box").hide(2000);
        // $("#box").slideDown(); 
    });
});