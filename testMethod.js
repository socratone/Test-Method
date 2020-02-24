// rtrnValue 값을 undefined로 초기화한다.
let rtrnValue = document.getElementsByClassName('returnValue');
for(let i = 0; i < rtrnValue.length; i++) {
    rtrnValue[i].innerHTML = 'undefined';
    rtrnValue[i].style.color = 'blue';
}

//// 변수에 할당된 버튼을 클릭했을 때 호출되는 함수
let clickButton = document.querySelector('#clickButton');
clickButton.onclick = function() {
    let argBox = document.getElementsByClassName('argumentsBox');
    let rtrnBox = document.getElementsByClassName('returnBox');
    let trueFalse = document.getElementsByClassName('trueFalse');
    
    for(let i = 0; i < argBox.length; i++) {
        // argBox에 입력한 값을 배열로 바꾼다.
        let argsArr = argBox[i].value.split(','); 
        
        // argsArr[j]의 value가 숫자로만 돼 있을 때 숫자로 변환한다.
        for(let j = 0; j < argsArr.length; j++) {
            if(Number(argsArr[j])) {
                argsArr[j] = Number(argsArr[j]);
            } 
        }
        
        // rtrnBox[i]의 value가 숫자로만 돼 있을 때 숫자로 변환한다.
        let rtrnBoxVar = rtrnBox[i].value;
        if(Number(rtrnBoxVar)) {
            rtrnBoxVar = Number(rtrnBoxVar);
        }

        // 함수에서 리턴한 값을 보여준다.
        if(argBox[i].value === '') {
            rtrnValue[i].innerHTML = 'undefined';
            rtrnValue[i].style.color = 'blue';
        } else {
            if(typeof func.apply(null, argsArr) === 'string') { // string인 경우
                rtrnValue[i].innerHTML = '\"' + func.apply(null, argsArr) + '\"';
            } else {
                rtrnValue[i].innerHTML = func.apply(null, argsArr);
            }
            
            rtrnValue[i].style.color = 'black';
        }

        //// 합격과 불합격을 판단해서 보여준다.
        
        // 입력하지 않았을 때
        if(argBox[i].value === '' || rtrnBox[i].value === '') {
            trueFalse[i].innerHTML = '';
        // 합격일 때
        } else if(func.apply(null, argsArr) === rtrnBoxVar) {
            trueFalse[i].innerHTML = '';
            trueFalse[i].style.color = 'green';
            trueFalse[i].append('합격');
        // 불합격일 때
        } else {
            trueFalse[i].innerHTML = '';
            trueFalse[i].style.color = 'red';
            trueFalse[i].append('불합격');
        }
    }

    setTrueOrFalse();

}

//// 임시 저장소에 입력하는 메소드

//// 실험값
// locaStorage에 값이 들었다면 parse해서 argumentsBox1에 넣어주고, 없다면 빈 string을 넣어준다.
let argumentsBox1 = localStorage.getItem('#argumentsBox1') ? JSON.parse(localStorage.getItem('#argumentsBox1')) : ''; // [] => '' 바꿈
// argumentsBox1 값을 input text에 넣어준다.
$('#argumentsBox1').attr('value', argumentsBox1);
// 글자를 입력할 때마다 호출하는 메소드
$('#argumentsBox1').keyup(function() {
    let result = $('#argumentsBox1').val();
    localStorage.setItem('#argumentsBox1', JSON.stringify(result)); 
});

//// 리턴값
// locaStorage에 값이 들었다면 parse해서 returnValue1에 넣어주고, 없다면 빈 'undefined'를 넣어준다.
let returnValue1 = localStorage.getItem('#returnValue1') ? JSON.parse(localStorage.getItem('#returnValue1')) : 'undefined'; // [] => '' 바꿈
// undefined가 아니면 검정색으로
if(localStorage.getItem('#returnValue1')) { $('#returnValue1').css('color', 'black'); }
// returnValue1 값을 returnValue1 엘리먼트 안에 넣어준다.
$('#returnValue1').text(returnValue1);
// 테스트 버튼을 누를 때마다 저장
$('#clickButton').click(function() {
    localStorage.setItem('#returnValue1', JSON.stringify($('#returnValue1').text()));
});

//// 예상 리턴값 returnBox1
// locaStorage에 값이 들었다면 parse해서 returnBox1에 넣어주고, 없다면 빈 string을 넣어준다.
let returnBox1 = localStorage.getItem('#returnBox1') ? JSON.parse(localStorage.getItem('#returnBox1')) : ''; // [] => '' 바꿈
// returnBox1 값을 input text에 넣어준다.
$('#returnBox1').attr('value', returnBox1);
// 글자를 입력할 때마다 호출하는 메소드
$('#returnBox1').keyup(function() {
    let result = $('#returnBox1').val();
    localStorage.setItem('#returnBox1', JSON.stringify(result)); 
});

//// 합격 여부
// locaStorage에 값이 들었다면 parse해서 trueFalse1에 넣어주고, 없다면 빈 string을 넣어준다.
let trueFalse1 = localStorage.getItem('#trueFalse1') ? JSON.parse(localStorage.getItem('#trueFalse1')) : ''; 
// trueFalse1 값을 trueFalse1 엘리먼트 안에 넣어준다.
$('#trueFalse1').text(trueFalse1);
// 합격이면 파랑, 불합격이면 빨강
if(trueFalse1 === '합격') {
    $('#trueFalse1').css('color', 'blue');
} else if(trueFalse1 === '불합격') {
    $('#trueFalse1').css('color', 'red');
}
// 테스트 버튼을 누를 때마다 저장, 클릭 버튼을 눌렀을 때 제일 마지막에 호출
function setTrueOrFalse() {
    localStorage.setItem('#trueFalse1', JSON.stringify($('#trueFalse1').text()));
    if($('#trueFalse1').text() === '합격') {
        $('#trueFalse1').css('color', 'blue');
    } else if($('#trueFalse1').text() === '불합격') {
        $('#trueFalse1').css('color', 'red');
    }
}
    
        
