/* notice */

/* 키보드 함수 차이
        키보드 누르면 눌렀다 신호만 전달
        키보드를 떼야 키 값 전달
        계속 키보드 키를 눌러도 키가 입력이 되는 것은
        눌렀다 신호가 여러 번 전달되면 입력 처리로 변경.
*/

$(function(){

    $("#detail").keyup(function(){
        // 5자 이상 입력해야 버튼 활성화.
        if( $("#detail").val().length >= 5 ){
            $("#save").removeAttr('disabled');
        }else {
            $("#save").attr('disabled','disabled');
        }
    });
    $("#save").click(function(){
        let text = $("#detail").val();
        addList(text);

        //input 태그에 아무것도 입력하지 않았다면??
        /*
        if(text === '') {  // input 태그가 비어있다는 뜻

            alert("내용을 입력하세요.");
            $("#detail").focus();
            return // 함수 강제 종료

            }
        */
    });
}); // END

function addList ( text ){
    $("#list").append('<li>' + text + '</li>');
}