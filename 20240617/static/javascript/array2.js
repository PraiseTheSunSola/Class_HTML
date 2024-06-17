/* 각반 학생 성적들 저장하여 평균을 낸다.
let stdScore =[50, 77, 88, 99, 34];
let stdScore2 = [....];
let stdScore3 = [....];
배열에 배열을 넣는다. - 2차원 배열.
*/
let stdScore = [
    [50, 77, 88, 99, 34],
    [78, 67, 56, 45, 32],
    [98, 87, 76, 65, 54]
];

console.log( stdScore[1][2]); 
console.log( stdScore[1]); 
/*  [1][2]에서 [1]은 [78, 67, 56, 45, 32]을 가리키고,
[2]는 두 번째 배열 [78, 67, 56, 45, 32] 중 56을 가리킨다.
*/

for(var i = 0; i< 3; i++){
    for(var k=0; k<5; k++){
        document.write(stdScore[i][k]+"&nbsp");
    }
    document.write("<br>");
}

/*
주차장 1 ~ 4층 건물이다. 
각층별 주차 차량수와 잔여 주차구역을 표시 하고자 한다면 2차원배열을 사용한다.
.fill은 배열 안에 인덱스들 값을 전부 바꿔준다. 
*/
let pk = [ new Array(15).fill(0), new Array(15).fill(0),
            new Array(15).fill(0), new Array(20).fill(0) ];

for ( var i=0; i<4; i++){
    for( var k=0; k< pk[i].length; k++){
        document.write( pk[i][k]+"&nbsp");
    }
    document.write("<br>");
}

/* 문제 
다음 2차원 배열의 각 행의 총합을 구하여 출력하세요.
각 행은 num[0], num[1], num[2] 입니다.
let num = [ [10,20,30,40], [1,4,5], [23,45,56,3,9,5] ];
*/
let num = [ [10,20,30,40], [1,4,5], [23,45,56,3,9,5] ];

var numTotal = [0,0,0];
for( var i=0; i < num.length; i++){

    for( var k=0; k< num[i].length; k++){
        numTotal[i] += num[i][k];
    }
}
for(var i=0; i<numTotal.length; i++){
    document.write(numTotal[i]+ "<br>");
}
