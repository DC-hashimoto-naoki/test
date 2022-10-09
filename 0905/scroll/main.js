// < !--自動スクロールスクリプト開始-->

jQuery(function () {
    autoScroll();
});
var $scrollY = 0;
function autoScroll() {
    var $sampleBox = jQuery('#scroll-box');
    $sampleBox.scrollTop(++$scrollY);
    if ($scrollY < $sampleBox[0].scrollHeight - $sampleBox[0].clientHeight) {
        setTimeout("autoScroll()", 20);
    } else {
        $scrollY = 0;
        $sampleBox.scrollTop(0);
        setTimeout("autoScroll()", 20);
    }
}
