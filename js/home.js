
function changeImage() {
    var image = document.getElementById('sponsor');
    var info = document.getElementById('info_');
    var first = document.getElementById('first');
    var second = document.getElementById('second');
    var third = document.getElementById('third');

    if (image.src.match("images/Foods/beyaynet1.jpg") || second.onclick) {
        image.src = "images/Foods/chechebsaa.jpg";
        info.innerHTML = "Special of the day: Chechebsa<br>Payment: 100 birr<br>Address: 5 kilo";
        first.style.width = '10px'
        first.style.height = '10px'
        first.style.backgroundColor = 'azure'
        second.style.width = '14px'
        second.style.height = '14px'
        second.style.backgroundColor = '#707070'
        second.style.borderRadius = '14px'
        third.style.width = '10px'
        third.style.height = '10px'
        third.style.backgroundColor = 'azure'
    }
    else if (image.src.match("images/Foods/chechebsaa.jpg" || third.onclick)) {
        image.src = "images/Foods/fiirfir.jpg";
        info.innerHTML = "Special of the day: Firfir<br>Payment: 50 birr<br>Address: 4 kilo MotherBets"
        second.style.width = '10px'
        second.style.height = '10px'
        second.style.backgroundColor = 'azure'
        third.style.width = '14px'
        third.style.height = '14px'
        third.style.backgroundColor = '#707070'
        third.style.borderRadius = '14px'
        first.style.width = '10px'
        first.style.height = '10px'
        first.style.backgroundColor = 'azure'
        first.style.marginTop = '0px'
        second.style.marginTop = '0px'
        third.style.marginTop = '-3px'
    }
    else{
        image.src = "images/Foods/beyaynet1.jpg"
        info.innerHTML = "Special of the day: Beyaynet<br>Payment: 80 birr<br>Address: 6 kilo MotherBets"
        second.style.width = '10px'
        second.style.height = '10px'
        first.style.marginTop = '-3px'
        second.style.marginTop = '0px'
        third.style.marginTop = '0px'
        second.style.backgroundColor = 'azure'
        third.style.width = '10px'
        third.style.height = '10px'
        third.style.backgroundColor = 'azure'
        first.style.width = '14px'
        first.style.height = '14px'
        first.style.backgroundColor = '#707070'
        first.style.borderRadius = '14px'

    }
}