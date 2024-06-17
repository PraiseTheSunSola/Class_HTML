const board = [ // 14행 21열
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];

$(function(){

    let out = "<table>";

    for( var i=0; i<board.length; i++){
        out+="<tr>";
        
        for(var k=0; k < board[i].length; k++){
            var tdClass= "wall";
            if( board[i][k] == 0 ) tdClass= "blank";
            if( board[i][k] == 2) {
                tdClass = "me";
                y = i;
                x = k;
            }
            out+=`<td class="${tdClass}">`;

            out+="</td>";
        }

        out+="</tr>";
    }

    out += "</table>";
    $("#wrap").html(out);
});

$(document).keyup(function(event){
    // w-87 a-65  s-83 d-68

    var key = event.keyCode;
    // alert(typeof key); // case에 '87'로 할지 87로 할지 궁금하다면 데이터 타입을 알아보자.
    switch(key){ // 범위 안에서 콕 집어서 정해져 있는 경우엔 switch문이 적절하다.

        case 87:  
        if (board[y-1][x] !== 1){
            board[y][x] = 0;
            $("td").eq(y*21+x).removeClass("me");
            $("td").eq(y*21+x).addClass("blank");  // 현재 위치에 클래스명 blank로 변경 
            y--;
            board[y][x] = 2;
            $("td").eq(y*21+x).removeClass("blank");
            $("td").eq(y*21+x).addClass("me"); // 이동할 위치에 클래스명 me로 변경
        }
            break;
        case 65:
        if (board [y][x-1] !==1){
            board[y][x] = 0;
            $("td").eq(y*21+x).removeClass("me");
            $("td").eq(y*21+x).addClass("blank");  // 현재 위치에 클래스명 blank로 변경 
            x--;
            board[y][x] = 2;
            $("td").eq(y*21+x).removeClass("blank");
            $("td").eq(y*21+x).addClass("me"); // 이동할 위치에 클래스명 me로 변경
        }
            break;
        case 83:
        if (board [y+1][x] !==1){
            board[y][x] = 0;
            $("td").eq(y*21+x).removeClass("me");
            $("td").eq(y*21+x).addClass("blank");  // 현재 위치에 클래스명 blank로 변경 
            y++;
            board[y][x] = 2;
            $("td").eq(y*21+x).removeClass("blank");
            $("td").eq(y*21+x).addClass("me"); // 이동할 위치에 클래스명 me로 변경
        }
            break;
        case 68:
        if (board [y][x+1] !==1){
            board[y][x] = 0;
            $("td").eq(y*21+x).removeClass("me");
            $("td").eq(y*21+x).addClass("blank");  // 현재 위치에 클래스명 blank로 변경 
            x++;
            board[y][x] = 2;
            $("td").eq(y*21+x).removeClass("blank");
            $("td").eq(y*21+x).addClass("me"); // 이동할 위치에 클래스명 me로 변경
        }
            break;
    } 
});

/* 과제 
wasd 네 방향 다 이동하게 하고 벽을 넘지 않게 만들기.
다 했다면 코드 최대한 줄여보기.
*/