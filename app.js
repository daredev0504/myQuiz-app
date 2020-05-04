let fColor=document.querySelector('.color1');
let sColor=document.querySelector('.color2');
let result=document.querySelector('h3');

//let mainB=document.querySelector('#main');


fColor.addEventListener('input',function(){
    console.log(fcolor.value);  
})










let mobileOpen=()=> {
    let openNav=document.getElementById('mobileO');
    openNav.style.width='100%';
    openNav.style.opacity='90%';
}
let mobileClose=()=> {
    let closeNav=document.getElementById('mobileO');
    closeNav.style.width='0';
  
}