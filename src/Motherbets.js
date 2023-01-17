const toggleButton = document.getElementsByClassName('toggle_button')[0]

const navbars = document.getElementsByClassName('navbr')[0]

toggleButton.addEventListener('click', () => {
    navbars.classList.toggle('active')
})
function campuses(){
    var campus = document.getElementById('campuses').value;
    var kitchen_6 = document.getElementsByClassName('Kitchen_6')
    var kitchen_5 = document.getElementsByClassName('Kitchen_5')
    var kitchen_4 = document.getElementsByClassName('Kitchen_4')
    var kitchen_3 = document.getElementsByClassName('Kitchen_3')
    var kitchen_2 = document.getElementsByClassName('Kitchen_2')
    var kitchen_1 = document.getElementsByClassName('Kitchen_1')
    console.log(campus)
    if (campus == '4'){
        kitchen_6.style.display = 'block';
        kitchen_5.style.display = 'block';
        kitchen_6.style.display.order = '1';
        kitchen_5.style.display.order = '2';
        kitchen_4.style.display.order = '3';
        kitchen_3.style.display.order = '4';
        kitchen_2.style.display = 'none';
        kitchen_1.style.display = 'none';
    }
    else if (campus == '5'){
        kitchen_6.style.display = 'block';
        kitchen_5.style.display = 'block';
        kitchen_6.style.display.order = '1';
        kitchen_5.style.display.order = '2';
        kitchen_4.style.display = 'none';
        kitchen_3.style.display= 'none';
        kitchen_2.style.display = '3';
        kitchen_1.style.display = '4';
    }
    else{
        kitchen_6.style.display = 'none';
        kitchen_5.style.display = 'none';
        kitchen_4.style.display = '1';
        kitchen_3.style.display= '2';
        kitchen_2.style.display = '3';
        kitchen_1.style.display = '4';
    }
}