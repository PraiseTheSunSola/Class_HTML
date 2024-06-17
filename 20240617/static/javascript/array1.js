const arrayName=["김유신","이순신","장보고","임꺽정","홍길동","최영","최무선","정약용"]; 


$(function(){
    // jquery에서 여러개의 태그를 선택한 경우 인덱스 표현은 .eq(index) .eq(1) 
    let item = $(".item"); // document.getElementsByClassName("item");
    console.log(item.length);
    for( let i=0; i<item.length; i++){
        // name 배열의 값을 li태그에 출력한다. 무작위로 
        var idx = Math.floor(Math.random()*arrayName.length); // +1은 하지 않는다. 0부터 시작이니

        item.eq(i).text(arrayName[idx]); 
        /* jquery식으로 가져왔으니 배열도 jquery로. 자바스크립트식 표현은 item[i];
        다만 arrayName은 순수 자바스크립트로 만들어진 배열이니 []를 사용한다.
        */

    }
});

/*문자열은 배열이다. 
문자열은 문자가 2개 이상 연속적으로 표현 된 것을 의미한다.
"abcd" 문자 4개, "a" => ram에는 |a| | 라는 공간을 가지게 된다. a 뒤에 빈 공간은 null이다. 
null은 문자열을 표현하기위한 값. 다만 length를 구할 땐 null은 데이터가 아니기 때문에 제외한다.
*/

/* var와 let의 차이
var는 재선언 가능 
함수 {}에 사용가능 영역, 제어문 {}에서 벗어난다.
함수 안에서 var 배열을 사용하면 배열의 주소가 첫 번째 문자열의 주소로
지정되는 경우가 발생한다.
문자열을 외부로부터 받아오는 경우 주로 발생.
*/

//  2차원 배열
let num = new Array(26); // 26개의 빈 공간 생성
let word = "i like tomato";

for(var i=0; i<num.length; i++)
    num[i] =0; // num 배열 0으로 초기화

console.log("a".charCodeAt(0)); // 아스키 코드표 


// i like tomato에서 각 알파벳이 있는가?  
for( var i=0; i<word.length; i++){
    if( word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122)
    num[ word.charCodeAt(i)-97]++;
    // console.log(word.charCodeAt(i) );
}
console.log(num);

/* 배열에 인덱스를 표현할  수 있다면 뭐든 가져다 쓰라는 내용. 
a = [10, 9, 1, 3]
b = [ a, bcd]
b[a[1]] = 9 처럼 다른식으로 표현할 수 있다.
*/


// 그 예시.
let score = [70,30,40,80,0,10,50,90,60,100];
let stdName = ["이순신", "강감찬", "장보고","최무선","문익점","장영실","정도전",
    "이성계","이방원","계백"];

// let rank = [10, 8, 4, 1, 9, 7, 3, 2, 6, 5];

let temp = [];
for(var i=0; i<score.length; i++){
    temp.push(score[i]); // score 배열의 값 temp에 저장하기.
}
// temp.sort(); // 오름차순으로 정렬됨.
// temp.reverse(); // 내림차순으로 정렬.
temp.sort( (a,b) => b-a); // 버블 정렬 방식 (인접한것 끼리만 양수일 경우에만 자리 바꿈)

let rank= [];
for( var i=0; i<=score.length; i++){
    rank.push( score.indexOf(temp[i]));
}
console.log( rank ); 
console.log("1등 :" + stdName[rank[0]]);
