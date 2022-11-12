const listsDOM = document.querySelectorAll('.list > img');
var lists = Array.prototype.slice.call(listsDOM);
const PATH = "./images/";
const left = document.querySelector('.list.left > img');
const right = document.querySelector('.list.right > img');

let nums = [1, 2, 3, 4, 5];
let leftIndex = Math.floor(Math.random() * nums.length);
console.log('leftIndex', leftIndex);
left.setAttribute('src', `${PATH}cat-${nums[leftIndex]}.jpg`)
nums = nums.filter(num => num !== leftIndex + 1);
let rightIndex = Math.floor(Math.random() * nums.length);
console.log('rightIndex', rightIndex);
right.setAttribute('src', `${PATH}cat-${nums[rightIndex]}.jpg`)

$('.left').hover(function(){
    $(this).addClass('active');
})