
function add(n) {
    var result = document.getElementById("result");
    result.value = result.value + n;
}

function clear() {  //기능 작동이 안함
    var result = document.getElementById("result");
    result.value = "";
}

function calc() {
    var result = document.getElementById("result");
    result.value = eval(result.value);
}
