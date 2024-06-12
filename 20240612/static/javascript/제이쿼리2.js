/*
1. input 입력하기
2. 엔터 또는 버튼 클릭하기
3. input 값 중에 빈 값 있는지 없는지 
    3-1 빈 값이라면
        - 알림으로 알려주고 빈 값 다시 입력하기 (1번부터 다시)
    3-2 빈 값이 없다면
        - 다음 진행 (4번)
4. 생년월일 8자리 확인
    4.1 8자리라면
        -다음 진행 (5번)
    4.2 8자리 아니라면
        -생년월일 다시입력하기 ( 1번 부터 다시 )
5. 입력 값 출력            
*/







$(function(){
    $("#id").focus(); // 해당 input란에 마우스 커서를 자동으로 두게 함.
    // 입력버튼을 클릭하면 동작할 이벤트 등록하기.
    $("#inputBt").click(join);

    /* 
    keyUp - 키보드 눌렀다가 떼는 경우
    keyDown - 키보드 눌렸을 때 (특수키 = 엔터나 쉬프트 알트)
    keyPress - 키보드 눌렸다  
    */
    $(document).keyup(function( keyValue ){
        // alert(key.keyCode) 엔터키 문자값을 알기 위한 식.
        if(keyValue.keyCode === 13 ){ // 엔터키를 누르면 참 - 엔터키는 13번이니까. 
            join();
        }
        
    });
});


/*input태그에 입력한 값 가져와서 div#chek에 출력하기
입력한 데이터(값)를 자바스크립트에서 사용하려면 변수에 저장하여 사용
입력한 데이터가 아니더라도 데이터가 필요하다면 필요한만큼 변수 선언하여 사용
*/
function join(){
    var userId = $("#id").val(); // .val = value; 아이디 입력값
    var userPw = $("#pw").val(); // 비밀번호 입력값
    var userBirth = $("#birth").val(); // 생년월일 입력값

// is.. 참이냐 거짓이냐 표현할때 사용하는 변수이름
// has.. 값을 가지고있는지 확인하기위한 변수이름

    var isCheck = allInputCheck(userId, userPw, userBirth); //아이디, 비밀번호, 생년월일 전부 입력했는가?
    
    // 생년월일 8자리 입력했는가?
    // isCheck = isCheck ? birthCheck(userBirth) : isCheck;  // 조건 연산자를 이용한 식
    if(isCheck) isCheck = birthCheck(userBirth);

    if(isCheck){
    $("#check").html(`<div>아이디:${userId}</div> <div>비밀번호 :${userPw}</div>
        <div>생년월일 : ${userBirth}</div>`);
    }
}

function allInputCheck(id, pw, birth){ // id= userId, pw= userPw, birth= userBirth
    if( id === ''){ // ''는 공백을 의미.
        alert("아이디 입력하세요");
        $("#id").focus();
        return false; // return은 해당 함수를 종료 시키면서 값을 반환한다.
    } else if(pw === ''){
        alert("비밀번호 입력하세요.");
        $("#pw").focus();
        return false;
    } else if(birth === ''){
        alert("생년월일을 입력하세요.");
        $("#birth").focus();
        return false;
    }
    return true;
}

function birthCheck(birth){ // 입력한 생년월일이 8자리인가? 확인 하기위한 함수
    /* alert(birth.length); 길이 측정 */
    if(birth.length == 8)  
        return true;
        alert("생년월일은 8자리로 입력하세요.");
        $("#birth").val(''); // 인풋태그 내용을 초기화 하는것
        $("#birth").focus();
        return false; // 8자리가 아닌경우 거짓 반환
    

}
/*
자바스크립트와 조금 다른점은 제이쿼리에선
function() 익명함수의 괄호 안에 다른 함수 이름을 적어도
동작이 된다.
*/