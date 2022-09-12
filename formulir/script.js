function changeLiputan() {
    document.getElementById('liputan').style.display = "block";
    document.getElementById('publikasi').style.display = "none";
    document.getElementById('kotak_liputan').style.display = "block";
    document.getElementById('kotak_publikasi').style.display = "none";
}
function changePublikasi() {
    document.getElementById('liputan').style.display = "none";
    document.getElementById('publikasi').style.display = "block";
    document.getElementById('kotak_publikasi').style.display = "block";
    document.getElementById('kotak_liputan').style.display = "none";
}