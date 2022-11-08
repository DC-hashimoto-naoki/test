function removePx(px) {
    let isContainPx = px.match(/px$/);
    console.log(isContainPx);
    if(!isContainPx) {
        console.log(px + ' not contain px');
        return;
    }
    let pxNum = parseInt(px.replace('px', ''));
    return pxNum;
}

removePx('1000px');