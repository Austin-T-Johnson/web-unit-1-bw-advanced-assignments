// you will need to toggle the visibility off and on with DOM selectors


// variables


const open1 = document.getElementById('open-modal-1');
const open2 = document.getElementById('open-modal-2');
const open3 = document.getElementById('open-modal-3');
const openvid = document.getElementById('open-modal-3');





const modal_container1 = document.getElementById('modal_container1');
const modal_container2 = document.getElementById('modal_container2');
const modal_container3 = document.getElementById('modal_container3');
const vid_container = document.getElementById('vid_container');

const close1 = document.getElementById('close1');
const close2 = document.getElementById('close2');
const close3 = document.getElementById('close3');
const closevid = document.getElementById('close3');


// eventListeners

// modal 1

open1.addEventListener('click', () => {
    modal_container1.classList.add('show');
});


close1.addEventListener('click', () => {
    modal_container1.classList.remove('show');
});

//modal 2

open2.addEventListener('click', () => {
    modal_container2.classList.add('show');
});

close2.addEventListener('click', () => {
    modal_container2.classList.remove('show');
});

open2.addEventListener('click', () => {
    modal2.classList.add('drop');
});

close2.addEventListener('click', () => {
    modal2.classList.remove('drop');
});

// modal 3

open3.addEventListener('click', () => {
    modal_container3.classList.add('show');
});

close3.addEventListener('click', () => {
    modal_container3.classList.remove('show');
});

openvid.addEventListener('click', ()=> {
    vid_container.classList.add('show');
});

closevid.addEventListener('click', () => {
    vid_container.classList.remove('show');
});


