window.addEventListener('DOMContentLoaded', init);
window.addEventListener('resize', init);
let isChangedFont = false;

function init() {
    const articleBody = document.querySelector('.article-body');
    const body = document.getElementsByTagName('body')[0];
    let bodyWidth = window.getComputedStyle(body).getPropertyValue('width');
    let articleBodyPadding = window.getComputedStyle(articleBody).getPropertyValue('padding-left');
    console.log('width', bodyWidth);
    console.log('padding-left', articleBodyPadding);

    // TODO: set breakPoint flexible
    const breakPoint = 620;
    let isSp = window.innerWidth < breakPoint;
    console.log('breakPoint', breakPoint);
    console.log('is SP? ', isSp);

    let divs = document.querySelectorAll('.article-body > div');
    let spans = document.querySelectorAll('.article-body > div > span');
    let strongs = document.querySelectorAll('.article-body > div > strong');
    let links = document.querySelectorAll('.article-body > div > a');

    if (isSp && !isChangedFont) {
        changeFontSize(divs, breakPoint);
        changeFontSize(spans, breakPoint);
        changeFontSize(strongs, breakPoint);
        changeFontSize(links, breakPoint);
        isChangedFont = true;
        articleBody.classList.add('sp');
    }
    changeBodyPadding(articleBodyPadding, breakPoint);

}

// TODO: when size changed;
// TODO: when sb-custom class has,
/**
 * changeFontSize
 * @param {HTMLCollection} els, 
*/
function changeFontSize(els, breakPoint) {
    let elements = Array.prototype.slice.call(els);

    elements.forEach(div => {
        let fontSizePx = window.getComputedStyle(div).getPropertyValue('font-size');
        let fontSize = removePx(fontSizePx);
        let fontOnSp = (fontSize / breakPoint) * 100;
        div.style.fontSize = `min(${fontSizePx}, ${fontOnSp}vw)`;
    })
}

/**
 * @param padding, {number}breakPoint
 * @return void
*/
function changeBodyPadding(padding, breakPoint) {
    const articleBody = document.querySelector('.article-body');
    articleBody.style.paddingLeft = `10px`;
    articleBody.style.paddingRight = `10px`;
}

/**
 * @param {String}px
 * @return {number}pxNum
*/
function removePx(px) {
    let isContainPx = px.match(/px$/);
    if (!isContainPx) {
        console.log(px + ' not contain px');
        return;
    }
    let pxNum = parseInt(px.replace('px', ''));
    return pxNum;
}

