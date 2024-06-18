const com = ["scissors.png", "rock.png", "paper.png"];
let record = []; // 전적 저장
let comHd = 0; // 컴퓨터 이미지 보여주기 위한 setInteravl값
let comSelect = 0; // 컴퓨터 가위 바위 보 값

$(function (){ // window.onload - 브라우저 화면표시 완료

    //전적 배열 초기화 세팅
    let storageData = JSON.parse(localStorage.getItem("record")); // 저장한값 불러오기 .getItem
    if(storageData){ // localStorage에 저장된 값이 있냐?
        record= storageData;
        console.log(record);
    } else {
        console.log("storage저장 데이터 없음");
    }

    $("#comImg").attr('src', '../static/image/' +com[0]);
    $("#game").click(startAndStop);
    $("#record").click(gameRecord);
});


function gameRecord(){
    $("#modal").show(); // 모달창 보이기.

    $("#data").empty(); // tbody의 하위태그들 제거.
    for( var i=0; i< record[0].length; i++){
        $("#data").append(`
            <tr>
                <td class= "user"><img src="../static/image/${record[0][i]}"></td>
                <td class= "com"><img src="../static/image/${record[1][i]}"></td>
                <td class= "outcome">${record[2][i]}</td>
            </tr>
            `)
    }
    $("#modalBackground").click(function(){
        $("#modal").hide(); // 모달창 감추기
    });
}




function startAndStop(){
    // $(this) === $("#game")
    if ( $(this).text() === '종료'){ // 가위 바위 보 진행 중
         $(this).text("시작");
         clearInterval( comHd); // 컴퓨터 이미지 변경되는 setInterval 종료
         $(".userImg").off('click'); // 종료시 유저 가위 바위 보 클릭 이벤트
    }
    else{ // 가위 바위 보 시작 전
        $(this).text("종료");
        comStart(); // 컴퓨터 이미지 변경(setInterval)

       $(".userImg").click( userSelect ); // 유저 가위 바위 보 클릭 이벤트
    }
}

function userSelect(){
    // $(this) === $(".userImg")
    //userImg 클래스들을 배열로 가져오고 그 중에서 몇 번째 인덱스 클릭했나?
    var idx = $(".userImg").index($(this)); // 내가 클릭한 가위 바위 보 찾기

    $(this).css('border','5px solid black'); // 내가 클릭한 가위 바위 보 이미지 표시

    
    clearInterval(comHd);  //컴퓨터의 가위 바위 보 이미지 변경 하는거 멈추기(clearInterval)
    

    // alert( "user : " + idx + " com : " +comSelect);
    outcome(idx, comSelect); // 결과 띄우기 (승, 패, 무)

    setTimeout( function(){
        
    
        comStart() //다시 컴퓨터 가위 바위 보 이미지 변경되게 ( setInterval )

        $(".userImg").eq(idx).css('border', ''); // 내가 클릭한 가위 바위 보 이미지 표시 해제
        // $("this"). removeAttr('style');
        $(".result").remove();

    }, 3000 ); // 지정된 시간 이후에 한 번 실행.
}

function outcome( u , c ) { // u는 유저 가위바위보, c는 컴퓨터 가위바위보
    // 0 - 가위, 1 - 바위, 2 - 보
    var result = "승";
    var minus = u - c; // -2, 1 유저 승 0 비김 -1 -2 유저 패

    switch(minus) {
        case  0: result= "무"; break;
        case -1:
        case  2: result = "패"; break; 
    }

    record[0].push(com[u]);// 유저 가위 바위 보 저장
    record[1].push(com[c]); // 컴퓨터 가위 바위 보 저장
    record[2].push( result); // 가위바위보 결과 저장
    console.log(record);

    localSave(); // 컴퓨터에 저장 하기 (브라우저에 저장)

    $("body").append(`<div class= "result"> ${result} </div>`);
}

function comStart(){
    comHd = setInterval( function (){

        if ( comSelect == 2) comSelect = -1;
        $("#comImg").attr('src', '../static/image/' + com[++comSelect] );

   }, 100 ); // 지정된 시간에 한 번씩 실행, 시간단위는 밀리세컨드 1000이 1초.
}

function localSave(){

    // JSON.stringify() JSON 이라는 문자열로 변환 시켜준다.
    // 숫자 -> 문자열 10+""
    let recordJSON = JSON.stringify( record);
    localStorage.setItem("record", recordJSON); // 앞쪽이 이름
    // localStorage.setItem("like", "banana"); // localStorage - 문자열 데이터 저장
}//