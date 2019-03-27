var input_file = document.getElementById('input_file');
var upload_file = document.getElementById('upload_file');

input_file.onchange = function() {
    var fileName = input_file.value.split('\\').pop();
    upload_file.value = fileName;
}
