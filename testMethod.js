// 위 버튼의 참조값을 변수에 할당한다.
let clickButton = document.querySelector('#clickButton');

let rtrnValue = document.getElementsByClassName('returnValue');
for(let i = 0; i < rtrnValue.length; i++) {
    rtrnValue[i].innerHTML = 'undefined';
    rtrnValue[i].style.color = 'blue';
}


// 변수에 할당된 버튼을 클릭했을 때 호출되는 함수를 정의한다.
clickButton.onclick = function() {
    let argBox = document.getElementsByClassName('argumentsBox');
    let rtrnBox = document.getElementsByClassName('returnBox');
    let trueFalse = document.getElementsByClassName('trueFalse');
    
    for(let i = 0; i < argBox.length; i++) {
        let argsArr = argBox[i].value.split(',');
        // argsArr[j]의 value가 숫자로만 돼 있을 때 숫자로 변환한다.
        for(let j = 0; j < argsArr.length; j++) {
            if(Number(argsArr[j])) {
                argsArr[j] = Number(argsArr[j]);
                
            } 
        }
        let rtrnBoxVar = rtrnBox[i].value;
        // rtrnBox[i]의 value가 숫자로만 돼 있을 때 숫자로 변환한다.
        if(Number(rtrnBoxVar)) {
            rtrnBoxVar = Number(rtrnBoxVar);
        }

        // 함수에서 리턴한 값을 보여준다.
        if(argBox[i].value === '') {
            rtrnValue[i].innerHTML = 'undefined';
            rtrnValue[i].style.color = 'blue';
        } else {
            rtrnValue[i].innerHTML = func.apply(null, argsArr);
            rtrnValue[i].style.color = 'black';
        }

        // 합격과 불합격을 판단해서 보여준다.
        
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
}


