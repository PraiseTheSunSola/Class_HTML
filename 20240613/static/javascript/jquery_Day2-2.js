/*
    변수 - 데이터를 저장하기 위한 메모리 공간 (단일 데이터)
    배열 - 데이터를 저장하기 위한 연속적인 메모리 공간 (다수 데이터)

    10명의 학생을 키 순으로 나열한다.

    let std1 = 157, std2 = 172, std3 = 185, std4 = 192, std5 = 184, std6 = 172.....
    let tall = [157,198,185,172,165,15,192,189,173,169];

    자바스크립트 배열 생성 방법
    let num = []; 배열이름 = []; 대괄호 => 작은괄호 다음으로 순위가 높은 괄호.
    자바스크립트에서 []는 배열을 의미

    let std = ["이순신", "강감찬", "김유신"];

    let money = new Array(); => money를 배열로 쓰겠다.

*/
// let tall = [157,198,185,172,165,15,192,189,173,169];

// document.write(tall); // tall 이라는 배열 전체를 출력.

// document.write(tall[2]); 

// tall 이라는 배열에 세 번째인 198만 출력. 0부터 시작하니까!

/* 배열 구조
let tall = [157,198,185,172,165,15,192,189,173,169];
            0,   1   2   3   4   5  6   7   8   9
tall이라는 공간에 메모리 주소가 있고 그 안에 저 숫자들이 들어가게 되는것 
index = 157,198,185,172,165,15,192,189,173,169
고로 157,198,185,172,165,15,192,189,173,169 != tall 이다.
tall이라는 메모리 공간에 각기다른 주소들에 숫자들이 저장되는 것이고 198의 경우 공간만큼 이동하니 세 번째이다.
*/

/* 반복문 작성
for( var i=0; i < 10; i++) {
    document.write(tall[i] + "<br>");
}
*/

/*
let nameArray = [];
nameArray.push("리슌신"); //.push  배열에 데이터 추가 / 제이쿼리에서도 동일.
nameArray.push("김유신");
nameArray.push("최영");
nameArray.push("이성계");
// document.write(name[2]);

nameArray.sort(); //  .sort() 오름 차순
nameArray.reverse(); // .reverse() 내림 차순
document.write(nameArray);
document.write("<br>" + nameArray.length); // .length 배열의 길이 확인
nameArray.pop(); // 배열의 마지막 데이터 제거

document.write("<br>" + nameArray);

document.write("<br>" + (nameArray.indexOf("세키로"))); 
// ↑↑↑↑↑↑배열에서 입력한 데이터가 몇 번째인지 확인할때, 없다면 브라우저에 -1 출력 됨↑↑↑↑↑

document.write("<br>" + nameArray.splice(1,1));
// ↑↑↑ 인덱스를 통해 배열을 잘라내는 방법 ↑↑↑

document.write("<br>" + nameArray);

document.write("<br>" + nameArray.slice(1));

*/

/*
let score = [95,89, 74];
var sum = 0;
for( var i=1; i< score.length; i++){ // 반복문에서도 score.length;를 넣는게 확실하다.
    sum = sum + score[i];
}
document.write("총 합 : " + sum); // 
*/

window.onload = function (){
    let box1 = document.getElementsByClassName("box1");
    console.log(typeof box1)
    console.log(box1);

    box1[0].innerHTML= "첫 번째 div";
    box1[1].innerHTML= "두 번째 div";

    let box2 = document.querySelectorAll(".box2");
    box2[0].innerHTML = "세 번째 div";

    let box = document.getElementsByClassName("box");

    for( var i=0; i< box.length; i++){
        box[i].innerHTML = Math.floor(Math.random() * 10 );
    }


    /* 배열의 속성
    배열은 연속적으로 데이터를 저장할 수 있다.
    배열의 인덱스는 0부터 시작한다.
    10개의 데이터가 저장되어 있다면, 배열의 마지막 인덱스는 9이다. 
    다수의 값을 사용하고자 할 때는 배열을  사용해야 한다. (가장 다루기 쉬운 구조이기 때문에)
    */

    let num = [10, 20, 30, 40, 50];
    // num 배열에 추가로 60, 70, 80, 90, 100을 저장하고 
    // 배열의 값을 차례대로 출력하세요.

    num.push(60);
    num.push(70);
    num.push(80);
    num.push(90);
    num.push(100);
    console.log(num);

    // for( let i= 60; i<=100; i=i+10) num.push(i); // 반복문으로 한번에 넣을수 있다.

    for( let i=0; i < num.length; i++) {
        document.write(num[i]+ "<br>");
    }


    let newNum1 = [1,2,3,4,5];
    let newNum2 = [6,7,8,9,10];

    let small = newNum1.length;
    if( small > newNum2.length) small = newNum2.length;
    // 문제 두 배열의 각 자리숫자의 합을 구한다. 예) 45 + 23

    for(let i=0; i< small; i++){
        document.write(" <br> " + (newNum1[i] + newNum2[i]));
    }
} // END

/* 반복문으로 배열을 돌리려고 하는데 배열에 몇 개가 들어있는지 모른다고 한다면
   비교적 적은 녀석으로 돌려야 한다. 왜? => 그래야 오류가 덜 난다.
*/