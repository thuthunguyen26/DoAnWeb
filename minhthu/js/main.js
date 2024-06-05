// ----------------------------------------------------------------baner----------------------------------------------------------------
var baner = document.querySelector('.baner-contaier')
var banerItem = document.querySelectorAll('.baner-item')
var baneIcon = document.querySelectorAll('.baner-icon')
var banerWidth = baner.offsetWidth * (banerItem.length - 1)
var roll = 0;
baneIcon[1].addEventListener('click', () => {
    if (roll < banerWidth) {
        roll += baner.offsetWidth
    } else {
        roll = 0;
    }
    return baner.style.transform = `translateX(-${roll}px)`;
})
baneIcon[0].addEventListener('click', () => {
    if (roll <= banerWidth) {
        roll -= baner.offsetWidth
    }
    if (roll < 0) {
        roll = banerWidth;
    }
    return baner.style.transform = `translateX(-${roll}px)`;
})
// ---------------------------------------------------wrapper ---------------------------------------------------

var wrapRow = document.querySelector('.wraper-row')
var wrapItems = document.querySelectorAll('.wraper-item')
var wrapItem = document.querySelector('.wraper-item')

// biến để lặp lại vòng lặp
var widthWrapItem = wrapItem.offsetWidth
var wrapMaxRoll = widthWrapItem * (wrapItems.length - 3)
// ham`
// khởi tạo biến để roll trước
var wraproll = widthWrapItem
setInterval(function () {
    if (wraproll > wrapMaxRoll) {
        wraproll = widthWrapItem
    }
    wrapRow.style.transform = `translateX(-${wraproll}px)`;
    wraproll += widthWrapItem
}, 6000)
// --------------------------------------------------------------------------------------------------------------------
var wrapIcon = document.querySelectorAll('.wrap-icon')
// icon phải
wrapIcon[1].addEventListener('click', () => {
    if (wraproll > wrapMaxRoll) {
        wraproll = 0
    }
    wrapRow.style.transform = `translateX(-${wraproll}px)`;
    wraproll += widthWrapItem
})
// icon trái
wrapIcon[0].addEventListener('click', () => {
    wraproll -= widthWrapItem
    if (wraproll < 0) {
        wraproll = wrapMaxRoll
    }
    wrapRow.style.transform = `translateX(-${wraproll}px)`;
})




