/*
    이름 입력 버튼과 나이 입력 버튼을 각각 클릭하여 input 나타내어 이름과 나이 입력하세요.
    등록 버튼을 클릭하여 화면에 이름, 나이, 태어난 년도를 출력하세요.
*/

/*
    <button id="nameInput">이름 입력</button> <input type="text" id="name"> <br>
    <button id="ageInput">나이 입력</button> <input type="text" id="age"> <br>
    <button id="enroll">등록</button>
    <hr>
    <div>
        이름 : <b id="nameView"></b> <br>
        나이 : <b id="ageView"></b> <br>
        태어난 년도 : <b id="yearView"></b> <br>
    </div>
*/

$(function(){

        $("#name").hide();
        $("#age").hide();


        $("#nameInput").click(function(){
            $("#name").show();
        });

        $("#ageInput").click(function(){
            $("#age").show();
        });

        $("#enroll").click(print);
});



function print( ) {
    
    var userName = $("#name").val();
    var userAge = parseInt($("#age").val());
    var userYear = 2024-userAge;

    $("#nameView").html(userName);
    $("#ageView").html(userAge);
    $("#yearView").html(userYear);
}