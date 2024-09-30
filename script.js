const mouseIcon=document.querySelector(".mouse .mouseIcon");
const mouseText=document.querySelector(".mouse .text");

mouseIcon.addEventListener("mouseenter", ()=>{
    mouseText.classList.toggle("active", true);
});
mouseIcon.addEventListener("mouseleave", ()=>{
    mouseText.classList.toggle("active", false);
});