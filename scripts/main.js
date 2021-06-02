document.querySelector('li').onclick = function() {
    alert('别戳我，我怕疼。');
}


let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/qiaoqiao.jpg') {
      myImage.setAttribute('src', 'images/wyman.jpg');
    } else {
      myImage.setAttribute('src', 'images/qiaoqiao.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('敲仔', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
  }

  if(!localStorage.getItem('敲仔')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('悄悄');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
 }

function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
  }
}