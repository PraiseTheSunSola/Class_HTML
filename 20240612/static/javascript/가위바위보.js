/*과제 - 가위 바위 보 만들기.

가위 바위 보를 하는데 유저가 그만하고 싶을때까지 계속 가위 바위 보 하기.
시작 버튼과 끝내기 버튼.
시작 버튼을 누르면 가위 바위 보 하는 인풋창이 보이고 끝내기를 누르면 사라지기.
반복문은 사용하지 않고 입출력은 input 태그를 이용하기.
함수는 반드시 3개 이상 사용하기!
*/

$(function(){

    $("#play").hide();
    $("#result").hide();

    $("#start").click(function(){
        $("#play").fadeIn(1000);
        $("#result").fadeIn(2000);
    });

    $("#end").click(function(){
        $("#play").fadeOut(2000);
        $("#result").fadeOut(1000);
    });

    // var userInput = parseInt($("#play").val());
    // var comInput = Math.floor(Math.random() * 3 ) +1;

    $(document).keyup(function(keyBoard){
        // alert(key.keyCode) 
        if(keyBoard.keyCode === 13){
            print();
        }
    });
});

function user(userInput){
    var userInput = parseInt($("#play").val());
    return userInput;
    
}

function com(comInput){
    var comInput = Math.floor(Math.random() * 3 ) +1;    
    return comInput;
    
}

function print(userInput, comInput){
    var message = "";
    if(userInput > comInput) {
        
        message = `컴퓨터 : ${comInput} 유저 승리! `;
    }
    console.log( $("#result")); // 각종 정보가 나온다. 
    $("#result").html(message);
}

/* 과제 접근 순서.

1.시작 버튼과 종료 버튼 그리고 가위 바위 보 게임 화면을 담당할 인풋창 두 개를 만들어준다. 

2.하나는 유저 입력란 나머지 하나는 결과창으로 시작버튼을 눌렀을때
  인풋창이 나오고 종료 버튼을 눌렀을때 인풋창이 사라지게 하기.

3.id = play 인풋창에 1.가위 2.바위 3.보를 숫자 1~3 중 하나를 입력했을때,
  id = result 인풋창에 승리 , 비김 , 패배 중 하나를 나오게 만들기.
*/


/* 문제점.

function user에 var userInput값과 function com에 var comInput값을 
function print에 매개변수를 통해 전달해주었고 이를 토대로 가정문을 만들어 
$("#result").html(message); 으로 출력하려고 했는데 출력이 되질 않는다. 
특이한건 가정문에서 유저가 이기거나 컴퓨터가 이긴다고 가정했을땐,
#result에 출력이 되지 않는데 ==로 변경하면 
message = `컴퓨터 : ${comInput} 유저 승리! `;가 출력된다. 
이유를 모르겠다. 

*/