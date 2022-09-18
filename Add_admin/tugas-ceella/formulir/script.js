function changeLiputan() {
    document.getElementById('liputan').style.display = "block";
    document.getElementById('publikasi').style.display = "none";
    document.getElementById('titleForm').innerHTML = "Form Liputan";
}
function changePublikasi() {
    document.getElementById('liputan').style.display = "none";
    document.getElementById('publikasi').style.display = "block";
    document.getElementById('titleForm').innerHTML = "Form Publikasi";
}