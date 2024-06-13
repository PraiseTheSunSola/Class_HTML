$(function(){

    $("#enroll").click(function(){

        var userWork = inputWork();
        var userTime = inputTime();
        var userState = inputState();
        print(userWork, userTime, userState);
    });
}); // END


function inputWork () {
    var userWork = $("#work").val();
    return userWork;
}

function inputTime () {
    var userTime = $("#time").val();
    return userTime;
}

function inputState () {
    var userState = $("#state").val();
    return userState;
}

function print (userWork, userTime, userState) {

    $(".todo").append('<li>'+userWork + '</li>');
    $(".todoTime").append('<li>'+userTime + '</li>');
    $(".todoState").append('<li>'+userState + '</li>');
}