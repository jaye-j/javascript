let clickCount = 0;

let bigRedButtonNode = document.querySelector('#big_red_button');

bigRedButtonNode.addEventListener('click', function(){
    
    clickCount += 1;

    let countLabelNode = document.querySelector('#count');

    countLabelNode.textContent = clickCount.toString();
});