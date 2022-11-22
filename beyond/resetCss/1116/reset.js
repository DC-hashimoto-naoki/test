window.addEventListener('DOMContentLoaded', init);

function init() {
    const articleBody = document.querySelector('.article-body');
    articleBody.style.cssText = 'padding: 0 !important';


    const divsRow = document.querySelectorAll('.article-body > div');
    const divs = Array.prototype.slice.call(divsRow);

    divs.forEach(div => {
        div.style.padding = '0 2.5%';
    })
}