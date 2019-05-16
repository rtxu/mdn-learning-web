
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cat-1.jpg') {
      myImage.setAttribute('src', 'images/cat-2.jpg');
    } else {
      myImage.setAttribute('src', 'images/cat-1.jpg');
    }
}

function setHeading(name) {
    let myHeading = document.querySelector('h1');
    myHeading.textContent = 'Mozilla 酷毙了，' + name + '！';
}
  
function setUserName() {
    let myName = prompt('请输入你的名字');
    localStorage.setItem('name', myName);
    setHeading(myName);
} 
  
let storedName = localStorage.getItem('name');
console.log(typeof(storedName));
console.log(typeof(storedName) === 'undefined');
console.log(storedName);
if(storedName == null) {
     setUserName();
} else {
     setHeading(storedName);
}
  
let myButton = document.querySelector('button'); 
myButton.onclick = setUserName;