let button = document.getElementById('theBoxes');
button.addEventListener("click", myFunction);

var lastValue = 0;
var i = 1;

function myFunction() {
    let n = document.getElementById('number').value;
    n = parseInt(lastValue) + parseInt(n);
    let color = document.getElementById('mycolor').value;
    console.log(color);
    for (; i <= n; i++) {
        var box = document.createElement('div');
        box.classList.add('myDiv');
        box.style.backgroundColor = color;
        document.getElementById('box').appendChild(box);
        box.innerHTML = i;

        lastValue = document.getElementById('box').lastElementChild.innerHTML;
        console.log(lastValue);
    }

}