window.addEventListener('DOMContentLoaded', function(){
    let images = this.document.getElementsByTagName('img');
    let sources = this.document.getElementsByTagName('source');


    function changeImageSize_px_to_rem(tags) {
        tags = Array.prototype.slice.call(tags);

        tags.forEach(image => {
            let width_px = image.naturalWidth;
            let width_rem = width_px / 10;
            image.setAttribute('style', `width: ${width_rem}rem`);
        });
    }

    function init(){
        changeImageSize_px_to_rem(images);
        changeImageSize_px_to_rem(sources);
    }

    init();

    this.window.addEventListener('resize', init);

})