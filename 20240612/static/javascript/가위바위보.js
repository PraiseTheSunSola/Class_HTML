/*과제 - 가위 바위 보 만들기.

가위 바위 보를 하는데 유저가 그만하고 싶을때까지 계속 가위 바위 보 하기.
시작 버튼과 끝내기 버튼.
시작 버튼을 누르면 가위 바위 보 하는 인풋창이 보이고 끝내기를 누르면 사라지기.
반복문은 사용하지 않고 입력은 input 태그를 이용하기.
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



    
    $(document).keyup(function(keyBoard){ 
        
    /* 엔터버튼의 아스키 코드 번호 알아내기. alert(key.keyCode) */

        if(keyBoard.keyCode === 13){

            var userInput = user();
            var comInput = com();
            print(userInput, comInput);
        }
    });
});

function user(){
    var userInput = parseInt($("#play").val());

    if(isNaN(userInput) || (userInput >= 4 || userInput.length >= 1) ) {

        alert("숫자 1, 2, 3 중 하나를 선택하여 입력해주세요.")
        return null;
    }

    return userInput;
    
}

function com(){
    var comInput = Math.floor(Math.random() * 3 ) +1;
    return comInput;
    
}

function print(userInput, comInput){
    var message = "";

    if (userInput === null) {

        $("#play").val(""); 
        return;

    }

    if(userInput > comInput) {
        
        message = `컴퓨터 : ${comInput} 유저 승리! 그러니 태양만세! `;

    } else if (userInput == comInput) {

        message = `컴퓨터 : ${comInput} 서로 비겼으 `;

    } else {

        message = `컴퓨터 : ${comInput} 컴퓨터 승리! 그러니 기계만세! `;
    }

    /* 이런식으로 작성하니  $("#result")의 자세한 정보가 나온다.
    console.log( $("#result")); 
    */

    console.log(message);

    $("#result").html(message);
    
    
}

/* 과제 접근 순서.

1. 시작 버튼과 종료 버튼 그리고 가위 바위 보 게임 화면을 담당할 인풋창 두 개를 만들어준다. 

2. 하나는 유저 입력란 나머지 하나는 결과창으로 시작버튼을 눌렀을때
   인풋창이 나오고 종료 버튼을 눌렀을때 인풋창이 사라지게 하기.

3. id = play 인풋창에 1.가위 2.바위 3.보를 숫자 1~3 중 하나를 입력했을때,
   id = result에 승리 , 비김 , 패배 중 하나를 나오게 만들기.

3-1. user와 com의 값을 출력을 담당할 result에 넣어주기.

3-2. 가정문 작성 하기.

3-2. 1 2 3 중 하나만 입력해야하고 문자나 다른 숫자를 입력했을때 결과 나오지 않게 하기.

4. 잘 출력되는지 확인하기.
*/


/* 힘들었던점.

문제점1.  => 출력이 나오질 않는다.

function user에 var userInput값과 function com에 var comInput값을 
function print에 매개변수를 통해 전달해주었고 이를 토대로 가정문을 만들어 
$("#result").html(message); 으로 출력하려고 했는데 출력이 되질 않는다. 
특이한건 가정문에서 유저가 이기거나 컴퓨터가 이긴다고 가정했을땐,
#result에 출력이 되지 않는데 ==로 변경하면 
message = `컴퓨터 : ${comInput} 유저 승리! `;가 출력된다. 


해결책.  => $(document).keyup(function(keyBoard){})에 var userInput = user(); , var comInput = com(); 두 개를 선언하고 
           function print를 나타내는 print()의 매개변수에 userInput, comInput를 넣어준다.

매개변수를 이용하여 function user와 function com의 현재 반환중인 값을 function print에 넣어주고자 
function print의 매개변수 안에 userInput, comInput를 넣었지만, $(function(){}) 안에 위치한
$(document).keyup(function(keyBoard){})에 function print가 받아올 변수 선언과 
print의 매개변수 안에 넣어주지 않았기 때문에 function print가 값을 전달받지 못하고 있었다.

문제점2. => 1 2 3 외에 문자를를 입력해도 결과가 나온다.

문자를 입력해도 결괏값이 나오는 것을 방지 하기 위해선 숫자가 아니라는걸 알려줘야 하는데 
어떻게 해야하는지 모르겠다.

해결책. => 구글링과 GPT 사용

찾아보니 isNaN 이라고 'is Not a Number'의 약자로, 주어진 값이 NaN(Not-a-Number)인지 검사하는 함수를 알게 되었다.
그리고 적용해보니 문제는 해결 되었다. '문자가 아니거나 userInput의 값이 4이거나 4보다 크면 안되니 크거나 같다라는 
'>=' 혹은 '<=' 를 사용하였고, 출력을 담당하는 function print에도 해당 내용을 입력하니 그제서야 제대로 작동하였다.

문제점3. 1 2 3 중 하나와 문자 아무거나 같이 입력하면 결괏값이 나온다.

진행중. => .length를 이용한다.

.length를 이용하여 이를 방지하려고 하는데 잘 되질 않는다.
*/

