let dayNight = document.querySelector(".dayNight");
let banner = document.querySelector(".banner");

dayNight.addEventListener("click",()=>{
    banner.classList.toggle("night");
})
let typingEffect = new Typed("#text",{
    strings: [" Blockchain Developer","Buidler","Defi Dev"],
    loop:true,
     typeSpeed:100,
     backSpeed:50,
     backDelqay:1000
})