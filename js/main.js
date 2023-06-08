const htmlDom = document.querySelector('html');
const menuBtn = document.querySelector('.header-wrap #nav-wrap .menu-btn');
const menuNavWrap = document.getElementById('nav-wrap');
let winWidth = window.innerWidth;

function menuHandler(e) {
  e.preventDefault();
  let flag = menuNavWrap.className;

  if (flag === 'active') {
    menuNavWrap.classList.remove('active');
    htmlDom.classList.remove('fixed');
  } else {
    menuNavWrap.classList.add('active');
    htmlDom.classList.add('fixed');
  }
}
menuBtn.addEventListener('click', menuHandler);

window.addEventListener('resize', () => {
  // window Width
  winWidth = window.innerWidth;

  if (winWidth > 767) {
    menuNavWrap.classList.remove('active');
    htmlDom.classList.remove('fixed');
  }

});

/*
** Weather API TEST Area
** 
** numbOfRows => 한 페이지 결과 수
** dataType => 응답자료형식(JSON or XML | Default가 XML)
** base_date => 발표 일자(필수)
** base_time => 발표 시간(필수)
** nx => 격자 - X(필수)
** ny => 격자 - Y (필수)
** (격자는 현재 서울특별시 전체 영역 위치로 고정)
** 
*/

// 테스트 할 영역
// const testDom = document.getElementById('test-result');

// /* Date Set Area */
// let today = new Date();
// let week = new Array('일', '월', '화', '수', '목', '금', '토');
// let year = today.getFullYear();
// let month = today.getMonth() + 1;
// let day = today.getDate();
// let hours = today.getHours();
// let minutes = today.getMinutes();
// // 확인용
// let testDate = () => {
//   testDom.innerHTML = `
//     ${month}월 ${day}일 ${week[today.getDay()]}요일
//   `;
// }
// testDate(); // 확인용

// // 정각일 경우에 30분씩 앞 당겨주기
// if (minutes < 30) {

//   hours = hours - 1;

//   if(hours < 0){
//       // 자정 이전은 전날로 계산
//       today.setDate(today.getDate() - 1);
//       day = today.getDate();
//       month = today.getMonth() + 1;
//       year = today.getFullYear();
//       hours = 23;
//   }
// }

// // 2자리 숫자 아래일 경우, 앞에 0 붙이기 | 조건문으로
// // 월
// month < 10 ? month = '0' + month : '';
// // 일
// day < 10 ? day = '0' + day : '';
// // 시
// hours < 10 ? hours = '0' + hours : '';

// // today에 value 재할당
// today = `${year}${month}${day}`;
// // 아래는 잘 출력 되는지 확인
// // today = year + '년' + month + '월' + day + '일' + hours + '시' + minutes + '분';
// console.log('today reSet', today + hours + minutes);

// // API Set
// const apiDefaultUrl = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?';
// const apiKey = 'QsN8oW2La2SlwQ%2B7q6FTCMTqCUJWvvPV0uwBVvt6gAbfI1QztIcFT%2Fa6fjn5uvVMhPV9vXfzRKmMW1Y%2FszgQmQ%3D%3D'
// const apiPageNumb = '1';
// const apiNumOfRows = '30';
// const apiDataType = 'JSON';
// const apiNx = '60';
// const apiNy = '127';
// let apiBaseDate = today;
// let apiBaseTime = hours + '00';

// const apiUrl = `${apiDefaultUrl}serviceKey=${apiKey}&pageNo=${apiPageNumb}&numOfRows=${apiNumOfRows}&dataType=${apiDataType}&base_date=${apiBaseDate}&base_time=${apiBaseTime}&nx=${apiNx}&ny=${apiNy}`;

// // fetch로 Data Get
// fetch(apiUrl)
// .then(response => {
//   // 예외 처리
//   if (!response.ok) {
//     // Error 구간
//     throw new Error('아마도 400 or 500 Error');
//   }
//   return response.json();
// })
// .then(data => {
//   // Success
//   console.log('Success',data);
//   const resData = data.response.body.items.item;

//   let resCategory;
  
//   resData.forEach((ele) => {

//     resCategory = ele.category;

//     if (resCategory === 'SKY') {
//       console.log('SKY 있다');
//     }

//     if (resCategory === 'T1H') {
//       console.log('T1H 있다');
//     }

//     console.log('카테고리 확인', resCategory);


    
    
//     // if (resCategory === 'T1H') {
//     //   let resTemp = document.getElementById('temp');
      
//     //   resTemp.innerHTML = resCategory.fcstValue;
//     //   console.log('온도상~~',resCategory.fcstValue);
//     // }
    
//     // if (resCategory === 'SKY') {
//     //   let resSky = document.getElementById('sky');

//     //   resSky.innerHTML = resCategory.fcstValue;
//     //   console.log('하늘상~~',resCategory.fcstValue);
//     // }

//     // console.log('forEach End');
//   });

//   // console.log('카테고리',resData.category);
//   // console.log('발행 일자',resData.fcstDate);
//   // console.log('발행 시간',resData.fcstTime);
//   // console.log('온도',resData.fcstValue);

//   // testDom.innerText = `

//   // `;
//   //
// })
// .catch(error => {
//   // Error
//   console.log('Error', error);
// })

jQuery(document).ready(function() {
  // Start..
  
});