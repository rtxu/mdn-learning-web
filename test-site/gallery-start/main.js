const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* 遍历图片并添加至缩略图区 */

for (let i = 1; i <= 5; i++) {
    const newImage = document.createElement('img');
    const imgPath = 'images/pic' + i + '.jpg';
    newImage.setAttribute('src', imgPath);
    newImage.onclick = function(e) {
        displayedImage.setAttribute('src', e.target.getAttribute('src'));
    }
    thumbBar.appendChild(newImage);
}

/* 编写 变亮/变暗 按钮 */
btn.onclick = function(e) {
    if (e.target.getAttribute('class') === 'dark') {
        e.target.setAttribute('class', 'light');
        btn.textContent = '变亮';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        e.target.setAttribute('class', 'dark');
        btn.textContent = '变暗';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}
