const bodyList = document.getElementById('body-list');
const headList = document.getElementById('head-list');
const eyesList = document.getElementById('eyes-list');
const mouthList = document.getElementById('mouth-list');
const bgList = document.getElementById('bg-list');
const bottomList = document.getElementById('bottom-list');
const topList = document.getElementById('top-list');

var current_body = undefined;
var current_head = undefined;
var current_eyes = undefined;
var current_mouth = undefined;
var current_bg = undefined;
var current_bottom = undefined;
var current_top = undefined;

var selected_body = 1;
var selected_head = 0;
var selected_eyes = 0;
var selected_mouth = 0;
var selected_bg = 1;
var selected_bottom = 0;
var selected_top = 0;

function setImage(type, image) {
    switch(type) {
        case 'body':
            current_body = image;
            break;
        case 'head':
            current_head = image;
            break;
        case 'eyes':
            current_eyes = image;
            break;
        case 'mouth':
            current_mouth = image;
            break;
        case 'bg':
            current_bg = image;
            break;
        case 'bottom':
            current_bottom = image;
            break;
        case 'top':
            current_top = image;
            break;
    }
}

function loadImage(type, imgURL) {
    if(imgURL == undefined) {
        setImage(type, undefined);
    }

    var newImage = new Image();
    newImage.src = imgURL;
    newImage.crossOrigin = 'Anonymous';
    newImage.onload = () => {
        setImage(type, newImage);
    }
}

function getSelectedIdx(type) {
    switch(type) {
        case 'head':
            return selected_head;
        case 'eyes':
            return selected_eyes;
        case 'mouth':
            return selected_mouth;
        case 'bg':
            return selected_bg;
        case 'bottom':
            return selected_bottom;
        case 'top':
            return selected_top;
        case 'body':
            return selected_body;
    }
}

function setSelectedIdx(type,idx) {
    switch(type) {
        case 'body':
            selected_body = idx;
            break;
        case 'head':
            selected_head = idx;
            break;
        case 'eyes':
            selected_eyes = idx;
            break;
        case 'mouth':
            selected_mouth = idx;
            break;
        case 'bg':
            selected_bg = idx;
            break;
        case 'bottom':
            selected_bottom = idx;
            break;
        case 'top':
            selected_top = idx;
            break;
    }
}

function AddParts(listElem, type, idx, iconURL, imgURL, selected=false) {
    let parts = document.createElement('div');
    parts.className = 'parts';
    parts.id = `${type}-${idx}`;
    if(selected == true) {
        parts.classList.add('parts-selected');
        loadImage(type, imgURL);
    }
    
    let iconImg = document.createElement('img');
    iconImg.src = iconURL;

    parts.onclick = () => {
        const prevIdx = getSelectedIdx(type);
        let prevParts = document.getElementById(`${type}-${prevIdx}`);
        if(prevParts) {
            prevParts.classList.remove('parts-selected');
        }

        setSelectedIdx(type, idx);
        parts.classList.add('parts-selected');
        loadImage(type, imgURL);
    }

    parts.appendChild(iconImg);
    listElem.appendChild(parts);

    return parts;
}

function selectParts(type, idx) {
    let parts = document.getElementById(`${type}-${idx}`);
    if(parts == undefined) {
        console.log(`${type} ${idx}`)
    }
    parts.click();
    setSelectedIdx(type, idx);
}

AddParts(bodyList, 'body',1, 'mememaker-assets/img/icons/body/1.png', 'mememaker-assets/img/body/1.png', true);
AddParts(bodyList, 'body',2, 'mememaker-assets/img/icons/body/2.png', 'mememaker-assets/img/body/2.png');
AddParts(bodyList, 'body',3, 'mememaker-assets/img/icons/body/3.png', 'mememaker-assets/img/body/3.png');
AddParts(bodyList, 'body',4, 'mememaker-assets/img/icons/body/4.png', 'mememaker-assets/img/body/4.png');
AddParts(bodyList, 'body',5, 'mememaker-assets/img/icons/body/5.png', 'mememaker-assets/img/body/5.png');
AddParts(bodyList, 'body',6, 'mememaker-assets/img/icons/body/6.png', 'mememaker-assets/img/body/6.png');
AddParts(bodyList, 'body',7, 'mememaker-assets/img/icons/body/7.png', 'mememaker-assets/img/body/7.png');
AddParts(bodyList, 'body',8, 'mememaker-assets/img/icons/body/8.png', 'mememaker-assets/img/body/8.png');
AddParts(bodyList, 'body',9, 'mememaker-assets/img/icons/body/9.png', 'mememaker-assets/img/body/9.png');
AddParts(bodyList, 'body',10, 'mememaker-assets/img/icons/body/10.png', 'mememaker-assets/img/body/10.png');
AddParts(bodyList, 'body',11, 'mememaker-assets/img/icons/body/11.png', 'mememaker-assets/img/body/11.png');
AddParts(bodyList, 'body',12, 'mememaker-assets/img/icons/body/12.png', 'mememaker-assets/img/body/12.png');
AddParts(bodyList, 'body',13, 'mememaker-assets/img/icons/body/13.png', 'mememaker-assets/img/body/13.png');
AddParts(bodyList, 'body',14, 'mememaker-assets/img/icons/body/14.png', 'mememaker-assets/img/body/14.png');

AddParts(headList, 'head',0, 'mememaker-assets/img/none.png', undefined, true);
AddParts(headList, 'head',1, 'mememaker-assets/img/icons/head/1.png', 'mememaker-assets/img/head/1.png');
AddParts(headList, 'head',2, 'mememaker-assets/img/icons/head/2.png', 'mememaker-assets/img/head/2.png');
AddParts(headList, 'head',3, 'mememaker-assets/img/icons/head/3.png', 'mememaker-assets/img/head/3.png');
AddParts(headList, 'head',4, 'mememaker-assets/img/icons/head/4.png', 'mememaker-assets/img/head/4.png');
AddParts(headList, 'head',5, 'mememaker-assets/img/icons/head/5.png', 'mememaker-assets/img/head/5.png');
AddParts(headList, 'head',6, 'mememaker-assets/img/icons/head/6.png', 'mememaker-assets/img/head/6.png');
AddParts(headList, 'head',7, 'mememaker-assets/img/icons/head/7.png', 'mememaker-assets/img/head/7.png');
AddParts(headList, 'head',8, 'mememaker-assets/img/icons/head/8.png', 'mememaker-assets/img/head/8.png');
AddParts(headList, 'head',9, 'mememaker-assets/img/icons/head/9.png', 'mememaker-assets/img/head/9.png');
AddParts(headList, 'head',10, 'mememaker-assets/img/icons/head/10.png', 'mememaker-assets/img/head/10.png');
AddParts(headList, 'head',11, 'mememaker-assets/img/icons/head/11.png', 'mememaker-assets/img/head/11.png');
AddParts(headList, 'head',13, 'mememaker-assets/img/icons/head/13.png', 'mememaker-assets/img/head/13.png');
AddParts(headList, 'head',14, 'mememaker-assets/img/icons/head/14.png', 'mememaker-assets/img/head/14.png');
AddParts(headList, 'head',15, 'mememaker-assets/img/icons/head/15.png', 'mememaker-assets/img/head/15.png');
AddParts(headList, 'head',16, 'mememaker-assets/img/icons/head/16.png', 'mememaker-assets/img/head/16.png');
AddParts(headList, 'head',17, 'mememaker-assets/img/icons/head/17.png', 'mememaker-assets/img/head/17.png');
AddParts(headList, 'head',18, 'mememaker-assets/img/icons/head/18.png', 'mememaker-assets/img/head/18.png');
AddParts(headList, 'head',19, 'mememaker-assets/img/icons/head/19.png', 'mememaker-assets/img/head/19.png');
AddParts(headList, 'head',20, 'mememaker-assets/img/icons/head/20.png', 'mememaker-assets/img/head/20.png');
AddParts(headList, 'head',21, 'mememaker-assets/img/icons/head/21.png', 'mememaker-assets/img/head/21.png');
AddParts(headList, 'head',22, 'mememaker-assets/img/icons/head/22.png', 'mememaker-assets/img/head/22.png');
AddParts(headList, 'head',23, 'mememaker-assets/img/icons/head/23.png', 'mememaker-assets/img/head/23.png');
AddParts(headList, 'head',24, 'mememaker-assets/img/icons/head/24.png', 'mememaker-assets/img/head/24.png');
AddParts(headList, 'head',25, 'mememaker-assets/img/icons/head/25.png', 'mememaker-assets/img/head/25.png');
AddParts(headList, 'head',26, 'mememaker-assets/img/icons/head/26.png', 'mememaker-assets/img/head/26.png');
AddParts(headList, 'head',27, 'mememaker-assets/img/icons/head/27.png', 'mememaker-assets/img/head/27.png');
AddParts(headList, 'head',28, 'mememaker-assets/img/icons/head/28.png', 'mememaker-assets/img/head/28.png');
AddParts(headList, 'head',29, 'mememaker-assets/img/icons/head/29.png', 'mememaker-assets/img/head/29.png');
AddParts(headList, 'head',30, 'mememaker-assets/img/icons/head/30.png', 'mememaker-assets/img/head/30.png');
// AddParts(headList, 'head',31, 'mememaker-assets/img/icons/head/31.png', 'mememaker-assets/img/head/31.png');
// AddParts(headList, 'head',32, 'mememaker-assets/img/icons/head/32.png', 'mememaker-assets/img/head/32.png');
// AddParts(headList, 'head',33, 'mememaker-assets/img/icons/head/33.png', 'mememaker-assets/img/head/33.png');
// AddParts(headList, 'head',34, 'mememaker-assets/img/icons/head/34.png', 'mememaker-assets/img/head/34.png');
// AddParts(headList, 'head',35, 'mememaker-assets/img/icons/head/35.png', 'mememaker-assets/img/head/35.png');
// AddParts(headList, 'head',36, 'mememaker-assets/img/icons/head/36.png', 'mememaker-assets/img/head/36.png');
// AddParts(headList, 'head',37, 'mememaker-assets/img/icons/head/37.png', 'mememaker-assets/img/head/37.png');
// AddParts(headList, 'head',38, 'mememaker-assets/img/icons/head/38.png', 'mememaker-assets/img/head/38.png');
// AddParts(headList, 'head',39, 'mememaker-assets/img/icons/head/39.png', 'mememaker-assets/img/head/39.png');
// AddParts(headList, 'head',40, 'mememaker-assets/img/icons/head/40.png', 'mememaker-assets/img/head/40.png');
// AddParts(headList, 'head',41, 'mememaker-assets/img/icons/head/41.png', 'mememaker-assets/img/head/41.png');
// AddParts(headList, 'head',42, 'mememaker-assets/img/icons/head/42.png', 'mememaker-assets/img/head/42.png');
// AddParts(headList, 'head',43, 'mememaker-assets/img/icons/head/43.png', 'mememaker-assets/img/head/43.png');
// AddParts(headList, 'head',44, 'mememaker-assets/img/icons/head/44.png', 'mememaker-assets/img/head/44.png');
// AddParts(headList, 'head',45, 'mememaker-assets/img/icons/head/45.png', 'mememaker-assets/img/head/45.png');


AddParts(eyesList, 'eyes',0, 'mememaker-assets/img/none.png', undefined, true);
AddParts(eyesList, 'eyes',1, 'mememaker-assets/img/icons/eyes/1.png', 'mememaker-assets/img/eyes/1.png');
AddParts(eyesList, 'eyes',2, 'mememaker-assets/img/icons/eyes/2.png', 'mememaker-assets/img/eyes/2.png');
AddParts(eyesList, 'eyes',3, 'mememaker-assets/img/icons/eyes/3.png', 'mememaker-assets/img/eyes/3.png');
AddParts(eyesList, 'eyes',4, 'mememaker-assets/img/icons/eyes/4.png', 'mememaker-assets/img/eyes/4.png');
AddParts(eyesList, 'eyes',5, 'mememaker-assets/img/icons/eyes/5.png', 'mememaker-assets/img/eyes/5.png');
AddParts(eyesList, 'eyes',6, 'mememaker-assets/img/icons/eyes/6.png', 'mememaker-assets/img/eyes/6.png');
// AddParts(eyesList, 'eyes',7, 'mememaker-assets/img/icons/eyes/7.png', 'mememaker-assets/img/eyes/7.png');
// AddParts(eyesList, 'eyes',8, 'mememaker-assets/img/icons/eyes/8.png', 'mememaker-assets/img/eyes/8.png');

// AddParts(mouthList, 'mouth',0, 'mememaker-assets/img/none.png', undefined, true);
// AddParts(mouthList, 'mouth',1, 'mememaker-assets/img/icons/mouth/1.png', 'mememaker-assets/img/mouth/1.png');
// AddParts(mouthList, 'mouth',2, 'mememaker-assets/img/icons/mouth/2.png', 'mememaker-assets/img/mouth/2.png');
// AddParts(mouthList, 'mouth',3, 'mememaker-assets/img/icons/mouth/3.png', 'mememaker-assets/img/mouth/3.png');
// AddParts(mouthList, 'mouth',4, 'mememaker-assets/img/icons/mouth/4.png', 'mememaker-assets/img/mouth/4.png');
// AddParts(mouthList, 'mouth',5, 'mememaker-assets/img/icons/mouth/5.png', 'mememaker-assets/img/mouth/5.png');
// AddParts(mouthList, 'mouth',6, 'mememaker-assets/img/icons/mouth/6.png', 'mememaker-assets/img/mouth/6.png');
// AddParts(mouthList, 'mouth',7, 'mememaker-assets/img/icons/mouth/7.png', 'mememaker-assets/img/mouth/7.png');

AddParts(topList, 'top',0, 'mememaker-assets/img/none.png', undefined, true);
AddParts(topList, 'top',1, 'mememaker-assets/img/icons/top/1.png', 'mememaker-assets/img/top/1.png');
AddParts(topList, 'top',2, 'mememaker-assets/img/icons/top/2.png', 'mememaker-assets/img/top/2.png');
AddParts(topList, 'top',3, 'mememaker-assets/img/icons/top/3.png', 'mememaker-assets/img/top/3.png');
AddParts(topList, 'top',4, 'mememaker-assets/img/icons/top/4.png', 'mememaker-assets/img/top/4.png');
AddParts(topList, 'top',5, 'mememaker-assets/img/icons/top/5.png', 'mememaker-assets/img/top/5.png');
AddParts(topList, 'top',6, 'mememaker-assets/img/icons/top/6.png', 'mememaker-assets/img/top/6.png');
AddParts(topList, 'top',7, 'mememaker-assets/img/icons/top/7.png', 'mememaker-assets/img/top/7.png');
AddParts(topList, 'top',8, 'mememaker-assets/img/icons/top/8.png', 'mememaker-assets/img/top/8.png');
AddParts(topList, 'top',9, 'mememaker-assets/img/icons/top/9.png', 'mememaker-assets/img/top/9.png');
AddParts(topList, 'top',10, 'mememaker-assets/img/icons/top/10.png', 'mememaker-assets/img/top/10.png');
AddParts(topList, 'top',11, 'mememaker-assets/img/icons/top/11.png', 'mememaker-assets/img/top/11.png');
AddParts(topList, 'top',12, 'mememaker-assets/img/icons/top/12.png', 'mememaker-assets/img/top/12.png');
AddParts(topList, 'top',13, 'mememaker-assets/img/icons/top/13.png', 'mememaker-assets/img/top/13.png');
AddParts(topList, 'top',14, 'mememaker-assets/img/icons/top/14.png', 'mememaker-assets/img/top/14.png');
AddParts(topList, 'top',15, 'mememaker-assets/img/icons/top/15.png', 'mememaker-assets/img/top/15.png');
AddParts(topList, 'top',16, 'mememaker-assets/img/icons/top/16.png', 'mememaker-assets/img/top/16.png');
AddParts(topList, 'top',17, 'mememaker-assets/img/icons/top/17.png', 'mememaker-assets/img/top/17.png');
AddParts(topList, 'top',18, 'mememaker-assets/img/icons/top/18.png', 'mememaker-assets/img/top/18.png');
AddParts(topList, 'top',19, 'mememaker-assets/img/icons/top/19.png', 'mememaker-assets/img/top/19.png');
AddParts(topList, 'top',20, 'mememaker-assets/img/icons/top/20.png', 'mememaker-assets/img/top/20.png');
AddParts(topList, 'top',21, 'mememaker-assets/img/icons/top/21.png', 'mememaker-assets/img/top/21.png');
AddParts(topList, 'top',22, 'mememaker-assets/img/icons/top/22.png', 'mememaker-assets/img/top/22.png');
AddParts(topList, 'top',23, 'mememaker-assets/img/icons/top/23.png', 'mememaker-assets/img/top/23.png');


AddParts(bottomList, 'bottom', 0, 'mememaker-assets/img/none.png', undefined, true);
AddParts(bottomList, 'bottom', 1, 'mememaker-assets/img/icons/bottom/1.png', 'mememaker-assets/img/bottom/1.png');
AddParts(bottomList, 'bottom', 2, 'mememaker-assets/img/icons/bottom/2.png', 'mememaker-assets/img/bottom/2.png');
AddParts(bottomList, 'bottom', 3, 'mememaker-assets/img/icons/bottom/3.png', 'mememaker-assets/img/bottom/3.png');
AddParts(bottomList, 'bottom', 4, 'mememaker-assets/img/icons/bottom/4.png', 'mememaker-assets/img/bottom/4.png');
AddParts(bottomList, 'bottom', 5, 'mememaker-assets/img/icons/bottom/5.png', 'mememaker-assets/img/bottom/5.png');
AddParts(bottomList, 'bottom', 6, 'mememaker-assets/img/icons/bottom/6.png', 'mememaker-assets/img/bottom/6.png');
AddParts(bottomList, 'bottom', 7, 'mememaker-assets/img/icons/bottom/7.png', 'mememaker-assets/img/bottom/7.png');
AddParts(bottomList, 'bottom', 8, 'mememaker-assets/img/icons/bottom/8.png', 'mememaker-assets/img/bottom/8.png');
AddParts(bottomList, 'bottom', 9, 'mememaker-assets/img/icons/bottom/9.png', 'mememaker-assets/img/bottom/9.png');
AddParts(bottomList, 'bottom', 10, 'mememaker-assets/img/icons/bottom/10.png', 'mememaker-assets/img/bottom/10.png');
AddParts(bottomList, 'bottom', 11, 'mememaker-assets/img/icons/bottom/11.png', 'mememaker-assets/img/bottom/11.png');
AddParts(bottomList, 'bottom', 12, 'mememaker-assets/img/icons/bottom/12.png', 'mememaker-assets/img/bottom/12.png');
AddParts(bottomList, 'bottom', 13, 'mememaker-assets/img/icons/bottom/13.png', 'mememaker-assets/img/bottom/13.png');
AddParts(bottomList, 'bottom', 14, 'mememaker-assets/img/icons/bottom/14.png', 'mememaker-assets/img/bottom/14.png');
AddParts(bottomList, 'bottom', 15, 'mememaker-assets/img/icons/bottom/15.png', 'mememaker-assets/img/bottom/15.png');
AddParts(bottomList, 'bottom', 16, 'mememaker-assets/img/icons/bottom/16.png', 'mememaker-assets/img/bottom/16.png');

AddParts(bgList, 'bg', 1, 'mememaker-assets/img/icons/background/1.png', 'mememaker-assets/img/background/1.png', true);
// AddParts(bgList, 'bg', 2, 'mememaker-assets/img/icons/background/2.png', 'mememaker-assets/img/background/2.png');
// AddParts(bgList, 'bg', 3, 'mememaker-assets/img/icons/background/3.png', 'mememaker-assets/img/background/3.png');
// AddParts(bgList, 'bg', 4, 'mememaker-assets/img/icons/background/4.png', 'mememaker-assets/img/background/4.png');
// AddParts(bgList, 'bg', 5, 'mememaker-assets/img/icons/background/5.png', 'mememaker-assets/img/background/5.png');
// AddParts(bgList, 'bg', 6, 'mememaker-assets/img/icons/background/6.png', 'mememaker-assets/img/background/6.png');
// AddParts(bgList, 'bg', 7, 'mememaker-assets/img/icons/background/7.png', 'mememaker-assets/img/background/7.png');
// AddParts(bgList, 'bg', 8, 'mememaker-assets/img/icons/background/8.png', 'mememaker-assets/img/background/8.png');
// AddParts(bgList, 'bg', 9, 'mememaker-assets/img/icons/background/009.png', 'mememaker-assets/img/background/009.png');
// AddParts(bgList, 'bg', 10, 'mememaker-assets/img/icons/background/010.png', 'mememaker-assets/img/background/010.png');



const canvas = document.getElementById('mainCanvas');
canvas.width = 600;
canvas.height = 600;
const context = canvas.getContext('2d');

setInterval(() => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, 600, 600);

    if(current_bg != undefined) {
        context.drawImage(current_bg, 0, 0, 600, 600);
    }

    if(current_body != undefined) {
        context.drawImage(current_body, 0, 0, 600, 600 );
    }

    if(current_head != undefined) {
        context.drawImage(current_head, 0, 0, 600, 600 );
    }

    // if(current_mouth != undefined) {
    //     context.drawImage(current_mouth, 0, 0, 400, 600 );
    // }

    if(current_eyes != undefined) {
        context.drawImage(current_eyes, 0, 0, 600, 600 );
    }
    
    if(current_bottom != undefined) {
        context.drawImage(current_bottom, 0, 0, 600, 600 );
    }

    if(current_top != undefined) {
        context.drawImage(current_top, 0, 0, 600, 600 );
    }
}, 100);

function randRange(min, max) {
    return Math.floor((Math.random() * (max - min)) + min);
}

const resetBtn = document.getElementById('reset-btn');
resetBtn.onclick = () => {
    selectParts('head', 0);
    selectParts('eyes', 0);
    // selectParts('mouth', 0);
    selectParts('bg', 1);
    selectParts('bottom', 0);
    selectParts('top', 0);
    selectParts('body', 1);
}

const randomBtn = document.getElementById('random-btn');

randomBtn.onclick = () => {
    const randHead = randRange(0, 31);
    const randEyes = randRange(0, 7);
    // const randMouth = randRange(0, 2);
     const randBg = randRange(0, 2);
    const randbottom = randRange(0, 9);
    const randtop = randRange(0, 24);
    const randbody = randRange(0, 15);

    selectParts('head', randHead);
    selectParts('eyes', randEyes);
    // selectParts('mouth', randMouth);
    selectParts('bg', randBg);
    selectParts('bottom', randbottom);
    selectParts('top', randtop);
    selectParts('body', randbody);
}

const downloadBtn = document.getElementById('download-btn');
downloadBtn.onclick = () => {
    var link = document.createElement('a');
    link.download = 'todd.png';
    link.href = canvas.toDataURL()
    link.click();
}


// document.addEventListener('DOMContentLoaded', function() {
//     const buttons = document.querySelectorAll('.category-buttons button');
//     const selectors = document.querySelectorAll('.selector');

//     buttons.forEach(button => {
//         button.addEventListener('click', function() {
//             selectors.forEach(selector => selector.classList.remove('active'));
//             document.getElementById(button.dataset.category).classList.add('active');
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.category-buttons button');
    const selectors = document.querySelectorAll('.selector');

    // Function to activate a category
    function activateCategory(button) {
        selectors.forEach(selector => selector.classList.remove('active'));
        document.getElementById(button.dataset.category).classList.add('active');

        // Remove active class from all buttons and add to the clicked one
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    }

    // Automatically select the "head" category on page load
    const defaultCategory = document.querySelector('button[data-category="body"]');
    if (defaultCategory) {
        activateCategory(defaultCategory); // Activate the "head" category by default
    }

    // Add event listener to each button for manual category selection
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            activateCategory(button); // Activate the selected category
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.categories');

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove 'active' class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add 'active' class to the clicked button
            this.classList.add('active');
        });
    });
});

function mousehandler(e) {
    var myevent = (isNS) ? e : event;
    var eventbutton = (isNS) ? myevent.which : myevent.button;
    if ((eventbutton == 2) || (eventbutton == 3)) return false;
}
document.oncontextmenu = mousehandler;
document.onmousedown = mousehandler;
document.onmouseup = mousehandler;
function disableCtrlKeyCombination(e) {
    var forbiddenKeys = new Array("a", "s", "c", "x","u");
    var key;
    var isCtrl;
    if (window.event) {
        key = window.event.keyCode;
        //IE
        if (window.event.ctrlKey)
            isCtrl = true;
        else
            isCtrl = false;
    }
    else {
        key = e.which;
        //firefox
        if (e.ctrlKey)
            isCtrl = true;
        else
            isCtrl = false;
    }
    if (isCtrl) {
        for (i = 0; i < forbiddenKeys.length; i++) {
            //case-insensitive comparation
            if (forbiddenKeys[i].toLowerCase() == String.fromCharCode(key).toLowerCase()) {
                return false;
            }
        }
    }
    return true;
}