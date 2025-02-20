function toggleMenu(){
    document.querySelector("nav ul").classList.toggle("show");
}
function toggleTheme(){
    document.body.classList.toggle("dark-mode");
    let themeIcon=document.querySelector("theme-toggle");
    themeIcon.textContent=document.body.classList.contains("dark-mode")?"":"";

}
document.addEventListener("DOMContentLoaded",function(){
    const elements=document.querySelectorAll(".fade-in");

    function checkScroll(){
        elements.forEach(element=>{
       const elementTop=element.getBoundingClientRect().top;
       const windowHeight=window.innerHeight;
       if(elementTop<windowHeight-100){
        element.classList.add("show");
       }
    });
}
window.addEventListener("scroll",checkScroll);
checkScroll();
});