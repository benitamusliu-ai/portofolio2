
function BM_validateForm() {
    const name = document.getElementById('BM-name').value.trim();
    const email = document.getElementById('BM-email').value.trim();
    const message = document.getElementById('BM-message').value.trim();
    if(name && email && message){
        alert("Faleminderit për mesazhin tuaj!");
        return true;
    }
    alert("Ju lutemi plotësoni të gjitha fushat!");
    return false;
}


function BM_toggleTheme() {
    document.body.classList.toggle('dark-theme');
}


const BM_carousels = document.querySelectorAll('.carousel');
BM_carousels.forEach(carousel => {
    carousel.addEventListener('slid.bs.carousel', () => {
        console.log('Slide ndryshoi');
    });
});


const BM_buttons = document.querySelectorAll('.BM-btn');
BM_buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('Butoni u klikuar:', btn.textContent);
    });
});
