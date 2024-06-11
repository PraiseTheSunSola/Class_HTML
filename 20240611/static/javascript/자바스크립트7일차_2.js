// javascript_7일차

// 브라우저에 모두 표시되면 발생하는 이벤트 onload
window.onload = function() {

    document.querySelector("#calc").addEventListener('click', function(){
        print()
        a = Number(document.getElementById("kor").value);
        b = Number(document.getElementById("mat").value);
        c = Number(document.getElementById("eng").value);
        d = Number(document.getElementById("his").value);
        toTalCalc(a, b, c, d);
    });


}



function toTalCalc(a, b, c, d){ //총점 계산만 하는 함수

    let total = (a+b+c+d);
    avgCalc(total);
    // return total;

}

function avgCalc(total) { //평균 계산만 하는 함수

    avg = (total/4);
    print(total, avg)
    // return avg;
}

function print(total, avg) { // 총점과 평균을 화면에 출력하는 함수

    document.querySelector("#total").innerHTML = `총점 : ${total}`;
    document.querySelector("#avg").innerHTML = `평균 : ${avg}`;
}