// innerHTML은 변수와 비슷하다. 
/*
a=10; a=20; a 변수에 10이 남아있지 않는다.
a = a+ ' ' + 20; 하면 둘 다 나온다.
*/

function print() {
    let div = document.getElementById("result");
    div.innerHTML = makeRandom();
}

function makeRandom(){
    let 내용=''; //문자열을 저장하기 위한 변수를 초기화하는 부분.
    for(let i=0; i<5; i++){ // 5줄 표현하기 위한 반복문
        var line= ' '; //  4개의 숫자들을 담는 용도.
        for(let j=0; j<4; j++){// 한 줄에 4개씩 숫자 표현하기위한 반복문
        let randomNumber = Math.floor(Math.random() * 50) + 1; // 1~50까지 랜덤 숫자 생성.
        line = line + ' ' +randomNumber;
        }
        내용 = 내용 + line + '<br>';
    }
    return 내용;
}

window.onload=function(){} // 버튼을 눌렀을때 화면에 표시되도록 하는거니 이경우엔 사용되지 않는다.

/* let 내용의 역활 
이 부분은 우리가 사용할 공간을 마련하는 것과 비슷해요. 
여기서 '내용'이라는 상자를 만들어요. 
이 상자는 우리가 만들어낸 숫자들을 담는 역할을 할 거예요. 
처음에는 상자 안이 비어있지만, 나중에 숫자들을 넣을 거에요. 
숫자들이 들어가면 그 내용을 한눈에 볼 수 있어요. 
*/