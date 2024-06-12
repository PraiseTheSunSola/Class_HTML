/**
 * 지정된 개수(count)의 고유한 랜덤 숫자를 생성하는 함수
 * {number} count - 생성할 랜덤 숫자의 개수
 * {number} min - 랜덤 숫자의 최소값
 * {number} max - 랜덤 숫자의 최대값
 * {number[]} - 고유한 랜덤 숫자로 이루어진 배열
 */
function generateRandomNumbers(count, min, max) {
    const numbers = []; // 생성된 숫자를 저장할 배열
    while (numbers.length < count) { // 배열의 길이가 count보다 작을 동안 반복
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min; // min과 max 사이의 랜덤 숫자 생성
        if (!numbers.includes(randomNum)) { // 배열에 랜덤 숫자가 포함되지 않은 경우
            numbers.push(randomNum); // 배열에 랜덤 숫자 추가
        }
    }
    return numbers; // 고유한 랜덤 숫자로 이루어진 배열 반환
}

/**
 * 랜덤 숫자를 화면에 표시하는 함수
 */
function displayRandomNumbers() {
    const numbers = generateRandomNumbers(20, 1, 50); // 1부터 50 사이의 고유한 랜덤 숫자 20개 생성
    const numbersContainer = document.getElementById('numbers'); // 숫자들을 담을 컨테이너 가져오기
    numbersContainer.innerHTML = ''; // 이전 내용 제거

    for (let i = 0; i < numbers.length; i++) { // 생성된 숫자 배열을 순회하면서
        const numberBox = document.createElement('div'); // 새로운 div 요소 생성
        numberBox.className = 'number-box'; // 클래스 이름 설정
        numberBox.textContent = numbers[i]; // div 요소에 랜덤 숫자 설정
        numbersContainer.appendChild(numberBox); // 컨테이너에 div 요소 추가
    }
}

// 잘 모르는 부분 혹은 이해가 잘 되지 않은 부분

/*
        numbersContainer.innerHTML = ''; // 이전 내용 제거

        numberBox.className = 'number-box'; // 클래스 이름 설정
        numberBox.textContent = numbers[i]; // div 요소에 랜덤 숫자 설정
        numbersContainer.appendChild(numberBox); // 컨테이너에 div 요소 추가

        .push

        .includes

*/

