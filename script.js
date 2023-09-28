const menuBar = document.getElementById('menuBar');
const hideandshow = document.getElementById('ul');
let clutter = 0;
let container = document.querySelector('.container');

let toggle = () =>{
    if(clutter == 0){
        hideandshow.style.width = '50vw';
        clutter = 1;
    }else{
        hideandshow.style.width = '0';
        clutter = 0;
    }
}
container.addEventListener('click', (e)=>{
    if(e.target.classList[0] === 'ri-menu-line'){
        toggle();
    }else{
        hideandshow.style.width = '0';
        clutter = 0;
    }
    
})

// menuBar.addEventListener('click', toggle);


