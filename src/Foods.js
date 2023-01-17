const toggleButton = document.getElementsByClassName('toggle_button')[0]

const navbars = document.getElementsByClassName('navbr')[0]

toggleButton.addEventListener('click', () => {
    navbars.classList.toggle('active')
})
function table_changer(){
    var kitchen = document.getElementById('kitchen');

    if (kitchen.innerText == 'SARA COOKS'){
        console.log('this is what i need')
        kitchen.innerText = 'SARON COOKS';
    }
    else if (kitchen.innerText == 'SARON COOKS'){
        kitchen.innerText = 'CHALTU COOKS';
    }
    else if (kitchen.innerText == 'CHALTU COOKS'){
        kitchen.innerText = 'SARA COOKS';
    }
}